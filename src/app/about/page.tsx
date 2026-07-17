import { Section } from "@/components/Section";
import { companyData } from "@/data/company";
import { CheckCircle2, ShieldCheck, Users, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'О Компании | СК Феникс',
  description: 'Информация о Строительной Компании Феникс. История, опыт, наши преимущества и свидетельства СРО.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О Компании
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы — профессиональная команда строителей и инженеров, готовая реализовать проект любой сложности от идеи до сдачи &quot;под ключ&quot;.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история и опыт</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {companyData.name} осуществляет свою деятельность в области строительства, реконструкции, капитального ремонта объектов капитального строительства.
              </p>
              <p>
                {companyData.description}
              </p>
              <p>
                За время своего существования наша компания зарекомендовала себя, как надежный и ответственный партнер. Подтверждением этого являются отзывы на выполненные работы, полученные от крупных и известных организаций Удмуртской Республики, Пермского края и других регионов.
              </p>
              <p>
                Для выполнения указанных работ наша организация обладает всем необходимым инструментом, собственными транспортными средствами и богатым опытом выполнения всего комплекса строительно-монтажных работ.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши преимущества</h3>
            <ul className="space-y-6">
              {[
                { title: "Официальный допуск СРО", desc: "Свидетельство " + companyData.sro, icon: ShieldCheck },
                { title: "Профессиональный коллектив", desc: "Штат высококлассных инженеров, прорабов, мастеров и рабочих.", icon: Users },
                { title: "Собственная материальная база", desc: "Необходимый инструмент и собственные транспортные средства.", icon: Briefcase },
                { title: "Гарантия качества", desc: "Долгосрочные партнерские взаимоотношения и взаимная выгода.", icon: CheckCircle2 },
              ].map((adv, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <adv.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{adv.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{adv.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-900 font-medium mb-1">Директор {companyData.shortName}:</p>
              <p className="text-gray-600">{companyData.director}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
