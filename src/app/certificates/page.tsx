import { Section } from "@/components/Section";
import { certificatesData } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Сертификаты и Лицензии | СК Феникс',
  description: 'Официальные документы, допуски СРО и сертификаты ООО СК Феникс.',
};

export default function CertificatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Сертификаты и Лицензии
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Официальные документы, подтверждающие нашу квалификацию и право на осуществление строительной деятельности.
          </p>
        </div>
      </section>

      <Section className="bg-white/80 backdrop-blur-[2px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="group flex flex-col gap-4">
              <a href={cert.image} target="_blank" rel="noopener noreferrer" className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer shadow-sm group-hover:shadow-md transition-shadow block">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium text-sm transition-opacity shadow-sm">
                     Увеличить
                   </div>
                </div>
              </a>
              <div className="text-center px-2">
                <h3 className="font-semibold text-gray-900 mb-1">{cert.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
