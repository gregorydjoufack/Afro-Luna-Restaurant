import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl text-brand-gold mb-4">Afro Luna</h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Une fusion culinaire audacieuse au cœur de Bruxelles. 
              Venez découvrir l'alliance parfaite entre traditions africaines et gastronomie moderne.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-stone-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2 inline-block">Contact</h4>
            <div className="flex items-start space-x-3 text-stone-400">
              <MapPin className="mt-1 flex-shrink-0 text-brand-gold" size={18} />
              <span>Rue de la Paix 25,<br/>1050 Ixelles, Bruxelles</span>
            </div>
            <div className="flex items-center space-x-3 text-stone-400">
              <Phone className="flex-shrink-0 text-brand-gold" size={18} />
              <span>+32 2 555 01 23</span>
            </div>
            <div className="flex items-center space-x-3 text-stone-400">
              <Mail className="flex-shrink-0 text-brand-gold" size={18} />
              <span>bonjour@afroluna.be</span>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2 inline-block">Horaires</h4>
            <ul className="text-stone-400 space-y-2">
              <li className="flex justify-between">
                <span>Lundi - Mardi</span>
                <span className="text-stone-600">Fermé</span>
              </li>
              <li className="flex justify-between">
                <span>Mercredi - Jeudi</span>
                <span>18:00 - 22:30</span>
              </li>
              <li className="flex justify-between">
                <span>Vendredi - Samedi</span>
                <span>18:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>12:00 - 15:30 (Brunch)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Afro Luna Bruxelles. Tous droits réservés.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="/mentions" className="hover:text-stone-400">Mentions Légales</Link>
            <Link to="/privacy" className="hover:text-stone-400">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;