import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Histoire', path: '/histoire' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
  }`;

  return (
    <nav className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-serif font-bold text-xl group-hover:scale-105 transition-transform">
            AL
          </div>
          <span className={`font-serif text-2xl font-bold tracking-widest ${scrolled ? 'text-brand-gold' : 'text-white'}`}>
            AFRO LUNA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase hover:text-brand-gold transition-colors ${
                location.pathname === link.path ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-stone-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/reservation" 
            className="hidden md:inline-flex items-center px-5 py-2 bg-brand-gold text-brand-dark font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors"
          >
            Réserver
          </Link>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-brand-dark z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6`}>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif text-white hover:text-brand-gold border-b border-stone-800 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/reservation" 
            className="w-full text-center py-3 bg-brand-gold text-brand-dark font-bold uppercase tracking-wide mt-4"
          >
            Réserver une table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;