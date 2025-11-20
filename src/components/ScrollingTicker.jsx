import { useEffect, useRef } from 'react';

export default function ScrollingTicker({ items }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    let raf;

    const step = (t) => {
      const speed = 0.04; // px/ms
      const x = (t * speed) % el.scrollWidth;
      el.style.transform = `translateX(${-x}px)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex whitespace-nowrap will-change-transform" ref={ref}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="px-6 py-3 text-sm text-blue-100/80">{item}</span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  );
}
