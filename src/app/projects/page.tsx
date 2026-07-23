import { Section } from "@/components/Section";
import { projectsData } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Проекты | СК Феникс',
  description: 'Реализованные проекты строительной компании Феникс. Промышленное и гражданское строительство, ремонтные работы.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Реализованные Проекты
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Опыт успешной реализации проектов различного масштаба — от капитального ремонта до строительства сложных промышленных объектов.
          </p>
        </div>
      </section>

      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <Image src="/images/textures/gravel.webp" alt="background texture" fill className="object-cover" />
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projectsData.map((project) => (
            <div key={project.id} className="break-inside-avoid rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group bg-white">
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-primary z-10 shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
