"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О компании", href: "/about" },
  { name: "Услуги", href: "/services" },
  { name: "Проекты", href: "/projects" },
  { name: "Сертификаты", href: "/certificates" },
  { name: "Галерея", href: "/gallery" },
  { name: "Отзывы", href: "/reviews" },
  { name: "Контакты", href: "/contacts" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        scrolled ? "bg-gray-50/95 backdrop-blur-md shadow-sm py-3" : "bg-gray-50 py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Replace /images/logo.png with your actual logo path and adjust dimensions if needed */}
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Логотип СК ФЕНИКС"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight leading-none text-gray-900">СК ФЕНИКС</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Строительная компания</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <a href="tel:+73412375722" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" />
                8 (3412) 37-57-22
             </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-50 border-b border-gray-100 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-800 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a href="tel:+73412375722" className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <Phone size={18} className="text-primary" />
                    8 (3412) 37-57-22
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
