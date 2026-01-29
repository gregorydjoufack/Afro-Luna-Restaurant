import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import { REVIEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=20" 
            alt="Ambiance Afro Luna" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-stone-900"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 block font-bold">Bruxelles - Ixelles</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            L'Âme de l'Afrique <br/> <span className="text-brand-gold italic">dans votre assiette</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Une expérience gastronomique unique fusionnant traditions ancestrales et créativité moderne.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/menu" className="px-8 py-4 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300">
              Voir le Menu
            </Link>
            <Link to="/reservation" className="px-8 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-300">
              Réserver une Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-gold -z-0 transform -translate-x-4 -translate-y-4"></div>
              <img 
                src="https://picsum.photos/600/800?random=21" 
                alt="Chef preparing food" 
                className="relative z-10 w-full shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <span className="text-brand-gold uppercase tracking-widest text-sm font-bold">Notre Philosophie</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-6">Un voyage culinaire sans frontières</h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Chez Afro Luna, nous croyons que la cuisine est le meilleur moyen de raconter une histoire. 
                Inspirés par les marchés animés de Dakar, les épices du Congo et l'élégance européenne, 
                nous créons des plats qui éveillent les sens et rassemblent les gens.
              </p>
              <Link to="/histoire" className="inline-flex items-center text-brand-gold hover:text-white transition-colors group">
                <span className="uppercase tracking-wide border-b border-brand-gold pb-1 group-hover:border-white">Découvrir notre histoire</span>
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Menu Items */}
      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-gold uppercase tracking-widest text-sm font-bold">Nos Signatures</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-12">Les favoris du Chef</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://picsum.photos/400/500?random=22" alt="Dish" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="font-serif text-2xl text-white mb-2">Poulet Moambe</h3>
                <p className="text-stone-400 text-sm mb-4 line-clamp-2">Sauce riche à la noix de palme, recette traditionnelle revisitée.</p>
                <span className="text-brand-gold font-bold">22€</span>
              </div>
            </div>
             {/* Card 2 */}
             <div className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://picsum.photos/400/500?random=23" alt="Dish" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="font-serif text-2xl text-white mb-2">Thieboudienne Royal</h3>
                <p className="text-stone-400 text-sm mb-4 line-clamp-2">Le roi des plats sénégalais, avec poisson frais du jour.</p>
                <span className="text-brand-gold font-bold">26€</span>
              </div>
            </div>
             {/* Card 3 */}
             <div className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://picsum.photos/400/500?random=24" alt="Dish" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="font-serif text-2xl text-white mb-2">Cocktail Signature</h3>
                <p className="text-stone-400 text-sm mb-4 line-clamp-2">Rhum, gingembre et la douceur du bissap.</p>
                <span className="text-brand-gold font-bold">12€</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/menu" className="inline-block px-8 py-3 border border-stone-700 text-stone-300 hover:border-brand-gold hover:text-brand-gold transition-colors uppercase tracking-widest text-sm">
              Voir tout le menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-stone-900 border-t border-stone-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ce que disent nos hôtes</h2>
            <div className="flex justify-center space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-brand-gold fill-current" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <div key={review.id} className="bg-stone-800 p-8 rounded-sm relative">
                <div className="absolute -top-4 left-8 text-6xl text-brand-gold opacity-20 font-serif">"</div>
                <p className="text-stone-300 italic mb-6 leading-relaxed relative z-10">{review.text}</p>
                <div className="flex items-center justify-between border-t border-stone-700 pt-4">
                  <span className="font-bold text-white font-serif">{review.author}</span>
                  <span className="text-xs text-stone-500 uppercase tracking-wide">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full width CTA */}
      <section className="relative py-24 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/1920/600?random=25" alt="Reservation" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-brand-accent/20 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Prêt pour l'expérience ?</h2>
          <p className="text-stone-200 text-lg mb-8">Les places sont limitées. Réservez votre table dès maintenant.</p>
          <Link to="/reservation" className="inline-flex items-center px-8 py-4 bg-white text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors">
            Réserver <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;