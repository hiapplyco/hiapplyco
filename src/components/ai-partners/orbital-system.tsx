
import { useRef, useState } from 'react';
import { motion, useAnimationFrame, useInView } from 'framer-motion';
import { AIPartnerOrbit } from './partner-orbit';
import { AIPartnerIcon } from './partner-icon';
import { aiPartnersData } from './partners-data';
import { Center3DLogo } from './center-3d-logo';

export const AIPartnersOrbitalSystem = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const orbitRef = useRef<HTMLDivElement>(null);
  const [isBouncing, setIsBouncing] = useState(false);
  
  // Store the rotation positions of each partner
  const iconPositionsRef = useRef<{ [key: number]: number }>({});

  // Animation for the solar system effect
  useAnimationFrame((time) => {
    if (!orbitRef.current || isBouncing) return;
    
    // Very gentle rotation of the entire orbit system
    orbitRef.current.style.transform = `rotate(${time * 0.005}deg)`;
  });

  const handleApplyClick = () => {
    setIsBouncing(true);

    // Store current rotation positions before chaos
    aiPartnersData.forEach((partner, index) => {
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
    }, 3000); // Animation duration + a bit extra
  };

  return (
    <div className="flex justify-center items-center relative" style={{ height: '700px' }} ref={sectionRef}>
      {/* Center 3D Logo */}
      <motion.div 
        className="absolute z-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        whileTap={{ scale: 0.95 }}
      >
        <Center3DLogo onClick={handleApplyClick} />
      </motion.div>
      
      {/* Orbits container */}
      <div 
        ref={orbitRef} 
        className="absolute w-full h-full"
        style={{ maxWidth: '800px', maxHeight: '800px' }}
      >
        {/* Orbit paths */}
        {aiPartnersData.map((partner, index) => (
          <AIPartnerOrbit
            key={`orbit-${index}`}
            partner={partner}
            isInView={isInView}
          />
        ))}

        {/* AI Partner Icons */}
        {aiPartnersData.map((partner, index) => (
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
  );
};
