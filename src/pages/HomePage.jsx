import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/ui/Hero';
import CategoryCard from '../components/catalog/CategoryCard';
import ProductCard from '../components/catalog/ProductCard';
import ProductModal from '../components/catalog/ProductModal';
import {
  Car,
  Armchair,
  Droplets,
  Gauge,
  Wind,
  Shield,
  Zap,
  Package,
} from 'lucide-react';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };
  const categories = [
    { title: 'Сувенирные дубликаты номеров', itemCount: 11, icon: Package, href: '#products' },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: 'Дубликат номера "Стандарт"',
      price: 1600,
      oldPrice: null,
      description: 'Стандартный дубликат госномера. Классический вариант для повседневного использования.',
      fullDescription: 'Стандартный сувенирный дубликат государственного номера. Изготовлен по ГОСТ с соблюдением всех параметров.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Стандартное исполнение\n- Светоотражающая поверхность\n- Качественная печать\n- Устойчивость к погодным условиям\n- Изготовление 1-2 дня',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Стандарт',
        'Светоотражение': 'Да',
        'Срок изготовления': '1-2 дня',
      },
    },
    {
      id: 2,
      title: 'Дубликат номера "Средний"',
      price: 2500,
      oldPrice: null,
      description: 'Дубликат номера среднего размера. Улучшенное качество материалов.',
      fullDescription: 'Сувенирный дубликат государственного номера среднего класса с улучшенными характеристиками.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Улучшенные материалы\n- Повышенная износостойкость\n- Яркая печать символов\n- Светоотражающая поверхность\n- Срок службы увеличен',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Средний',
        'Светоотражение': 'Да',
        'Срок изготовления': '1-2 дня',
      },
    },
    {
      id: 3,
      title: 'Дубликат номера "Жирный матовый"',
      price: 2700,
      oldPrice: null,
      description: 'Номер с жирным шрифтом и матовой поверхностью. Стильный внешний вид.',
      fullDescription: 'Дубликат номера с жирным шрифтом и элегантной матовой поверхностью для тех, кто ценит стиль.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Жирный шрифт символов\n- Матовая поверхность\n- Премиальный внешний вид\n- Светоотражающий слой\n- Устойчивость к царапинам',
      image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Жирный',
        'Поверхность': 'Матовая',
        'Светоотражение': 'Да',
        'Срок изготовления': '1-2 дня',
      },
    },
    {
      id: 4,
      title: 'Дубликат номера "Жирный глянец"',
      price: 3300,
      oldPrice: null,
      description: 'Номер с жирным шрифтом и глянцевой поверхностью. Яркий и заметный.',
      fullDescription: 'Дубликат номера с жирным шрифтом и блестящей глянцевой поверхностью.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Жирный шрифт\n- Глянцевая поверхность\n- Яркий внешний вид\n- Повышенная видимость\n- Премиум качество',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Жирный',
        'Поверхность': 'Глянцевая',
        'Светоотражение': 'Да',
        'Срок изготовления': '1-2 дня',
      },
    },
    {
      id: 5,
      title: 'Дубликат номера с выдавленным флагом',
      price: 3500,
      oldPrice: null,
      description: 'Номер с жирным шрифтом и объемным выдавленным флагом. Матовое или глянцевое покрытие.',
      fullDescription: 'Эксклюзивный дубликат номера с объемным выдавленным флагом и жирным шрифтом.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Жирный шрифт\n- Выдавленный объемный флаг\n- На выбор: матовое или глянцевое покрытие\n- Премиальное исполнение\n- Уникальный дизайн',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Жирный с флагом',
        'Флаг': 'Выдавленный объемный',
        'Поверхность': 'Матовая / Глянцевая',
        'Срок изготовления': '2-3 дня',
      },
    },
    {
      id: 6,
      title: 'Дубликат номера "Раскраска Луи"',
      price: 3900,
      oldPrice: null,
      description: 'Эксклюзивный дизайн в стиле Луи. Для ценителей роскоши и стиля.',
      fullDescription: 'Дубликат номера с эксклюзивной раскраской в стиле Луи. Премиальное оформление для настоящих ценителей.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Уникальная раскраска\n- Стиль премиум-бренда\n- Эксклюзивный дизайн\n- Высокое качество печати\n- Устойчивые краски',
      image: 'https://images.unsplash.com/photo-1627454820516-fa6f5f021523?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1627454820516-fa6f5f021523?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Эксклюзивный',
        'Дизайн': 'Раскраска Луи',
        'Светоотражение': 'Да',
        'Срок изготовления': '2-3 дня',
      },
    },
    {
      id: 7,
      title: 'Дубликат номера "Раскраска Карбон"',
      price: 3900,
      oldPrice: null,
      description: 'Спортивный стиль с раскраской под карбон. Для любителей автоспорта.',
      fullDescription: 'Дубликат номера с эффектной раскраской под карбон. Идеально для спортивных автомобилей.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Раскраска под карбон\n- Спортивный стиль\n- Реалистичная текстура\n- Высокое качество\n- Устойчивость к выгоранию',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Эксклюзивный',
        'Дизайн': 'Раскраска Карбон',
        'Светоотражение': 'Да',
        'Срок изготовления': '2-3 дня',
      },
    },
    {
      id: 8,
      title: 'Иностранные номера',
      price: 4000,
      oldPrice: null,
      description: 'Дубликаты номеров других стран. Широкий выбор государств.',
      fullDescription: 'Сувенирные дубликаты номеров зарубежных государств. Изготавливаются по стандартам страны.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Любая страна на выбор\n- Соответствие стандартам страны\n- Качественное исполнение\n- Уникальный сувенир\n- Индивидуальное изготовление',
      image: 'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Иностранный',
        'Страна': 'На выбор',
        'Срок изготовления': '3-4 дня',
      },
    },
    {
      id: 9,
      title: 'Дубликат номера "Black Edition"',
      price: 4000,
      oldPrice: null,
      description: 'Премиальная черная версия номера. Стильный и элегантный дизайн.',
      fullDescription: 'Эксклюзивная черная версия номера Black Edition. Для тех, кто ценит стиль и элегантность.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Черный цвет основы\n- Контрастные символы\n- Премиальный вид\n- Уникальный дизайн\n- Светоотражающие элементы',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Black Edition',
        'Цвет': 'Черный',
        'Светоотражение': 'Да',
        'Срок изготовления': '2-3 дня',
      },
    },
    {
      id: 10,
      title: 'Дубликат без светоотражения (НОВИНКА)',
      price: 5000,
      oldPrice: null,
      description: 'Новинка! Дубликат номера без светоотражающего покрытия. Матовый премиум.',
      fullDescription: 'Новинка в нашем каталоге! Дубликат номера без светоотражающего покрытия для эксклюзивного вида.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Без светоотражения\n- Матовое покрытие премиум\n- Элегантный внешний вид\n- Эксклюзивное исполнение\n- Новинка 2025 года',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Премиум',
        'Светоотражение': 'Нет',
        'Покрытие': 'Матовое',
        'Новинка': 'Да',
        'Срок изготовления': '2-3 дня',
      },
    },
    {
      id: 11,
      title: 'Дубликаты с вашим окрасом',
      price: 4000,
      oldPrice: null,
      description: 'Индивидуальный дизайн! Создайте номер с уникальным окрасом на ваш выбор.',
      fullDescription: 'Эксклюзивная услуга - создание номера с вашим собственным уникальным окрасом.\n\nОсобенности:\n- Цена указана за комплект (2 шт)\n- Любой цвет на выбор\n- Индивидуальный дизайн\n- Согласование макета\n- Уникальность\n- Высокое качество печати',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      ],
      inStock: true,
      specifications: {
        'Комплект': '2 номера',
        'Тип': 'Индивидуальный',
        'Окрас': 'На выбор заказчика',
        'Срок изготовления': '3-5 дней',
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero секция */}
        <Hero />

        {/* Категории */}
        <section className="py-16 md:py-20 bg-white" id="catalog">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Наши услуги
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Изготавливаем сувенирные дубликаты автомобильных номеров любой сложности
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Популярные товары */}
        <section className="py-16 md:py-20 bg-gray-50" id="products">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                  Варианты исполнения
                </h2>
                <p className="text-gray-600">
                  Все доступные варианты дубликатов номеров. Цены указаны за комплект!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Модальное окно товара */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Дополнительные опции */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Дополнительные опции
              </h2>
              <p className="text-gray-600">
                Персонализируйте ваш номер дополнительными услугами
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-brand-red transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 rounded-lg flex-shrink-0">
                    <Package size={24} className="text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      Флаг любой страны
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Добавьте флаг любой страны или республики к вашему номеру
                    </p>
                    <div className="text-2xl font-bold text-brand-red">
                      +800 ₽ <span className="text-sm font-normal text-gray-500">к цене</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-brand-red transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 rounded-lg flex-shrink-0">
                    <Zap size={24} className="text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      Замена надписи RUS
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Замените стандартную надпись RUS на ваше слово
                    </p>
                    <div className="text-2xl font-bold text-brand-red">
                      +800 ₽ <span className="text-sm font-normal text-gray-500">к цене</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
                <span className="font-semibold text-brand-dark">Важно:</span> Все цены указаны за комплект из 2-х номеров!
              </p>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Почему выбирают нас
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-4">
                  <Shield size={32} className="text-brand-red" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  Качественные материалы
                </h3>
                <p className="text-gray-600 text-sm">
                  Используем только качественные материалы, устойчивые к погодным условиям
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-4">
                  <Zap size={32} className="text-brand-red" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  Быстрое изготовление
                </h3>
                <p className="text-gray-600 text-sm">
                  Изготовление от 1 до 5 дней в зависимости от сложности
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-4">
                  <Package size={32} className="text-brand-red" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  Доставка по России
                </h3>
                <p className="text-gray-600 text-sm">
                  Отправляем заказы по всей России удобным способом
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-4">
                  <Car size={32} className="text-brand-red" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  Индивидуальный подход
                </h3>
                <p className="text-gray-600 text-sm">
                  Можем изготовить номер с вашим уникальным дизайном
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-brand-dark to-gray-800 text-white" id="contacts">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Есть вопросы? Мы всегда на связи!
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут выбрать подходящий вариант и ответят на все вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79001234567"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Позвонить нам
              </a>
              <a
                href="mailto:info@ai100.ru"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition"
              >
                Написать email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
