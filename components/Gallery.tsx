
import React from 'react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200', size: 'md:col-span-8 md:row-span-2', title: 'Salão Principal', subtitle: 'Amplitude e Elegância' },
  { url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800', size: 'md:col-span-4 md:row-span-3', title: 'Área da Piscina', subtitle: 'Lazer Premium' },
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', size: 'md:col-span-4 md:row-span-2', title: 'Decoração Artística', subtitle: 'Detalhes Únicos' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800', size: 'md:col-span-4 md:row-span-2', title: 'Celebrações', subtitle: 'Momentos Preciosos' },
  { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800', size: 'md:col-span-4 md:row-span-3', title: 'Ambientação', subtitle: 'Clima Perfeito' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', size: 'md:col-span-8 md:row-span-2', title: 'Fachada Noturna', subtitle: 'Impacto Visual' },
  { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', size: 'md:col-span-12 md:row-span-2', title: 'Sua Festa Começa Aqui', subtitle: 'Reserve 2026' },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-off-white" id="gallery">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="text-gold font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-3 md:mb-4">A Estética do Evento</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-graphite leading-tight">Narrativa Visual <span className="italic text-gold">ROCHA</span></h2>
          </div>
          <p className="text-gray-400 font-light text-xs md:text-sm md:text-right max-w-xs leading-relaxed uppercase tracking-widest">
            Capturando a essência de cada detalhe que torna nosso espaço único.
          </p>
        </div>

        {/* Mobile Gallery (Simple List) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {galleryItems.slice(0, 5).map((item, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-sm group">
              <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent p-6 flex flex-col justify-end">
                <span className="text-gold font-bold uppercase tracking-widest text-[8px] mb-1">{item.subtitle}</span>
                <h3 className="font-serif text-xl text-pure-white italic">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Gallery (Artistic Grid) */}
        <div className="hidden md:grid grid-cols-12 md:grid-rows-9 gap-4 lg:gap-6 auto-rows-[150px] lg:auto-rows-[200px]">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden bg-gray-100 shadow-xl transition-all duration-700 hover:shadow-gold/20 ${item.size}`}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6 lg:p-10">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[8px] lg:text-[9px] mb-2">{item.subtitle}</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-pure-white italic">{item.title}</h3>
                <div className="w-10 lg:w-12 h-[1px] bg-gold mt-4 translate-x-[-20px] group-hover:translate-x-0 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
