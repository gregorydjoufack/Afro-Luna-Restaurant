import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour ! Je suis le sommelier virtuel d\'Afro Luna. Cherchez-vous une recommandation de plat ou un accord mets-vins ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Convert history format for the service if needed, for now just passing current context logic
    const responseText = await sendMessageToGemini([], userMsg.text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-stone-800 rotate-90' : 'bg-brand-gold hover:scale-110 animate-bounce'
        }`}
        aria-label="Ouvrir l'assistant"
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-brand-dark" fill="currentColor" />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-800 to-stone-900 p-4 border-b border-stone-700 flex items-center space-x-3">
          <div className="bg-brand-gold p-1.5 rounded-full">
            <Bot size={20} className="text-brand-dark" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Concierge Afro Luna</h3>
            <p className="text-xs text-stone-400 flex items-center">
              <Sparkles size={10} className="mr-1 text-brand-gold" />
              Propulsé par Gemini
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-900">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-gold text-brand-dark rounded-br-none' 
                    : 'bg-stone-800 text-stone-200 rounded-bl-none border border-stone-700'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-stone-800 p-3 rounded-lg rounded-bl-none flex space-x-2">
                <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-stone-800 border-t border-stone-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Conseillez-moi un plat..."
              className="flex-1 bg-stone-900 border border-stone-700 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-gold"
            />
            <button 
              type="submit" 
              className="p-2 bg-brand-gold text-brand-dark rounded-full hover:bg-white transition-colors disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIConcierge;