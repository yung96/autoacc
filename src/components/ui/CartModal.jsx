import { useEffect } from 'react';
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  // Блокировка скролла body при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] relative animate-in fade-in zoom-in duration-200 flex flex-col">
        {/* Заголовок */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-red/10 rounded-lg">
              <ShoppingCart size={24} className="text-brand-red" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">Корзина</h2>
              <p className="text-sm text-gray-500">
                {cartItems.length === 0 ? 'Корзина пуста' : `${cartItems.length} товар(ов)`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Контент корзины */}
        <div className="overflow-y-auto flex-grow p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                Корзина пуста
              </h3>
              <p className="text-gray-500 mb-6">
                Добавьте товары в корзину, чтобы оформить заказ
              </p>
              <button
                onClick={onClose}
                className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Перейти к покупкам
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  {/* Изображение */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Информация */}
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-brand-dark mb-1 line-clamp-2 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-brand-red font-bold mb-3 text-sm sm:text-base">
                      {item.price.toLocaleString()} ₽
                    </p>

                    {/* Количество */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 sm:p-1.5 hover:bg-gray-200 rounded transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 sm:w-10 text-center font-semibold text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 sm:p-1.5 hover:bg-gray-200 rounded transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Удалить */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                      title="Удалить из корзины"
                    >
                      <Trash2 size={18} />
                    </button>
                    <p className="font-bold text-brand-dark text-sm sm:text-base">
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Итого и действия */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 sm:p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">Итого:</span>
              <span className="text-2xl sm:text-3xl font-bold text-brand-red">
                {getTotalPrice().toLocaleString()} ₽
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  if (window.confirm('Вы уверены, что хотите очистить корзину?')) {
                    clearCart();
                  }
                }}
                className="sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition text-sm sm:text-base"
              >
                Очистить корзину
              </button>
              <button
                className="flex-1 bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
