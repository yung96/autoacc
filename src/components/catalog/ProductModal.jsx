import { useState, useEffect } from 'react';
import { X, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Блокировка скролла body при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] relative animate-in fade-in zoom-in duration-200 flex flex-col">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Галерея изображений */}
            <div className="space-y-4">
              {/* Основное изображение */}
              <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {discount > 0 && (
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-2 rounded-full text-base font-bold">
                    -{discount}%
                  </div>
                )}
                
                {/* Навигация по изображениям */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Миниатюры */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                        index === currentImageIndex
                          ? 'border-brand-red'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} - фото ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Информация о товаре */}
            <div className="flex flex-col">
              <div className="flex-grow">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-4 pr-8">
                  {product.title}
                </h2>

                {/* Цена */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-brand-dark">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg sm:text-xl text-gray-400 line-through">
                        {product.oldPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                  {product.oldPrice && (
                    <p className="text-green-600 font-semibold">
                      Экономия: {(product.oldPrice - product.price).toLocaleString()} ₽
                    </p>
                  )}
                </div>

                {/* Наличие */}
                <div className="mb-6">
                  {product.inStock ? (
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold">В наличии</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-semibold">Нет в наличии</span>
                    </div>
                  )}
                </div>

                {/* Описание */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">Описание</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Характеристики */}
                {product.specifications && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-brand-dark mb-3">Характеристики</h3>
                    <div className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100 text-sm sm:text-base">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-semibold text-brand-dark">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 mt-4">
                <button
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 sm:py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                    product.inStock
                      ? 'bg-brand-red hover:bg-red-700 text-white transform hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={20} />
                  {product.inStock ? 'Добавить в корзину' : 'Недоступно'}
                </button>
                <button 
                  disabled={!product.inStock}
                  className={`sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                    product.inStock
                      ? 'border-brand-red text-brand-red hover:bg-brand-red hover:text-white'
                      : 'border-gray-300 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Купить в 1 клик
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
