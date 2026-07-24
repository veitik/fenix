"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 2, suffix = "", text }: { from: number; to: number; duration?: number; suffix?: string; text: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            // format with spaces for thousands
            const formatted = Math.round(value).toLocaleString('ru-RU');
            nodeRef.current.textContent = `${formatted}${suffix}`;
          }
        },
      });
      setHasAnimated(true);
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, hasAnimated, suffix]);

  return (
    <div ref={inViewRef} className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 border-[0.5px] border-cad-border hover:shadow-xl transition-shadow relative overflow-hidden group">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 block tracking-tight">
          <span ref={nodeRef}>{from}{suffix}</span>
        </span>
        <span className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-wider">{text}</span>
      </motion.div>
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export function AnimatedCounters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto -mt-16 sm:-mt-24 lg:-mt-28 relative z-20 shadow-2xl bg-gray-50 border border-cad-border mb-16 lg:mb-24">
      <Counter from={0} to={10} suffix="+" text="Лет на рынке" duration={2} />
      <Counter from={0} to={50000} suffix="+" text="м² сданных объектов" duration={2.5} />
      <Counter from={0} to={100} suffix="%" text="Соблюдение сроков" duration={2.2} />
    </div>
  );
}
