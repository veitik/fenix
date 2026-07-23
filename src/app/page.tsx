"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/Card";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { CheckCircle2, Award, Users, HardHat, ShieldCheck, Wrench, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  // Intersection observers for triggering animations on scroll
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Redesigned with premium image and floating elements */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Строительство"
            fill
            className="object-cover"
            priority
          />
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-hover mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Генеральный подрядчик</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Надежность,<br/>проверенная <span className="text-primary">временем</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Полный комплекс строительных, ремонтных и отделочных работ. Строим и реконструируем промышленные и гражданские объекты &quot;под ключ&quot;.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href="/contacts" className="text-base font-semibold shadow-lg shadow-primary/20 h-14 px-8 text-white">
                  Заказать расчет проекта
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white hover:text-gray-900 text-base font-semibold h-14 px-8 backdrop-blur-sm" href="/projects">
                  Смотреть портфолио
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Accent Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block absolute bottom-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
               <ShieldCheck size={24} />
            </div>
            <div className="text-white">
              <p className="font-bold text-xl">СРО</p>
              <p className="text-xs text-gray-300">Официальный допуск</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 line-clamp-2">
            Гарантируем качество и безопасность работ в соответствии с госстандартами.
          </p>
        </motion.div>
      </section>

      {/* About Summary */}
      <Section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
           <Image src="/images/textures/blocks.webp" alt="blocks texture" fill className="object-cover" />
        </div>
        <motion.div
          ref={aboutRef}
          className="relative z-10 grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Опыт, инженерия<br/>и профессионализм</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                {companyData.description}
              </p>
              <p>
                Комплексный подход, четкая организационная политика, профессиональный менеджмент и высококлассный состав специалистов позволяют нам реализовывать проекты различной сложности на высочайшем уровне.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="outline" href="/about" className="flex items-center gap-2 font-medium">
                  Подробнее о компании <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105 z-0"></div>

            <Card className="bg-white border-gray-100 shadow-xl shadow-gray-200/50 z-10">
              <CardContent className="p-8 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Award size={28} />
                </div>
                <h3 className="font-bold text-2xl text-gray-900">10+ лет</h3>
                <p className="text-sm text-gray-500">Безупречного опыта</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-xl shadow-gray-200/50 translate-y-6 z-10">
              <CardContent className="p-8 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Users size={28} />
                </div>
                <h3 className="font-bold text-2xl text-gray-900">Профи</h3>
                <p className="text-sm text-gray-500">Штат инженеров</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-xl shadow-gray-200/50 -translate-y-6 z-10">
              <CardContent className="p-8 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Wrench size={28} />
                </div>
                <h3 className="font-bold text-2xl text-gray-900">Свое</h3>
                <p className="text-sm text-gray-500">Оборудование</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 shadow-xl shadow-gray-200/50 z-10">
              <CardContent className="p-8 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-bold text-2xl text-gray-900">Допуск</h3>
                <p className="text-sm text-gray-500">Членство в СРО</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </Section>

      {/* Services Overview */}
      <Section className="relative border-y border-gray-200/60 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <Image src="/images/textures/concrete.webp" alt="concrete texture" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-[1px] pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Экспертиза</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Наши Услуги</h2>
          <p className="text-gray-600 text-lg">
            Мы предлагаем полный спектр строительных и ремонтных услуг, выполняя работы качественно и точно в срок.
          </p>
        </div>

        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <Card className="h-full group relative overflow-hidden transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/50">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-[1px] transition-colors duration-300 group-hover:bg-white/90" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon size={26} />
                      </div>
                      <CardTitle className="text-xl text-gray-900 drop-shadow-sm">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <CardDescription className="text-base text-gray-800 leading-relaxed font-medium">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative z-10 mt-16 text-center">
          <Button href="/services" variant="outline" size="lg" className="border-gray-300 px-8 text-base">
            Смотреть все услуги
          </Button>
        </div>
      </Section>

      {/* Construction Process Timeline */}
      <Section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
           <Image src="/images/textures/wood.webp" alt="wood texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-20">
           <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Этапы</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Процесс Работы</h2>
          <p className="text-gray-600 text-lg">
            Прозрачный и понятный алгоритм взаимодействия для достижения лучшего результата.
          </p>
        </div>

        <motion.div
          ref={processRef}
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {[
              { title: "Консультация", icon: Users, desc: "Обсуждение задачи" },
              { title: "Смета", icon: FileText, desc: "Расчет стоимости" },
              { title: "Договор", icon: ShieldCheck, desc: "Юридическая защита" },
              { title: "Строительство", icon: HardHat, desc: "Выполнение работ" },
              { title: "Сдача объекта", icon: CheckCircle2, desc: "Готовый результат" }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-[6px] border-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300 shadow-sm mb-6 relative">
                  <step.icon size={32} />
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Projects Teaser */}
      <Section className="bg-gray-950 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Портфолио</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Реализованные Проекты</h2>
              <p className="text-gray-400 text-lg">
                Среди наших заказчиков присутствуют крупные предприятия Ижевска и России.
              </p>
            </div>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all px-8" href="/projects">
              Все проекты
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {projectsData.slice(0, 3).map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 aspect-[4/3] shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
