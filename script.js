/* 1. Steam rising from a pot (canvas). Static if the visitor prefers reduced motion. */
(function () {
    const canvas = document.getElementById('steam');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const puffs = Array.from({ length: 22 }, () => spawn(true));

    function spawn(randomY) {
        return {
            x: W / 2 + (Math.random() - 0.5) * 60,
            y: randomY ? Math.random() * H : H - 40,
            r: 8 + Math.random() * 14,
            speed: 0.3 + Math.random() * 0.5,
            drift: Math.random() * Math.PI * 2,
            life: Math.random()
        };
    }

    function frame() {
        ctx.clearRect(0, 0, W, H);

        // the pot
        ctx.fillStyle = '#e2475b';
        ctx.beginPath();
        ctx.roundRect(W / 2 - 55, H - 40, 110, 34, [4, 4, 22, 22]);
        ctx.fill();
        ctx.fillStyle = '#f2b134';
        ctx.fillRect(W / 2 - 62, H - 46, 124, 7);

        // steam
        for (const p of puffs) {
            const alpha = Math.sin(Math.min(1, p.life) * Math.PI) * 0.22;
            ctx.fillStyle = 'rgba(244, 234, 213, ' + alpha.toFixed(3) + ')';
            ctx.beginPath();
            ctx.arc(p.x + Math.sin(p.drift) * 14, p.y, p.r * (0.6 + p.life), 0, Math.PI * 2);
            ctx.fill();
            if (!reduce) {
                p.y -= p.speed;
                p.drift += 0.02;
                p.life += 0.0035;
                if (p.life >= 1 || p.y < 0) Object.assign(p, spawn(false), { life: 0 });
            }
        }
        if (!reduce) requestAnimationFrame(frame);
    }
    frame();
})();

/* 2. Route map: hover or keyboard-focus a city to see the dish tied to it. */
(function () {
    const note = document.getElementById('routeNote');
    const stops = document.querySelectorAll('.stop[data-dish]');
    if (!note) return;
    const original = note.textContent;
    stops.forEach(function (s) {
        const show = function () { note.textContent = s.dataset.dish; };
        const reset = function () { note.textContent = original; };
        s.addEventListener('mouseenter', show);
        s.addEventListener('focus', show);
        s.addEventListener('mouseleave', reset);
        s.addEventListener('blur', reset);
    });
})();
