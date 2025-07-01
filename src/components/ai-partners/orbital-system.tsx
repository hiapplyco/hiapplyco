import { useRef, useState, useCallback, useMemo } from 'react';
import { motion, useAnimationFrame, useInView } from 'framer-motion';
import { AIPartnerOrbit } from './partner-orbit';
import { AIPartnerIcon } from './partner-icon';
import { aiPartnersData } from './partners-data';
import { Center3DLogo } from './center-3d-logo';

export const AIPartnersOrbitalSystem = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const orbitRef = useRef<HTMLDivElement>(null);
  const [isBouncing, setIsBouncing] = useState(false);
  const rotationRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  
  // Store the rotation positions of each partner
  const iconPositionsRef = useRef<{ [key: number]: number }>({});

  // Memoize partners data to prevent re-renders
  const partners = useMemo(() => aiPartnersData, []);

  // Optimized animation frame with performance monitoring
  useAnimationFrame((time) => {
    if (!orbitRef.current || isBouncing) return;
    
    // Skip frames if running slow (target 30fps minimum)
    const currentTime = performance.now();
    if (currentTime - lastFrameTimeRef.current < 33) return;
    lastFrameTimeRef.current = currentTime;
    
    // Use transform3d for GPU acceleration
    rotationRef.current = (rotationRef.current + 0.005) % 360;
    orbitRef.current.style.transform = `rotate3d(0, 0, 1, ${rotationRef.current}deg)`;
  });

  const handleApplyClick = useCallback(() => {
    setIsBouncing(true);

    // Store current rotation positions before chaos
    partners.forEach((partner, index) => {
      const element = document.getElementById(`partner-${index}`);
      if (element) {
        const style = window.getComputedStyle(element);
        const matrix = new WebKitCSSMatrix(style.transform);
        const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
        iconPositionsRef.current[index] = angle;
      }
    });
    
    // After animation completes, set back to normal rotation from current position
    setTimeout(() => {
      setIsBouncing(false);
    }, 3000);
  }, [partners]);

  return (
    <div 
      className="flex justify-center items-center relative" 
      style={{ 
        height: '900px',
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU layer
      }} 
      ref={sectionRef}
    >
      {/* Orbits container with proper z-index */}
      <div 
        ref={orbitRef} 
        className="absolute w-full h-full"
        style={{ 
          maxWidth: '800px', 
          maxHeight: '800px',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          zIndex: 20,
        }}
      >
        {/* Orbit paths - render first for proper layering */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          {partners.map((partner, index) => (
            <AIPartnerOrbit
              key={`orbit-${index}`}
              partner={partner}
              isInView={true} // Always show orbits
            />
          ))}
        </div>

        {/* AI Partner Icons - render on top of orbits */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          {partners.map((partner, index) => (
            <AIPartnerIcon
              key={`partner-${index}`}
              partner={partner}
              index={index}
              isInView={isInView}
              isBouncing={isBouncing}
              iconPositionsRef={iconPositionsRef}
            />
          ))}
        </div>
      </div>

      {/* Center 3D Logo - highest z-index */}
      <motion.div 
        className="absolute"
        style={{ zIndex: 30 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        whileTap={{ scale: 0.95 }}
      >
        <Center3DLogo onClick={handleApplyClick} />
      </motion.div>
    </div>
  );
};