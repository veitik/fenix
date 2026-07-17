import { Section } from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Галерея | СК Феникс',
  description: 'Фотогалерея объектов и рабочих процессов строительной компании Феникс.',
};

export default function GalleryPage() {
  // Mock gallery items for structure
  const galleryItems = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    height: i % 3 === 0 ? "h-96" : i % 2 === 0 ? "h-64" : "h-80",
    category: i % 2 === 0 ? "Процесс" : "Результат"
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Фотогалерея
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Наши объекты на разных этапах строительства и ремонта.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative break-inside-avoid w-full ${item.height} bg-gray-100 rounded-xl overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200 transition-transform duration-500 group-hover:scale-105">
                 <span>Фото {item.id + 1}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
