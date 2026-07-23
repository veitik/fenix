"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/Card";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { CheckCircle2, Award, Users, HardHat, ShieldCheck, Wrench, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";
import { AnimatedCounters } from "@/components/AnimatedCounters";
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
      <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-60"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          {/* subtle dot grid on top of video */}
          <div className="absolute inset-0 bg-dot-grid-dark opacity-20 z-10 pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-none bg-primary animate-pulse"></span>
                <span className="text-white text-sm font-medium tracking-wider uppercase">Генеральный подрядчик</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] uppercase">
                Масштаб.<br />
                Опыт.<br />
                <span className="text-primary">Инженерия.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-medium tracking-wide">
                {companyData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base font-semibold h-14 px-8 shadow-lg shadow-primary/30 group relative overflow-hidden bg-primary hover:bg-primary-hover text-white border-none rounded-none" href="/contacts">
                  <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
                    Обсудить проект
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white hover:text-gray-900 text-sm tracking-widest uppercase font-semibold h-14 px-8 backdrop-blur-sm rounded-none" href="/projects">
                  Наши проекты
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedCounters />

      {/* About Summary */}
      <Section className="bg-white overflow-hidden">
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-12 items-center"
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
      <Section className="relative bg-white overflow-hidden border-t border-cad-border">
        {/* CAD Style Grid Background */}
        <div className="absolute inset-0 z-0 bg-dot-grid opacity-50 pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8" ref={servicesRef}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight"
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              Наши Услуги
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={servicesInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-lg text-gray-600"
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              Комплексные строительные и инженерные решения. Строгий контроль качества на каждом этапе.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-cad-border bg-gray-50 relative z-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {servicesData.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={fadeUp}>
                  <div className="group relative overflow-hidden bg-white p-8 h-full border-[0.5px] border-cad-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 z-10 hover:z-20">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors uppercase tracking-wide text-sm">{service.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:translate-x-2 transition-transform uppercase tracking-wider text-xs" href="/services">
                        Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                    {/* decorative cad corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mt-12 relative z-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <Button size="lg" variant="outline" className="border-cad-border hover:border-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wider rounded-sm bg-white" href="/services">
              Все услуги
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Construction Process Timeline */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-20">
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
