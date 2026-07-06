// Shared motion wiring for Top Team pages.
// initMotion(root, {motion, accent}) — wires reveals, counters, magnetic buttons,
// and player-tile hover. Respects prefers-reduced-motion / motion:false.
export function initMotion(root, opts = {}) {
  if (!root) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || opts.motion === false;

  if (opts.accent) root.style.setProperty('--volt', opts.accent);

  if (reduce) {
    root.querySelectorAll('[data-reveal]').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    root.querySelectorAll('[data-count]').forEach(el => { el.textContent = el.getAttribute('data-count'); });
    root.querySelectorAll('[data-motion-el]').forEach(el => { el.style.animation = 'none'; });
    return;
  }

  // reveals
  const io = new IntersectionObserver((ents) => {
    ents.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'none'; io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
  root.querySelectorAll('[data-reveal]').forEach(el => {
    const d = el.getAttribute('data-delay') || '0';
    el.style.transition = 'opacity .9s cubic-bezier(.16,1,.3,1) ' + d + 'ms, transform .9s cubic-bezier(.16,1,.3,1) ' + d + 'ms';
    io.observe(el);
  });

  // counters
  const runCount = (el) => {
    const to = parseFloat(el.getAttribute('data-count')) || 0;
    const dur = 1500, start = performance.now();
    const ease = (t) => 1 - Math.pow(2, -10 * t);
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(ease(t) * to);
      if (t < 1) requestAnimationFrame(step); else el.textContent = to;
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver((ents) => {
    ents.forEach(e => { if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.5 });
  root.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  // magnetic buttons
  root.querySelectorAll('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      btn.style.transform = 'translate(' + (mx * 0.28) + 'px,' + (my * 0.4) + 'px)';
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });

  // player tile hover -> "motion"
  root.querySelectorAll('[data-player]').forEach(tile => {
    const badge = tile.querySelector('[data-badge]');
    const img = tile.querySelector('[data-pimg]');
    const scan = tile.querySelector('[data-scan]');
    tile.addEventListener('mouseenter', () => { if (badge) badge.style.opacity = '1'; if (img) img.style.transform = 'scale(1.06)'; if (scan) scan.style.opacity = '1'; });
    tile.addEventListener('mouseleave', () => { if (badge) badge.style.opacity = '0'; if (img) img.style.transform = 'scale(1)'; if (scan) scan.style.opacity = '0'; });
  });
}
