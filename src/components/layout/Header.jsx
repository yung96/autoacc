import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartModal from '../ui/CartModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navigation = [
    { name: 'Главная', href: '#' },
    { name: 'Каталог', href: '#catalog' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Верхняя полоса */}
      <div className="bg-brand-dark text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+79001234567" className="flex items-center gap-2 hover:text-brand-red transition">
                <Phone size={16} />
                <span className="hidden sm:inline">+7 (900) 123-45-67</span>
              </a>
              <span className="hidden md:inline">Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-17:00</span>
            </div>
            <div className="text-xs md:text-sm">
              Доставка по всей России
            </div>
          </div>
        </div>
      </div>

      {/* Основная шапка */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Логотип */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2xl md:text-3xl font-bold text-brand-dark">АИ-100</span>
              </div>
              <span className="text-xs md:text-sm text-brand-red font-semibold uppercase tracking-wide">
                Автоаксессуары
              </span>
            </div>
          </a>

          {/* Поиск - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-brand-red transition">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Корзина и меню */}
          <div className="flex items-center gap-4">
            {/* Корзина */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ShoppingCart size={24} className="text-brand-dark" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Мобильное меню */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Поиск - Mobile */}
        <div className="lg:hidden mt-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full px-4 py-2 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-brand-red transition">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Навигация - Desktop */}
        <nav className="hidden lg:flex gap-8 mt-6 pt-4 border-t border-gray-200">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-brand-red font-medium transition"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container-custom py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-red font-medium transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Модальное окно корзины */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
