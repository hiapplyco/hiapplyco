
import React, { useState, useEffect } from 'react';
import { PricingConfig } from '../../types/pricing';

interface CinematicHeroProps {
  config: PricingConfig;
}

const CinematicHero = ({ config }: CinematicHeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Calculate diffusion opacity based on scroll position
  const diffusionOpacity = Math.min(scrollY / 600, 0.95);
  const contentOpacity = Math.max(1 - (scrollY / 400), 0);
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
        style={{
          backgroundImage: 'url(https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/assets//applybluezones.jpg)',
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        }}
      />
      
      {/* White Diffusion Overlay */}
      <div 
        className="absolute inset-0 bg-white transition-opacity duration-75 ease-out"
        style={{ 
          opacity: diffusionOpacity,
        }}
      />
      
      {/* Content Overlay */}
      <div 
        className="relative z-10 flex items-center justify-center h-full px-6"
        style={{ opacity: contentOpacity }}
      >
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Partnership Announcement */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 text-gray-800 text-sm font-medium mb-6 shadow-lg">
              Partnership Announcement
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              BlueZones Health × Apply
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing healthcare recruitment through AI-powered talent matching
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/70 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
      
      {/* Gradient Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-5"></div>
    </section>
  );
};

export default CinematicHero;
