
import React from 'react';
import { Check, Star, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-off-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-gold font-bold uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-3 md:mb-4">Planejamento 2026</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-graphite mb-6">Investimento <span className="italic text-gold">ROCHA</span></h2>
          <div className="w-16 h-[2px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 md:mb-20">
          {/* Dias Úteis */}
          <div className="bg-pure-white p-8 md:p-12 border border-gray-100 rounded-sm flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
            <h3 className="text-gray-400 font-bold uppercase tracking-widest text-[8px] md:text-[9px] mb-4 md:mb-6">Weekdays</h3>
            <div className="font-serif text-2xl md:text-3xl text-graphite mb-4 md:mb-6">Segunda a Quinta</div>
            <div className="mb-8 md:mb-10">
              <span className="text-4xl md:text-5xl font-serif text-graphite">R$ 450</span>
              <span className="text-gold text-lg ml-1">.00</span>
              <p className="text-gray-400 text-[9px] md:text-[10px] uppercase font-bold mt-2">+ Taxa de Limpeza</p>
            </div>
            <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow">
              {['12 Horas de Experiência', 'Piscina & Salão Inclusos', 'Mobiliário Inclusos'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-gray-500 uppercase font-medium tracking-widest">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 md:py-5 border border-graphite text-graphite hover:bg-graphite hover:text-pure-white transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
              Agendar Data
            </button>
          </div>

          {/* Destaque / Sábado */}
          <div className="bg-graphite p-8 md:p-12 border border-gold/50 rounded-sm flex flex-col shadow-2xl relative lg:scale-105 z-10">
            <div className="absolute top-0 right-8 md:right-12 -translate-y-1/2 bg-gold text-graphite px-4 md:px-6 py-2 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] rounded-full flex items-center gap-2">
              <Star className="w-3 h-3 fill-graphite" /> Mais Procurado
            </div>
            <h3 className="text-gold font-bold uppercase tracking-widest text-[8px] md:text-[9px] mb-4 md:mb-6">Premium Days</h3>
            <div className="font-serif text-2xl md:text-3xl text-pure-white mb-4 md:mb-6">Sábados & Feriados</div>
            <div className="mb-8 md:mb-10">
              <span className="text-4xl md:text-5xl font-serif text-pure-white">R$ 950</span>
              <span className="text-gold text-lg ml-1">.00</span>
              <p className="text-gray-500 text-[9px] md:text-[10px] uppercase font-bold mt-2">+ Taxa de Limpeza</p>
            </div>
            <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow">
              {['Exclusividade Total', 'Suporte Prioritário', 'Acesso 12h de Turno'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-gray-300 uppercase font-medium tracking-widest">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 md:py-5 bg-gold text-graphite hover:bg-pure-white hover:text-graphite transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
              Garantir Minha Data
            </button>
          </div>

          {/* Sexta */}
          <div className="bg-pure-white p-8 md:p-12 border border-gray-100 rounded-sm flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
            <h3 className="text-gray-400 font-bold uppercase tracking-widest text-[8px] md:text-[9px] mb-4 md:mb-6">Friday Special</h3>
            <div className="font-serif text-2xl md:text-3xl text-graphite mb-4 md:mb-6">Sextas-Feiras</div>
            <div className="mb-8 md:mb-10">
              <span className="text-4xl md:text-5xl font-serif text-graphite">R$ 500</span>
              <span className="text-gold text-lg ml-1">.00</span>
              <p className="text-gray-400 text-[9px] md:text-[10px] uppercase font-bold mt-2">+ Taxa de Limpeza</p>
            </div>
            <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow">
              {['Vibe Noturna Exclusiva', 'Check-in Flexível', 'Infraestrutura Completa'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-gray-500 uppercase font-medium tracking-widest">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 md:py-5 border border-graphite text-graphite hover:bg-graphite hover:text-pure-white transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
              Consultar Sextas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-pure-white p-6 md:p-10 border border-gold/10 flex items-center justify-between rounded-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="p-4 md:p-5 bg-gold/5 rounded-full"><Clock className="w-5 h-5 md:w-6 md:h-6 text-gold" /></div>
              <div>
                <h4 className="font-bold text-graphite uppercase tracking-widest text-[9px] md:text-[10px] mb-1">Taxa de Limpeza</h4>
                <p className="font-serif text-xl md:text-2xl text-gold">R$ 100,00</p>
              </div>
            </div>
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-300">Obrigatória</span>
          </div>
          <div className="bg-pure-white p-6 md:p-10 border border-gold/10 flex items-center justify-between rounded-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="p-4 md:p-5 bg-gold/5 rounded-full"><Star className="w-5 h-5 md:w-6 md:h-6 text-gold" /></div>
              <div>
                <h4 className="font-bold text-graphite uppercase tracking-widest text-[9px] md:text-[10px] mb-1">Horário Especial (00h)</h4>
                <p className="font-serif text-xl md:text-2xl text-gold">+ R$ 100,00</p>
              </div>
            </div>
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-300">Opcional</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
