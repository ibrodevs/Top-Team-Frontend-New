"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SPLASH_DURATION = 2400;
const STORAGE_KEY = "tt-splash-seen";
const EASE = [0.16, 1, 0.3, 1];

export default function SplashScreen() {
  const reduceMotion = useReducedMotion();
  // SSR рендерит splash сразу, чтобы при первом заходе не мелькал контент под ним
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setShow(false);
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, "1");
    const timer = setTimeout(() => setShow(false), reduceMotion ? 900 : SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="grain-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-navy-950"
          exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
          aria-hidden="true"
        >
          <div className="stadium-glow pointer-events-none absolute inset-0" />

          {/* Центральный круг поля */}
          {!reduceMotion && (
            <motion.div
              className="pointer-events-none absolute h-[560px] w-[560px] rounded-full border border-electric/15 md:h-[720px] md:w-[720px]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
            />
          )}

          <motion.div
            className="relative flex flex-col items-center px-6"
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <motion.img
              src="/logo.png"
              alt=""
              className="h-20 w-20 object-contain md:h-24 md:w-24"
              initial={reduceMotion ? { opacity: 0 } : { scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: [
                  "drop-shadow(0 0 0px rgba(77,163,255,0))",
                  "drop-shadow(0 0 28px rgba(77,163,255,0.55))",
                ],
              }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            />

            <div className="mt-6 overflow-hidden">
              <motion.p
                className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl"
                initial={reduceMotion ? { opacity: 0 } : { y: "110%" }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              >
                TOP<span className="text-electric">TEAM</span>
              </motion.p>
            </div>

            <motion.p
              className="mt-3 font-heading text-[10px] uppercase tracking-[0.45em] text-ash md:text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Media Football Club · Kyrgyzstan
            </motion.p>

            {/* Линия-прогресс в стиле разметки поля */}
            {!reduceMotion && (
              <div className="relative mt-8 h-px w-48 overflow-hidden bg-white/10 md:w-64">
                <motion.div
                  className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-royal via-electric to-electric-light"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
