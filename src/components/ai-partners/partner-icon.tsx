
import { RefObject } from 'react';
import { motion } from 'framer-motion';
import { AIPartner } from './partners-data';

interface AIPartnerIconProps {
  partner: AIPartner;
  index: number;
  isInView: boolean;
  isBouncing: boolean;
  iconPositionsRef: RefObject<{ [key: number]: number }>;
}

export const AIPartnerIcon: React.FC<AIPartnerIconProps> = ({ 
  partner, 
  index, 
  isInView, 
  isBouncing,
  iconPositionsRef 
}) => {
  // Calculate a unique starting angle for each icon (0-360 degrees)
  const startAngle = (index * (360 / 16)) % 360; // Distribute 16 icons evenly around the circle
  
  return (
    <motion.div
      id={`partner-${index}`}
      className="absolute left-1/2 top-1/2"
      style={{
        width: '0',
        height: '0',
        // Start at a different position around the circle based on index
        transform: `rotate(${startAngle}deg)`
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: partner.delay + 0.5
      }}
    >
      <motion.div
        animate={isBouncing ? {
          // Random chaotic bouncing when clicked
          x: [0, Math.random() * 60 - 30, Math.random() * -40 + 20, 0],
          y: [0, Math.random() * 60 - 30, Math.random() * -40 + 20, 0],
          scale: [1, Math.random() * 0.4 + 0.8, Math.random() * 0.3 + 0.9, 1],
          transition: {
            duration: 2 + Math.random(),
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1]
          }
        } : {
          rotate: [iconPositionsRef.current?.[index] || 0, (iconPositionsRef.current?.[index] || 0) + 360],
          transition: {
            duration: 40 / (partner.speed * (partner.orbit < 250 ? 1.5 : 1)), // Make inner orbits rotate faster
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }
        }}
      >
        <motion.div
          style={{
            transform: `translate(-50%, -50%) translateX(${partner.orbit}px) rotate(${-startAngle}deg)`, // Counter-rotate to keep icons facing outward
          }}
        >
          <div className="h-16 w-16 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center">
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-10 max-w-10 object-contain"
            />
          </div>
          <p className="mt-1 text-xs text-center text-gray-400 w-20 mx-auto">{partner.name}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
