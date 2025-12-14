import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">АИ-100</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Изготовление сувенирных дубликатов автомобильных номеров. Качественные материалы, быстрое изготовление, доставка по России.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+79001234567" className="flex items-center gap-2 text-gray-300 hover:text-brand-red transition">
                <Phone size={16} />
                <span>+7 (900) 123-45-67</span>
              </a>
              <a href="mailto:info@ai100.ru" className="flex items-center gap-2 text-gray-300 hover:text-brand-red transition">
                <Mail size={16} />
                <span>info@ai100.ru</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          {/* Режим работы */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Пн-Пт: 9:00 - 19:00</p>
                  <p>Сб-Вс: 10:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition">
                  Гарантия и возврат
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition">
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 АИ-100 Автоаксессуары. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
