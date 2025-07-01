import { RefObject, memo } from 'react';
import { motion } from 'framer-motion';
import { AIPartner } from './partners-data';

interface AIPartnerIconProps {
  partner: AIPartner;
  index: number;
  isInView: boolean;
  isBouncing: boolean;
  iconPositionsRef: RefObject<{ [key: number]: number }>;
}

// Memoize to prevent unnecessary re-renders
export const AIPartnerIcon = memo<AIPartnerIconProps>(({ 
  partner, 
  index, 
  isInView, 
  isBouncing,
  iconPositionsRef 
}) => {
  // Calculate a unique starting angle for each icon (0-360 degrees)
  const startAngle = (index * (360 / 16)) % 360;
  
  // Pre-calculate animation values
  const animationDuration = 40 / (partner.speed * (partner.orbit < 250 ? 1.5 : 1));
  const bounceX = isBouncing ? [0, Math.random() * 60 - 30, Math.random() * -40 + 20, 0] : undefined;
  const bounceY = isBouncing ? [0, Math.random() * 60 - 30, Math.random() * -40 + 20, 0] : undefined;
  const bounceScale = isBouncing ? [1, Math.random() * 0.4 + 0.8, Math.random() * 0.3 + 0.9, 1] : undefined;
  
  return (
    <motion.div
      id={`partner-${index}`}
      className="absolute left-1/2 top-1/2"
      style={{
        width: '0',
        height: '0',
        transform: `rotate(${startAngle}deg)`,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: partner.delay + 0.5
      }}
    >
      <motion.div
        style={{
          willChange: isBouncing ? 'transform' : 'auto',
        }}
        animate={isBouncing ? {
          x: bounceX,
          y: bounceY,
          scale: bounceScale,
          transition: {
            duration: 2 + Math.random(),
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1]
          }
        } : {
          rotate: [iconPositionsRef.current?.[index] || 0, (iconPositionsRef.current?.[index] || 0) + 360],
          transition: {
            duration: animationDuration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }
        }}
      >
        <motion.div
          style={{
            transform: `translate3d(-50%, -50%, 0) translateX(${partner.orbit}px) rotateZ(${-startAngle}deg)`,
            willChange: 'transform',
          }}
        >
          <div 
            className="h-16 w-16 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center"
            style={{
              transform: 'translateZ(0)', // Force GPU layer
              backfaceVisibility: 'hidden',
            }}
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-10 max-w-10 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="mt-1 text-xs text-center text-gray-400 w-20 mx-auto">{partner.name}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for memo - only re-render if these specific props change
  return (
    prevProps.isInView === nextProps.isInView &&
    prevProps.isBouncing === nextProps.isBouncing &&
    prevProps.index === nextProps.index
  );
});