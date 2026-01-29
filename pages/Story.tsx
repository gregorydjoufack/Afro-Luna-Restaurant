import React from 'react';

const Story: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-950 pb-20">
      
      {/* Hero Header */}
      <div className="relative h-[40vh] mb-20">
         <img src="https://picsum.photos/1920/800?random=30" className="w-full h-full object-cover opacity-50" alt="Kitchen" />
         <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white">Notre Histoire</h1>
         </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-20">
          <p className="text-2xl font-serif text-brand-gold italic text-center mb-8">
            "Afro Luna est né d'un rêve : celui de briser les codes de la gastronomie africaine."
          </p>
          <p className="text-stone-300 leading-loose text-lg text-justify">
            Fondé en 2021 par le Chef Amadou Diallo, Afro Luna n'est pas simplement un restaurant, 
            c'est une passerelle culturelle. Après avoir voyagé à travers l'Afrique de l'Ouest et l'Europe, 
            le Chef Amadou a voulu créer un lieu à Bruxelles où l'élégance de la technique française rencontre 
            la puissance des saveurs subsahariennes. Le nom "Afro Luna" évoque cette dualité : la chaleur 
            terrienne de l'Afrique et la poésie mystérieuse de la nuit bruxelloise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://picsum.photos/600/800?random=31" alt="Chef Amadou" className="w-full shadow-xl border-4 border-stone-800" />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-white mb-4">L'Équipe</h2>
            <p className="text-stone-400 leading-relaxed mb-4">
              Notre équipe est une famille cosmopolite. En cuisine, la rigueur est le maître-mot, 
              mais toujours accompagnée de musique et de rires. En salle, nous cultivons l'art de l'hospitalité 
              africaine : la Teranga.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Chaque membre de l'équipe apporte sa touche personnelle, créant une atmosphère unique 
              où chaque client est traité comme un roi.
            </p>
          </div>
        </div>

        <div className="bg-stone-900 p-12 text-center border border-stone-800">
           <h2 className="text-3xl font-serif text-white mb-6">Nos Valeurs</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-brand-gold font-bold uppercase tracking-widest mb-2">Authenticité</h3>
                <p className="text-stone-500 text-sm">Respect des recettes ancestrales et des produits.</p>
              </div>
              <div>
                <h3 className="text-brand-gold font-bold uppercase tracking-widest mb-2">Partage</h3>
                <p className="text-stone-500 text-sm">La cuisine est faite pour être partagée ensemble.</p>
              </div>
              <div>
                <h3 className="text-brand-gold font-bold uppercase tracking-widest mb-2">Excellence</h3>
                <p className="text-stone-500 text-sm">Une quête permanente de la qualité.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Story;