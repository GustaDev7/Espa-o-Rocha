
import React from 'react';
import Hero from './components/Hero';
import Infrastructure from './components/Infrastructure';
import VideoExperience from './components/VideoExperience';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-gold/30 selection:text-graphite bg-off-white">
      <Hero />
      <Infrastructure />
      <VideoExperience />
      <Gallery />
      <Services />
      <Pricing />
      <Booking />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
