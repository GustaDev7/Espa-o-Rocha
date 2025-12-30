
import React from 'react';
import { Crown, Instagram, MessageCircle, MapPin, Phone, ArrowUp, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-graphite overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1600" 
          alt="Espaço ROCHA Night" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/95 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-12 md:pb-16">
        {/* Top Branding Section */}
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <div className="mb-6 md:mb-8 p-4 md:p-6 border border-gold/10 rounded-full backdrop-blur-sm">
            <Crown className="w-10 h-10 md:w-12 md:h-12 text-gold opacity-60" strokeWidth={1} />
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-pure-white tracking-[0.2em] md:tracking-[0.4em] font-bold mb-4 leading-none uppercase">ROCHA</h2>
          <div className="flex items-center gap-4 md:gap-6 w-full max-w-lg mt-4 md:mt-8 px-4">
            <div className="flex-grow h-[1px] bg-gold/20"></div>
            <p className="text-gold font-serif italic text-lg md:text-2xl tracking-widest whitespace-nowrap">Espaço de Eventos</p>
            <div className="flex-grow h-[1px] bg-gold/20"></div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-24">
          {/* Col 1: Purpose */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] border-l-2 border-gold pl-4">Propósito</h4>
            <p className="text-gray-400 font-light text-sm leading-relaxed pr-4">
              Dedicados a transformar sonhos em realidade através de um ambiente sofisticado e um atendimento de excelência no Espaço Rocha.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-graphite transition-all duration-500">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-graphite transition-all duration-500">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-graphite transition-all duration-500">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Contact */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] border-l-2 border-gold pl-4">Agende uma Visita</h4>
            <div className="space-y-4 md:space-y-6">
              <a href="tel:61999369113" className="group flex items-center gap-4 text-gray-400 hover:text-pure-white transition-colors">
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gold/10 transition-colors">
                  <Phone size={16} className="text-gold" />
                </div>
                <span className="font-light text-xs md:text-sm tracking-widest">(61) 9 9936-9113</span>
              </a>
              <div className="group flex items-center gap-4 text-gray-400 hover:text-pure-white transition-colors">
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gold/10 transition-colors">
                  <Mail size={16} className="text-gold" />
                </div>
                <span className="font-light text-xs md:text-sm tracking-widest truncate">contato@espacorocha.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: Location */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] border-l-2 border-gold pl-4">Localização</h4>
            <div className="flex gap-4 text-gray-400 group cursor-default">
              <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gold/10 transition-colors flex-shrink-0 self-start">
                <MapPin size={16} className="text-gold" />
              </div>
              <p className="font-light text-xs md:text-sm leading-relaxed pt-1">
                QNP 22 Conjunto E – CH 195<br/>
                Ceilândia, Brasília - DF<br/>
                <span className="text-[9px] md:text-[10px] text-gold/50 font-bold uppercase block mt-2 tracking-widest">Próximo ao terminal do Psul</span>
              </p>
            </div>
          </div>

          {/* Col 4: Links */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] border-l-2 border-gold pl-4">Links Úteis</h4>
            <nav className="flex flex-col gap-3 md:gap-4">
              <a href="#infrastructure" className="text-[10px] md:text-xs text-gray-500 hover:text-gold transition-all tracking-widest hover:translate-x-2 duration-300">Infraestrutura</a>
              <a href="#gallery" className="text-[10px] md:text-xs text-gray-500 hover:text-gold transition-all tracking-widest hover:translate-x-2 duration-300">Galeria ROCHA</a>
              <a href="#pricing" className="text-[10px] md:text-xs text-gray-500 hover:text-gold transition-all tracking-widest hover:translate-x-2 duration-300">Investimento</a>
              <a href="#" className="text-[10px] md:text-xs text-gray-500 hover:text-gold transition-all tracking-widest hover:translate-x-2 duration-300">Termos & Condições</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-12">
            <p className="text-[8px] md:text-[9px] text-gray-600 font-bold uppercase tracking-[0.4em] text-center">
              © 2026 ESPAÇO ROCHA • High-End Events
            </p>
            <div className="hidden md:block w-1 h-1 bg-gold/20 rounded-full"></div>
            <p className="text-[8px] md:text-[9px] text-gray-600 font-bold uppercase tracking-[0.4em]">
              Ceilândia, Distrito Federal
            </p>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 md:gap-4 text-gold hover:text-pure-white transition-all duration-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]"
          >
            Subir <ArrowUp className="w-4 h-4 group-hover:-translate-y-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
