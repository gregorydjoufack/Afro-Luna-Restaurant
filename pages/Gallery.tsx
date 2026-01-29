import React from 'react';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/800/800?random=${40 + i}`);

  return (
    <div className="pt-24 min-h-screen bg-stone-950 pb-20">
      <div className="text-center py-12 px-4">
        <h1 className="font-serif text-5xl text-white mb-4">Galerie</h1>
        <p className="text-stone-400">Plongez dans l'ambiance Afro Luna</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="aspect-square group relative overflow-hidden cursor-pointer">
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic text-lg tracking-wider">Voir</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;