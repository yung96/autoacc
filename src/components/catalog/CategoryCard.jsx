import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ title, itemCount, icon: Icon, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-brand-red/10 rounded-lg group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
            <Icon size={32} className="text-brand-red group-hover:text-white transition-colors" />
          </div>
          <ArrowRight
            size={24}
            className="text-gray-400 group-hover:text-brand-red group-hover:translate-x-1 transition-all"
          />
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-red transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">{itemCount} товаров</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </a>
  );
};

export default CategoryCard;
