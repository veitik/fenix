import { Section } from "@/components/Section";
import { companyData } from "@/data/company";
import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: 'Контакты | СК Феникс',
  description: 'Контактная информация ООО СК Феникс. Адрес, телефоны, email и реквизиты.',
};

export default function ContactsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Контакты
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации или запроса коммерческого предложения.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Связаться с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес офиса</h3>
                    <p className="text-gray-600 mt-1">{companyData.contacts.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Юридический и фактический адрес</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <a href={`tel:${companyData.contacts.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-primary transition-colors block mt-1">
                      {companyData.contacts.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${companyData.contacts.email}`} className="text-gray-600 hover:text-primary transition-colors block mt-1">
                      {companyData.contacts.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
               <h2 className="text-2xl font-bold text-gray-900 mb-6">Реквизиты компании</h2>
               <div className="bg-gray-50 p-6 rounded-xl text-sm text-gray-700 space-y-2 border border-gray-100">
                 <p><span className="font-semibold w-24 inline-block">ИНН:</span> {companyData.requisites.inn}</p>
                 <p><span className="font-semibold w-24 inline-block">КПП:</span> {companyData.requisites.kpp}</p>
                 <p><span className="font-semibold w-24 inline-block">ОГРН:</span> {companyData.requisites.ogrn}</p>
                 <p><span className="font-semibold w-24 inline-block">ОКПО:</span> {companyData.requisites.okpo}</p>
                 <div className="pt-2 mt-2 border-t border-gray-200">
                    <p className="font-semibold mb-1">Банковские реквизиты:</p>
                    <p>Р/счет {companyData.requisites.bank.account}</p>
                    <p>в {companyData.requisites.bank.name}</p>
                    <p>БИК {companyData.requisites.bank.bik}</p>
                    <p>к/с {companyData.requisites.bank.corr}</p>
                 </div>
               </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Оставить заявку</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Иван Иванов" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="mail@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Опишите вашу задачу..." />
                </div>
                <Button size="lg" className="w-full mt-4 text-base">
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <div className="h-[400px] w-full bg-gray-200 relative">
         {/* Placeholder for map */}
         <div className="absolute inset-0 flex items-center justify-center text-gray-500">
           Интерактивная карта (Яндекс/Google)
         </div>
      </div>
    </div>
  );
}
