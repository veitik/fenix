import { Section } from "@/components/Section";
import { companyData } from "@/data/company";
import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";

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

      <Section className="bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dot-grid opacity-[0.15] pointer-events-none"></div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Связаться с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес офиса</h3>
                    <p className="text-gray-600 mt-1">{companyData.contacts.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Юридический и фактический адрес</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center text-primary shrink-0">
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
                  <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center text-primary shrink-0">
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
               <div className="bg-gray-50 p-6 rounded-none text-sm text-gray-700 space-y-2 border border-gray-100">
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
            <div className="bg-gray-50 rounded-none p-8 border border-gray-100 shadow-xl shadow-gray-200/40">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Как заказать услуги?</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Для заказа строительных, ремонтных или отделочных работ, а также для получения подробной консультации и расчета стоимости, пожалуйста, свяжитесь с нами напрямую.
                </p>
                <div className="p-6 bg-primary/5 rounded-none border border-primary/10">
                  <h3 className="font-semibold text-gray-900 mb-2">Наши специалисты готовы ответить на ваши вопросы:</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-none bg-gray-50 flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Phone size={16} />
                      </div>
                      <a href={`tel:${companyData.contacts.phone.replace(/[^0-9+]/g, '')}`} className="font-medium hover:text-primary transition-colors">
                        {companyData.contacts.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-none bg-gray-50 flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Mail size={16} />
                      </div>
                      <a href={`mailto:${companyData.contacts.email}`} className="font-medium hover:text-primary transition-colors">
                        {companyData.contacts.email}
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="text-sm">
                  Мы работаем с промышленными предприятиями и частными лицами, выполняя полный комплекс работ «под ключ».
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="h-[500px] w-full bg-gray-200 relative">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=53.251000%2C56.848805&mode=search&text=Ижевск,+Курортная+улица,+12&z=16"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={true}
          style={{ position: 'relative' }}
          title="Интерактивная карта Яндекс - СК Феникс"
        ></iframe>
      </div>
    </div>
  );
}
