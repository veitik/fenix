import { Section } from "@/components/Section";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Галерея | СК Феникс',
  description: 'Фотогалерея объектов и рабочих процессов строительной компании Феникс.',
};

export default function GalleryPage() {
  // Real gallery items parsed from page-4
  const galleryItems = [
    { id: 1, image: "/images/gallery/IMG-0001.jpg", category: "Отделочные работы" },
    { id: 2, image: "/images/gallery/IMG-0002.jpg", category: "Строительно-монтажные работы" },
    { id: 3, image: "/images/gallery/IMG-0003.jpg", category: "Инженерные сети" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Фотогалерея
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Наши объекты на разных этапах строительства и ремонта.
          </p>
        </div>
      </section>

      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <Image src="/images/textures/gravel.webp" alt="background texture" fill className="object-cover" />
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative break-inside-avoid w-full h-80 bg-gray-100 rounded-xl overflow-hidden group cursor-pointer block border border-gray-100"
            >
              <Image
                src={item.image}
                alt={`Фото ${item.id} - ${item.category}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
