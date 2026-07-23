import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/Card";
import { servicesData } from "@/data/services";
import { Button } from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Услуги | СК Феникс',
  description: 'Полный перечень строительных, ремонтных и отделочных услуг, предоставляемых СК Феникс.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши Услуги
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Мы предлагаем полный комплекс строительных и ремонтных работ, выступая как генеральный подрядчик для реализации проектов любой сложности.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group hover:border-primary/50 transition-colors bg-white shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all" href={`/contacts?service=${service.id}`}>
                    Заказать расчет
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Нужна нестандартная услуга?</h2>
          <p className="text-gray-400 mb-8">
            Оставьте заявку, и наши инженеры свяжутся с вами для обсуждения деталей вашего проекта.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary-hover" href="/contacts">
             Связаться с инженером
          </Button>
        </div>
      </Section>
    </div>
  );
}
