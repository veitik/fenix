import { Section } from "@/components/Section";
import { reviewsData } from "@/data/projects";
import { Metadata } from "next";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: 'Отзывы | СК Феникс',
  description: 'Отзывы клиентов о работе Строительной Компании Феникс.',
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Отзывы Заказчиков
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Долгосрочные партнерские отношения и доверие клиентов — наша главная ценность.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-2xl p-8 md:p-10 relative">
              <Quote className="absolute top-8 right-8 text-gray-200 w-12 h-12" />
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.client.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.client}</h4>
                  <p className="text-sm text-gray-500">Заказчик</p>
                </div>
              </div>

              {/* Optional scan of the review document */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="text-sm font-medium text-primary hover:text-primary-hover flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                  Смотреть скан отзыва
                </button>
              </div>
            </div>
          ))}

          {/* Dummy extra review for layout */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 relative">
             <Quote className="absolute top-8 right-8 text-gray-200 w-12 h-12" />
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  &quot;Комплексный подход, четкая организация и высококлассный состав инженеров позволили реализовать проект точно в срок.&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  О
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">ОАО &quot;Ижевский мотозавод&quot;</h4>
                  <p className="text-sm text-gray-500">Заказчик</p>
                </div>
              </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
