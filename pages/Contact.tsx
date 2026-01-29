import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-950 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-serif text-white text-center mb-16">Contactez-nous</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Info Cards */}
          <div className="lg:w-1/3 space-y-4">
            <div className="bg-stone-900 p-8 border border-stone-800">
              <MapPin className="text-brand-gold mb-4" size={32} />
              <h3 className="text-xl text-white font-serif mb-2">Adresse</h3>
              <p className="text-stone-400">Rue de la Paix 25,<br/>1050 Ixelles, Bruxelles</p>
            </div>
            <div className="bg-stone-900 p-8 border border-stone-800">
              <Phone className="text-brand-gold mb-4" size={32} />
              <h3 className="text-xl text-white font-serif mb-2">Téléphone</h3>
              <p className="text-stone-400">+32 2 555 01 23</p>
              <p className="text-stone-500 text-sm mt-2">Du mercredi au dimanche, à partir de 15h.</p>
            </div>
            <div className="bg-stone-900 p-8 border border-stone-800">
              <Mail className="text-brand-gold mb-4" size={32} />
              <h3 className="text-xl text-white font-serif mb-2">Email</h3>
              <p className="text-stone-400">bonjour@afroluna.be</p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 h-96 lg:h-auto bg-stone-800 relative min-h-[500px]">
             {/* Using an iframe for static map demo */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.537683935824!2d4.351710315745774!3d50.8427500795312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c48000000001%3A0x0!2sBrussels%2C%20Belgium!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
              allowFullScreen={true} 
              loading="lazy"
              title="Map"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;