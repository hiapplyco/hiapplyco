
import { useRef, useState } from 'react';
import { motion, useAnimationFrame, useInView } from 'framer-motion';
import { AIPartnerOrbit } from './partner-orbit';
import { AIPartnerIcon } from './partner-icon';
import { aiPartnersData } from './partners-data';

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
      {/* Center Apply Logo */}
      <motion.div 
        className="absolute z-30 cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        onClick={handleApplyClick}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-40 h-40 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center">
          <img 
            src="/ApplyLogoNoBackground.png" 
            alt="Apply, Co." 
            className="w-32 h-32 object-contain"
          />
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{ 
              boxShadow: ['0 0 0 rgba(155, 135, 245, 0.3)', '0 0 30px rgba(155, 135, 245, 0.7)', '0 0 10px rgba(155, 135, 245, 0.3)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
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
