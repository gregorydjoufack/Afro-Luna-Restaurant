import React, { useState } from 'react';
import { ReservationData } from '../types';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: 2,
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-stone-950 flex items-center justify-center px-4">
        <div className="bg-stone-900 p-8 md:p-12 rounded-sm border border-brand-gold/30 text-center max-w-lg w-full shadow-2xl fade-in">
          <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Réservation Confirmée</h2>
          <p className="text-stone-400 mb-8">
            Merci {formData.name}, votre table pour {formData.guests} personnes le {formData.date} à {formData.time} est pré-réservée.
            Un email de confirmation vous a été envoyé.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-brand-gold hover:text-white underline"
          >
            Faire une autre réservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-stone-950 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:w-1/3 text-stone-300 space-y-8 mt-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Réservez votre table</h1>
              <p className="text-stone-400 leading-relaxed">
                Pour les groupes de plus de 8 personnes ou pour les événements privés, veuillez nous contacter directement par téléphone ou email.
              </p>
            </div>
            
            <div className="bg-stone-900 p-6 border-l-2 border-brand-gold">
              <h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Politique de réservation</h3>
              <ul className="text-sm text-stone-400 space-y-2 list-disc list-inside">
                <li>Réservation maintenue pendant 15 minutes.</li>
                <li>Merci de signaler toute allergie.</li>
                <li>Tenue correcte exigée.</li>
              </ul>
            </div>

            <div className="space-y-2">
               <p className="text-brand-gold font-bold">Téléphone :</p>
               <p className="text-xl font-serif text-white">+32 2 555 01 23</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-stone-900 p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold flex items-center">
                    <Calendar size={14} className="mr-2" /> Date
                  </label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    className="w-full bg-stone-800 border border-stone-700 text-white p-4 focus:outline-none focus:border-brand-gold transition-colors"
                    onChange={handleChange}
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold flex items-center">
                    <Clock size={14} className="mr-2" /> Heure
                  </label>
                  <select 
                    name="time"
                    required
                    className="w-full bg-stone-800 border border-stone-700 text-white p-4 focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                    onChange={handleChange}
                    value={formData.time}
                  >
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                    <option>21:30</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-stone-500 font-bold flex items-center">
                    <Users size={14} className="mr-2" /> Nombre de personnes
                  </label>
                  <input 
                    type="number" 
                    name="guests"
                    min="1"
                    max="12"
                    required
                    value={formData.guests}
                    className="w-full bg-stone-800 border border-stone-700 text-white p-4 focus:outline-none focus:border-brand-gold transition-colors"
                    onChange={handleChange}
                  />
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Nom Complet</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-stone-800 border border-stone-700 text-white p-4 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Votre nom"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-stone-800 border border-stone-700 text-white p-4 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="votre@email.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

               <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Téléphone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full bg-stone-800 border border-stone-700 text-white p-4 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="+32 ..."
                    onChange={handleChange}
                  />
                </div>

               <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Demandes spéciales / Allergies</label>
                  <textarea 
                    name="notes"
                    rows={3}
                    className="w-full bg-stone-800 border border-stone-700 text-white p-4 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Optionnel..."
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                  Confirmer la demande
                </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;