
import React from 'react';
import { Crown, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920" 
          alt="Espaço ROCHA Luxo"
          className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-60"
        />
        {/* Camada de sobreposição mais escura para contraste máximo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/95 backdrop-blur-[2px]"></div>
      </div>

      {/* Brand Identity Content */}
      <div className="relative z-10 text-center animate-fade-in px-4 w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="p-3 md:p-4 border border-gold/30 rounded-full bg-black/40 backdrop-blur-md">
            <Crown className="w-8 h-8 md:w-12 md:h-12 text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" strokeWidth={1.2} />
          </div>
        </div>
        
        <div className="space-y-0">
          <p className="text-gold font-serif italic text-base md:text-2xl mb-2 md:mb-4 tracking-[0.4em] uppercase opacity-100 drop-shadow-md">
            Bem-vindo ao
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-[10rem] lg:text-[12rem] text-pure-white mb-2 tracking-[0.15em] font-bold leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            ROCHA
          </h1>
          <h3 className="font-serif text-xl sm:text-2xl md:text-5xl text-gold/95 italic mb-10 md:mb-14 drop-shadow-lg tracking-[0.25em]">
            Festas e Eventos
          </h3>
        </div>
        
        <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-2xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4 w-full px-4">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold/60"></div>
            <p className="text-pure-white uppercase tracking-[0.3em] md:tracking-[0.7em] text-[8px] md:text-[11px] font-bold whitespace-nowrap drop-shadow-md">
              Exclusividade • Sofisticação • Memórias
            </p>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold/60"></div>
          </div>
          
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative w-full sm:w-auto px-10 md:px-16 py-5 md:py-6 bg-gold text-graphite font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] overflow-hidden transition-all duration-700 hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.5)] active:scale-95"
          >
            <span className="relative z-10">Consultar Disponibilidade</span>
            <div className="absolute inset-0 bg-pure-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 animate-bounce z-10 flex flex-col items-center gap-2 md:gap-3">
        <span className="text-[8px] md:text-[10px] text-gold font-bold uppercase tracking-[0.6em] drop-shadow-md">Descobrir</span>
        <ChevronDown className="text-gold w-5 h-5 md:w-6 md:h-6 opacity-80" />
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s linear infinite alternate;
        }
      `}</style>
    </header>
  );
};

export default Hero;
