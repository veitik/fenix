import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-lg">
                Ф
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">СК ФЕНИКС</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Надежный партнер в области строительства, реконструкции и капитального ремонта объектов. Строим на века, гарантируем качество.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Навигация</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">О компании</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link href="/projects" className="text-sm text-gray-600 hover:text-primary transition-colors">Проекты</Link></li>
              <li><Link href="/certificates" className="text-sm text-gray-600 hover:text-primary transition-colors">Сертификаты</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Услуги</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-sm text-gray-600">Генподряд</li>
              <li className="text-sm text-gray-600">Отделочные работы</li>
              <li className="text-sm text-gray-600">Инженерные сети</li>
              <li className="text-sm text-gray-600">Капитальный ремонт</li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Контакты</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>426009, г. Ижевск, ул. Курортная, д. 12</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+73412375722" className="hover:text-primary transition-colors">8 (3412) 37-57-22</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:office@ckfenix.ru" className="hover:text-primary transition-colors">office@ckfenix.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} ООО «Строительная Компания «Феникс». Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
