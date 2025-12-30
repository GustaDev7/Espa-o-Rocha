
import React from 'react';
import { CreditCard, Smartphone, CheckCircle2, UserCircle, Star } from 'lucide-react';

const steps = [
  { num: "01", title: "Visita Técnica", desc: "Vivencie a atmosfera ROCHA pessoalmente." },
  { num: "02", title: "Contrato Premium", desc: "Segurança jurídica para o seu evento." },
  { num: "03", title: "Reserva (50%)", desc: "Sinal para garantir sua data exclusiva." },
  { num: "04", title: "Sua Celebração", desc: "O momento de brilhar chegou!" },
];

const testimonials = [
  { name: "Luciana Santos", comment: "O Espaço ROCHA superou todas as expectativas. A piscina é impecável e o salão muito elegante.", rating: 5 },
  { name: "Ricardo Almeida", comment: "Celebramos o aniversário da empresa lá e foi fantástico. Estrutura nota 10.", rating: 5 },
  { name: "Sílvia Mendes", comment: "O melhor espaço da região. Atendimento profissional e ambiente de altíssimo nível.", rating: 5 },
];

const Booking: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-pure-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-gold font-bold uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-3 md:mb-4">Fluxo de Experiência</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-graphite italic">Reserva ROCHA</h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4 md:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 md:mb-32">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center md:text-left">
              <div className="text-6xl md:text-8xl font-serif text-gold/5 absolute -top-8 md:-top-12 left-0 w-full md:w-auto group-hover:text-gold/10 transition-all duration-700 select-none">
                {step.num}
              </div>
              <div className="relative z-10 pt-4">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-gold mb-4 md:mb-6 mx-auto md:mx-0" strokeWidth={1} />
                <h3 className="font-serif text-xl md:text-2xl text-graphite mb-2 md:mb-3 italic">{step.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed px-4 md:px-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <div className="relative group overflow-hidden rounded-sm shadow-2xl">
            <img src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200" className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-[3000ms] group-hover:scale-110" alt="Reserva ROCHA" />
            <div className="absolute inset-0 bg-graphite/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center p-6 md:p-12">
               <p className="text-pure-white font-serif text-2xl md:text-4xl italic text-center leading-tight">Sua história merece o <span className="text-gold">Espaço ROCHA</span></p>
            </div>
          </div>
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <h4 className="font-serif text-3xl md:text-4xl text-graphite mb-4 md:mb-6">Investimento Facilitado</h4>
              <p className="text-gray-500 font-light leading-relaxed text-base md:text-lg">
                Proporcionamos flexibilidade para que sua única preocupação seja aproveitar. Aceitamos múltiplas formas de pagamento com a segurança que você exige.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-6 md:p-8 border border-gold/10 bg-off-white hover:border-gold/30 transition-all">
                <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-gold mb-4 md:mb-6" strokeWidth={1} />
                <h5 className="font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2 text-graphite">PIX Instantâneo</h5>
                <p className="text-[10px] md:text-xs text-gray-400 font-light leading-relaxed">Agilidade e praticidade para confirmação imediata da sua reserva.</p>
              </div>
              <div className="p-6 md:p-8 border border-gold/10 bg-off-white hover:border-gold/30 transition-all">
                <CreditCard className="w-8 h-8 md:w-10 md:h-10 text-gold mb-4 md:mb-6" strokeWidth={1} />
                <h5 className="font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2 text-graphite">Crédito Premium</h5>
                <p className="text-[10px] md:text-xs text-gray-400 font-light leading-relaxed">Parcelamento exclusivo em até 12x para facilitar seu planejamento.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
            <h4 className="font-serif text-2xl md:text-3xl text-graphite italic whitespace-nowrap">Vozes ROCHA</h4>
            <div className="w-full h-[1px] bg-gold/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 md:p-10 border border-gray-100 bg-pure-white relative hover:shadow-xl transition-all duration-500 group">
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-gold fill-gold" />)}
                </div>
                <p className="text-gray-600 font-light leading-relaxed mb-6 md:mb-8 italic text-sm md:text-base">"{t.comment}"</p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gold/5 rounded-full flex items-center justify-center">
                    <UserCircle className="w-5 h-5 md:w-6 md:h-6 text-gold/30" />
                  </div>
                  <span className="font-bold text-graphite text-[9px] md:text-[10px] uppercase tracking-widest">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
