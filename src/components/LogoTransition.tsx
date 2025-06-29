import { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const LogoTransition = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Animation completes at 50vh scroll
      const progress = Math.min(scrollY / threshold, 1);
      
      setScrollProgress(progress);
      
      if (scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  // Calculate transform values based on scroll progress
  const calculateTransform = () => {
    // Starting position (centered)
    const startX = 0;
    const startY = 0;
    const startScale = 1;

    // Ending position (header position)
    const endX = isMobile ? -40 : -45; // vw units
    const endY = isMobile ? -42 : -44; // vh units
    const endScale = isMobile ? 0.15 : 0.1;

    // Interpolate based on scroll progress
    const x = startX + (endX - startX) * scrollProgress;
    const y = startY + (endY - startY) * scrollProgress;
    const scale = startScale + (endScale - startScale) * scrollProgress;

    return {
      transform: `translate(${x}vw, ${y}vh) scale(${scale})`,
      opacity: 1,
    };
  };

  const logoStyle = calculateTransform();

  // Check if intro has been seen
  const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
  const showPrompt = !hasScrolled && !hasSeenIntro;

  useEffect(() => {
    if (hasScrolled && !hasSeenIntro) {
      sessionStorage.setItem('hasSeenIntro', 'true');
    }
  }, [hasScrolled, hasSeenIntro]);

  return (
    <>
      {/* Logo that transitions */}
      <div
        ref={logoRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none will-change-transform"
        style={logoStyle}
      >
        <img
          src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png"
          alt="Apply Logo"
          className={`transition-all duration-300 ease-out ${
            scrollProgress < 0.1 ? 'drop-shadow-[0_0_50px_rgba(100,149,237,0.5)]' : ''
          }`}
          style={{
            width: isMobile ? '60vw' : '40vw',
            maxWidth: '400px',
            height: 'auto',
          }}
        />
      </div>

      {/* Scroll prompt */}
      {showPrompt && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[90] animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            <p className="text-foreground/60 text-sm tracking-wider">Scroll to explore</p>
            <div className="w-5 h-8 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1">
              <div className="w-0.5 h-1.5 bg-foreground/40 rounded-full animate-scroll-indicator" />
            </div>
          </div>
        </div>
      )}

      {/* Initial dark overlay that fades out */}
      {!hasScrolled && (
        <div className="fixed inset-0 bg-black/50 z-[80] transition-opacity duration-1000 pointer-events-none" />
      )}
    </>
  );
};

export default LogoTransition;