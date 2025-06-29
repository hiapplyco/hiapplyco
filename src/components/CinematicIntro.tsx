import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CinematicIntroProps {
  onComplete?: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [visible, setVisible] = useState(true);
  const [logoAnimated, setLogoAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setVisible(false);
      return;
    }

    // Trigger logo animation after a short delay
    const animationTimer = setTimeout(() => {
      setLogoAnimated(true);
      
      // Trigger particle pulse effect if available
      if ((window as any).particleEffect && typeof (window as any).particleEffect.pulse === 'function') {
        setTimeout(() => {
          (window as any).particleEffect.pulse();
        }, 500); // Delay to sync with logo animation
      }
    }, 100);

    // Hide intro after animation completes
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('hasSeenIntro', 'true');
      if (onComplete) {
        onComplete();
      }
    }, 3500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!visible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center bg-black z-[9999] transition-opacity duration-1000 ${
        logoAnimated ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transitionDelay: logoAnimated ? '2.5s' : '0s' }}
    >
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
        {logoAnimated && (
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
      <button
        onClick={() => {
          setVisible(false);
          sessionStorage.setItem('hasSeenIntro', 'true');
          if (onComplete) {
            onComplete();
          }
        }}
        className="absolute bottom-8 right-8 text-white/50 hover:text-white/80 transition-colors text-sm"
      >
        Skip Intro →
      </button>
    </div>
  );
};

export default CinematicIntro;