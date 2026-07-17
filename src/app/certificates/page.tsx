import { Section } from "@/components/Section";
import { certificatesData } from "@/data/projects";
import { Metadata } from "next";

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

      <Section className="bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="group flex flex-col gap-4">
              <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer shadow-sm group-hover:shadow-md transition-shadow">
                {/* Fallback image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 p-8 text-center bg-white">
                  <span className="text-sm">Скан документа<br/>{cert.image.split('/').pop()}</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="text-center px-2">
                <h3 className="font-semibold text-gray-900 mb-1">{cert.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{cert.description}</p>
              </div>
            </div>
          ))}
          {/* Add visual placeholders for demo purposes since actual images are missing */}
          {[1,2,3].map((i) => (
            <div key={`placeholder-${i}`} className="group flex flex-col gap-4">
              <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer shadow-sm group-hover:shadow-md transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 p-8 text-center bg-white">
                  <span className="text-sm">Свидетельство №{i}</span>
                </div>
              </div>
              <div className="text-center px-2">
                <h3 className="font-semibold text-gray-900 mb-1">Допуск СРО</h3>
                <p className="text-sm text-gray-600 line-clamp-2">Приложение к свидетельству</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
