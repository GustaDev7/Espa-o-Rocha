
import React from 'react';
import { ChefHat, AlertCircle, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-pure-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400" 
                  alt="Buffet Espaço Rocha" 
                  className="w-full h-48 md:h-64 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform"
                />
                <img 
                  src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=400" 
                  alt="Drinks Espaço Rocha" 
                  className="w-full h-32 md:h-48 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="pt-8 md:pt-12 space-y-3 md:space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=400" 
                  alt="Event Hall Rocha" 
                  className="w-full h-32 md:h-48 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform"
                />
                <img 
                  src="https://images.unsplash.com/photo-1533144678534-22d767118182?auto=format&fit=crop&q=80&w=400" 
                  alt="Cake Table Rocha" 
                  className="w-full h-48 md:h-64 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-24 md:w-40 h-24 md:h-40 bg-gold/5 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-graphite mb-4 md:mb-6 tracking-tight">Cozinha & Transparência</h2>
              <div className="w-16 h-1 bg-gold mb-6 md:mb-8"></div>
              <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                Oferecemos a estrutura, você traz a criatividade para o Espaço Rocha. Nosso ambiente é um canvas em branco pronto para ser pintado com as cores do seu evento.
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-4 md:gap-5 p-6 md:p-8 bg-off-white border border-gray-100 rounded-sm hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 flex items-center justify-center rounded-full flex-shrink-0">
                  <ChefHat className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl text-graphite mb-2">Cozinha Profissional</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                    Amplo espaço higienizado para sua equipe de buffet trabalhar com maestria. <br/>
                    <span className="text-gold font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-2 inline-block">Nota: Não inclui utensílios e gás.</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-5 p-6 md:p-8 bg-pure-white border border-red-50 rounded-sm hover:border-red-200 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 flex items-center justify-center rounded-full flex-shrink-0">
                  <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl text-graphite mb-2">Orientações de Reserva</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                    Para manter o padrão de excelência do Espaço Rocha, itens de decoração, buffet e descartáveis são de responsabilidade do cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gold">
                <Sparkles className="w-5 h-5" />
                <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Exclusividade Rocha Festas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
