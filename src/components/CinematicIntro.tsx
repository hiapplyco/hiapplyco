import { useEffect, useState, useCallback } from 'react';

interface CinematicIntroProps {
  onComplete?: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [visible, setVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setVisible(false);
      return;
    }

    // Lock scrolling
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const handleInteraction = (e: Event) => {
      e.preventDefault();
      if (!showLogo) {
        setShowLogo(true);
        
        // Start fade out after logo shows
        setTimeout(() => {
          setFadeOut(true);
        }, 2000);

        // Complete animation
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = '';
          sessionStorage.setItem('hasSeenIntro', 'true');
          if (onComplete) {
            onComplete();
          }
        }, 3000);
      }
    };

    // Listen for any scroll attempt
    window.addEventListener('wheel', handleInteraction, { passive: false });
    window.addEventListener('touchmove', handleInteraction, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        handleInteraction(e);
      }
    });

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchmove', handleInteraction);
    };
  }, [showLogo, onComplete]);

  const handleSkip = useCallback(() => {
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('hasSeenIntro', 'true');
      if (onComplete) {
        onComplete();
      }
    }, 500);
  }, [onComplete]);

  if (!visible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black z-[9998] transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Content container with higher z-index */}
      <div className="relative z-[9999] h-full flex items-center justify-center">
        {/* Initial scroll prompt */}
        {!showLogo && (
          <div className="flex flex-col items-center gap-8 animate-fade-in">
            <p className="text-white/80 text-lg tracking-wider">Scroll to begin</p>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll-indicator" />
            </div>
          </div>
        )}

        {/* Logo animation */}
        {showLogo && (
          <div className="relative">
            <img 
              src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png" 
              alt="Apply Logo" 
              className={`max-w-[80vw] max-h-[80vh] transition-all duration-1000 ease-out ${
                showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
          </div>
        )}

        {/* Skip button */}
        {!fadeOut && (
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-white/50 hover:text-white/80 transition-colors text-sm"
          >
            Skip Intro →
          </button>
        )}
      </div>
    </div>
  );
};

export default CinematicIntro;