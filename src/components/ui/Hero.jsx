import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark text-white py-20 md:py-32 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Сувенирные дубликаты автомобильных номеров
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Изготовление качественных дубликатов госномеров любой сложности. Стандартные, эксклюзивные и индивидуальные варианты. Доставка по всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Смотреть каталог
              <ArrowRight size={20} />
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition"
            >
              Связаться с нами
            </a>
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 md:mt-24">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition">
            <div className="text-3xl font-bold text-brand-red mb-2">13</div>
            <p className="text-gray-300">вариантов исполнения</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition">
            <div className="text-3xl font-bold text-brand-red mb-2">1-5</div>
            <p className="text-gray-300">дней изготовление</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition">
            <div className="text-3xl font-bold text-brand-red mb-2">100%</div>
            <p className="text-gray-300">качество и гарантия</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
