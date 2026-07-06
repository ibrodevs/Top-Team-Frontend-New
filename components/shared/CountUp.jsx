"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ value, duration = 1.6, suffix = "", prefix = "", decimals = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));
    const frame = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      setDisplayValue(value * easeOutExpo(progress));
      if (progress < 1) window.requestAnimationFrame(frame);
    };

    window.requestAnimationFrame(frame);
  }, [duration, inView, value]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString("ru-RU");
  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
