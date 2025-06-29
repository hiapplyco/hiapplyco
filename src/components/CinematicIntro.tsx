import { useEffect, useState } from 'react';

const CinematicIntro = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setVisible(false);
      return;
    }

    // Lock scrolling and ensure we're at top
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const handleInteraction = () => {
      if (!fadeOut) {
        setFadeOut(true);
        
        // Start fade out animation
        setTimeout(() => {
          setVisible(false);
          setCanScroll(true);
          document.body.style.overflow = '';
          sessionStorage.setItem('hasSeenIntro', 'true');
        }, 1000);
      }
    };

    // Listen for any scroll attempt or click
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleInteraction();
    };
    
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleInteraction();
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleKey);
    };
  }, [fadeOut]);

  if (!visible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className={`transition-all duration-700 ${fadeOut ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        <img 
          src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png" 
          alt="Apply Logo" 
          className="w-64 md:w-96 h-auto"
        />
      </div>

      {/* Subtle prompt */}
      {!fadeOut && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-fade-in">
          <p className="text-white/40 text-sm">Click or scroll to continue</p>
        </div>
      )}
    </div>
  );
};

export default CinematicIntro;