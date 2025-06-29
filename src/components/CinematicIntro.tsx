import { useEffect, useState, useCallback } from 'react';

interface CinematicIntroProps {
  onComplete?: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [visible, setVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [logoAnimated, setLogoAnimated] = useState(false);
  const [fadeToWhite, setFadeToWhite] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Lock scrolling during intro
  useEffect(() => {
    if (visible && !isComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible, isComplete]);

  // Handle scroll detection
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setVisible(false);
      setIsComplete(true);
      return;
    }

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 10) {
        setHasScrolled(true);
        setShowLogo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [hasScrolled]);

  // Animation sequence
  useEffect(() => {
    if (!showLogo) return;

    // Start logo animation
    const logoTimer = setTimeout(() => {
      setLogoAnimated(true);
      
      // Trigger particle pulse effect if available
      if ((window as any).particleEffect && typeof (window as any).particleEffect.pulse === 'function') {
        setTimeout(() => {
          (window as any).particleEffect.pulse();
        }, 500);
      }
    }, 100);

    // Fade to white
    const fadeTimer = setTimeout(() => {
      setFadeToWhite(true);
    }, 2500);

    // Complete animation
    const completeTimer = setTimeout(() => {
      setVisible(false);
      setIsComplete(true);
      sessionStorage.setItem('hasSeenIntro', 'true');
      if (onComplete) {
        onComplete();
      }
    }, 3500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [showLogo, onComplete]);

  const handleSkip = useCallback(() => {
    setFadeToWhite(true);
    setTimeout(() => {
      setVisible(false);
      setIsComplete(true);
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
      className={`fixed inset-0 flex items-center justify-center z-[9999] transition-all duration-1000 ${
        fadeToWhite ? 'bg-white' : 'bg-black'
      } ${
        fadeToWhite ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transitionDelay: fadeToWhite ? '500ms' : '0s' }}
    >
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
        <>
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent opacity-50" />
          
          {/* Logo container */}
          <div className="relative">
            <img 
              src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png" 
              alt="Apply Logo" 
              className={`max-w-[80vw] max-h-[80vh] transition-all duration-2000 ease-out ${
                logoAnimated 
                  ? 'opacity-100 scale-100 blur-0' 
                  : 'opacity-0 scale-50 blur-sm'
              }`}
            />
            
            {/* Ripple effect */}
            {logoAnimated && !fadeToWhite && (
              <>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border-2 border-accent/30 animate-ripple" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border-2 border-accent/20 animate-ripple animation-delay-200" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border-2 border-accent/10 animate-ripple animation-delay-400" />
                </div>
              </>
            )}
          </div>

          {/* Skip button */}
          {!fadeToWhite && (
            <button
              onClick={handleSkip}
              className="absolute bottom-8 right-8 text-white/50 hover:text-white/80 transition-colors text-sm"
            >
              Skip Intro →
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CinematicIntro;