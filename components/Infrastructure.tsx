
import React from 'react';
import { Crown, Waves, Users, ParkingCircle, Shield } from 'lucide-react';

const Infrastructure: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-pure-white overflow-hidden" id="infrastructure">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full lg:w-5/12 space-y-10 md:space-y-16">
            <div className="relative">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <Crown className="w-8 h-8 md:w-10 md:h-10 text-gold/30" />
                <span className="text-gold font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em]">Lazer e Infraestrutura</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-graphite mb-6 md:mb-8 leading-tight md:leading-[1.1]">Espaço <span className="italic text-gold">ROCHA</span>. Excelência em cada m².</h2>
              <div className="w-16 md:w-20 h-1 bg-gold mb-8 md:mb-10"></div>
              <p className="text-gray-500 font-light text-base md:text-xl leading-relaxed">
                Projetado para ser o palco dos seus melhores momentos. Uma estrutura versátil que combina o frescor da piscina com a elegância de um salão planejado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-10 md:gap-y-12 gap-x-4 md:gap-x-8">
              {[
                { icon: <Waves />, label: 'Complexo Aquático', sub: 'Adulto e Infantil' },
                { icon: <Users />, label: '100 Convidados', sub: 'Conforto absoluto' },
                { icon: <Shield />, label: 'Segurança Total', sub: 'Monitoramento 24h' },
                { icon: <ParkingCircle />, label: 'Estacionamento', sub: 'Privativo interno' }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-gold mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500">
                    {/* Fix: Cast item.icon to React.ReactElement<any> to resolve TypeScript error on 'size' and 'strokeWidth' props in cloneElement */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                  </div>
                  <h4 className="font-bold text-graphite uppercase tracking-widest text-[10px] md:text-xs mb-1">{item.label}</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 font-medium uppercase tracking-tighter">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative">
            <div className="grid grid-cols-2 gap-3 md:gap-6 relative z-10">
              <div className="space-y-3 md:space-y-6 pt-10 md:pt-20">
                <div className="relative overflow-hidden group rounded-sm shadow-2xl aspect-[9/16]">
                  <img 
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                    alt="Piscina ROCHA" 
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                </div>
                <div className="relative overflow-hidden group rounded-sm shadow-xl">
                  <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600" className="w-full h-48 md:h-64 object-cover transform transition-transform duration-1000 group-hover:scale-105" alt="Salão ROCHA" />
                </div>
              </div>
              <div className="space-y-3 md:space-y-6">
                <div className="relative overflow-hidden group rounded-sm shadow-xl">
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" className="w-full h-48 md:h-64 object-cover transform transition-transform duration-1000 group-hover:scale-105" alt="Decoração ROCHA" />
                </div>
                <div className="relative overflow-hidden group rounded-sm shadow-2xl aspect-[9/16]">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                    alt="Ambiente Externo ROCHA" 
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100%] bg-gold/5 -rotate-6 -z-0 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
