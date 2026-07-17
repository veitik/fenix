import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/Card";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { CheckCircle2, Award, Users, HardHat, ShieldCheck, Wrench, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Fallback pattern if image is missing */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Надежность, проверенная <span className="text-primary">временем</span> и делом
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Полный комплекс строительных, ремонтных и отделочных работ. Строим и реконструируем промышленные и гражданские объекты &quot;под ключ&quot;.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="/contacts" className="text-base font-semibold">
                Запросить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-base font-semibold" href="/projects">
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Опыт, инженерия и профессионализм</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {companyData.description}
              </p>
              <p>
                Комплексный подход, четкая организационная политика, профессиональный менеджмент и высококлассный состав специалистов позволяют нам реализовывать проекты различной сложности на высочайшем уровне.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="outline" href="/about" className="flex items-center gap-2">
                  Подробнее о компании <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">10+ лет</h3>
                <p className="text-sm text-gray-500">Безупречного опыта</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-none shadow-sm translate-y-4">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Профи</h3>
                <p className="text-sm text-gray-500">Штат инженеров</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-none shadow-sm -translate-y-4">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Wrench size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Свое</h3>
                <p className="text-sm text-gray-500">Оборудование</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Допуск</h3>
                <p className="text-sm text-gray-500">Членство в СРО</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-gray-50 border-y border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши Услуги</h2>
          <p className="text-gray-600">
            Мы предлагаем полный спектр строительных и ремонтных услуг, выполняя работы качественно и точно в срок.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="hover:shadow-md transition-shadow group cursor-pointer border-gray-100">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="lg">
            Смотреть все услуги
          </Button>
        </div>
      </Section>

      {/* Construction Process Timeline */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Процесс Работы</h2>
          <p className="text-gray-600">
            Прозрачный и понятный алгоритм взаимодействия для достижения лучшего результата.
          </p>
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {[
              { title: "Консультация", icon: Users, desc: "Обсуждение задачи" },
              { title: "Смета", icon: FileText, desc: "Расчет стоимости" },
              { title: "Договор", icon: ShieldCheck, desc: "Юридическая защита" },
              { title: "Строительство", icon: HardHat, desc: "Выполнение работ" },
              { title: "Сдача объекта", icon: CheckCircle2, desc: "Готовый результат" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center bg-white">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-primary shadow-sm mb-4 relative">
                  <step.icon size={28} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Teaser */}
      <Section className="bg-gray-900 text-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Реализованные Проекты</h2>
            <p className="text-gray-400">
              Среди наших заказчиков присутствуют крупные предприятия Ижевска и России.
            </p>
          </div>
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800" href="/projects">
            Все проекты
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-primary mb-2 block">{project.category}</span>
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
