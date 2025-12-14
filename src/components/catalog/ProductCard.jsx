import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ title, price, oldPrice, image, description, inStock, onClick, ...product }) => {
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Предотвращаем открытие модалки при клике на кнопку
    addToCart({ title, price, oldPrice, image, description, inStock, ...product });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* Изображение */}
      <div 
        className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold">
              Нет в наличии
            </span>
          </div>
        )}
      </div>

      {/* Информация */}
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        {/* Название */}
        <h3 
          className="text-base md:text-lg font-semibold text-brand-dark mb-2 line-clamp-2 cursor-pointer"
          onClick={onClick}
        >
          {title}
        </h3>

        {/* Описание */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Цена */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-brand-dark">{price.toLocaleString()} ₽</span>
            {oldPrice && (
              <span className="text-sm text-gray-400 line-through">{oldPrice.toLocaleString()} ₽</span>
            )}
          </div>
        </div>

        {/* Кнопка */}
        <button
          disabled={!inStock}
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
            inStock
              ? 'bg-brand-red active:bg-red-700 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={20} />
          {inStock ? 'В корзину' : 'Недоступно'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
