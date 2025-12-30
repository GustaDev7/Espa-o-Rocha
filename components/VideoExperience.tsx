
import React from 'react';
import { Camera } from 'lucide-react';

const VideoExperience: React.FC = () => {
  return (
    <section className="py-24 bg-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-serif text-5xl text-gold italic mb-4">Atmosfera ROCHA</h2>
            <p className="text-gray-400 font-light tracking-widest uppercase text-xs">A estética da celebração em cada detalhe</p>
          </div>
          <div className="w-32 h-[1px] bg-gold/30 hidden md:block mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative group overflow-hidden rounded-sm shadow-2xl bg-black">
            <div className="relative w-full h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                alt="Main Venue Rocha"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 border border-gold/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                <Camera className="w-8 h-8 text-gold" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-black/80 to-transparent w-full pointer-events-none">
              <h4 className="font-serif text-3xl text-pure-white italic">O Espaço</h4>
              <p className="text-gold text-xs uppercase tracking-widest font-bold">Lazer & Sofisticação</p>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            <div className="relative h-[238px] overflow-hidden rounded-sm group bg-black">
              <img 
                src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                alt="Celebration Rocha"
              />
              <div className="absolute inset-0 bg-graphite/60 flex items-center justify-center opacity-80 group-hover:opacity-0 transition-opacity pointer-events-none text-center p-4">
                <span className="text-gold font-serif text-xl italic border-b border-gold/30 pb-2">Celebrações</span>
              </div>
            </div>
            <div className="relative h-[238px] overflow-hidden rounded-sm group bg-black">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                alt="The Party Rocha"
              />
              <div className="absolute inset-0 bg-graphite/60 flex items-center justify-center opacity-80 group-hover:opacity-0 transition-opacity pointer-events-none text-center p-4">
                <span className="text-gold font-serif text-xl italic border-b border-gold/30 pb-2">A Festa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExperience;
