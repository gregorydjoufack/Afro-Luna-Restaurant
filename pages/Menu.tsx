import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category, MenuItem } from '../types';
import { Leaf, Flame } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('entrées');

  const categories: Category[] = ['entrées', 'plats', 'desserts', 'cocktails'];
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-stone-950 pb-20">
      
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Notre Carte</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Une célébration des saveurs. Tous nos plats sont faits maison avec des produits frais.
        </p>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-stone-800 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg md:text-xl font-serif capitalize pb-2 transition-all duration-300 ${
                activeCategory === cat 
                  ? 'text-brand-gold border-b-2 border-brand-gold' 
                  : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Items Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-6 group">
              {/* Image */}
              <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-2 border-b border-stone-800 border-dashed pb-1">
                  <h3 className="text-xl text-white font-serif">{item.name}</h3>
                  <span className="text-brand-gold font-bold text-lg">{item.price}€</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed mb-2">
                  {item.description}
                </p>
                <div className="flex gap-2">
                   {item.popular && (
                    <span className="text-[10px] uppercase tracking-wider bg-brand-gold text-brand-dark px-2 py-0.5 font-bold rounded-sm">
                      Populaire
                    </span>
                   )}
                   {item.vegan && (
                     <span className="flex items-center text-[10px] uppercase tracking-wider text-green-400 border border-green-400 px-2 py-0.5 rounded-sm">
                       <Leaf size={10} className="mr-1" /> Vegan
                     </span>
                   )}
                   {item.spicy && (
                     <span className="flex items-center text-[10px] uppercase tracking-wider text-red-400 border border-red-400 px-2 py-0.5 rounded-sm">
                       <Flame size={10} className="mr-1" /> Épicé
                     </span>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download PDF CTA */}
      <div className="text-center mt-20">
        <button className="text-stone-500 hover:text-brand-gold underline uppercase text-xs tracking-widest transition-colors">
          Télécharger le menu en PDF
        </button>
      </div>
    </div>
  );
};

export default Menu;