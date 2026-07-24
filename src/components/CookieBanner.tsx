"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay so it doesn't instantly jump at the user
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pb-6"
        >
          <div className="max-w-5xl mx-auto bg-gray-50/95 backdrop-blur-md rounded-none shadow-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
              Мы используем файлы cookie для улучшения работы сайта и анализа трафика. Продолжая использовать сайт, вы соглашаетесь с нашей{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                Политикой конфиденциальности
              </Link>{" "}
              и обработкой персональных данных.
            </div>
            <div className="flex shrink-0 w-full md:w-auto">
              <Button onClick={acceptCookies} className="w-full md:w-auto font-semibold px-8 py-6 text-base shadow-lg shadow-primary/20">
                Я согласен
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
