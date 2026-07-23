import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/Card";
import { servicesData } from "@/data/services";
import { Button } from "@/components/Button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Услуги | СК Феникс',
  description: 'Полный перечень строительных, ремонтных и отделочных услуг, предоставляемых СК Феникс.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-16 md:py-24 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image src="/images/textures/concrete.webp" alt="concrete" fill className="object-cover opacity-30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши Услуги
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            Мы предлагаем полный комплекс строительных и ремонтных работ, выступая как генеральный подрядчик для реализации проектов любой сложности.
          </p>
        </div>
      </section>

      <Section className="relative bg-white overflow-hidden">
        {/* Background texture for the section */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <Image src="/images/textures/gravel.webp" alt="texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group relative overflow-hidden transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/50">
                {/* Dynamic Background Image for each service */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Heavy white overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-white/85" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 drop-shadow-sm">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription className="text-base text-gray-800 mb-6 flex-grow font-medium">
                      {service.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full bg-white/50 backdrop-blur-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all font-semibold" href={`/contacts?service=${service.id}`}>
                      Заказать расчет
                    </Button>
                  </CardContent>
                </div>
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
