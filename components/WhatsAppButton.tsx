
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5561999369113" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl z-50 hover:scale-110 active:scale-95 transition-all duration-500 group"
      aria-label="Falar pelo WhatsApp com Espaço ROCHA"
    >
      <div className="absolute -top-12 md:-top-14 right-0 bg-graphite text-gold text-[9px] md:text-[10px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-sm shadow-2xl whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-all duration-500 pointer-events-none uppercase tracking-[0.2em] border border-gold/20">
        Reserva ROCHA 2026
      </div>
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-white/20" />
    </a>
  );
};

export default WhatsAppButton;
