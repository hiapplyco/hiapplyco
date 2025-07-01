import { motion } from 'framer-motion';
import { AIPartner } from './partners-data';

interface AIPartnerOrbitProps {
  partner: AIPartner;
  isInView: boolean;
}

export const AIPartnerOrbit: React.FC<AIPartnerOrbitProps> = ({ partner, isInView }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
      style={{
        width: partner.orbit * 2,
        height: partner.orbit * 2,
        transform: 'translate(-50%, -50%)',
        border: '2px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)',
        background: 'radial-gradient(circle, transparent 99%, rgba(255, 255, 255, 0.05) 100%)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
      } : {}}
      transition={{ 
        duration: 0.5, 
        delay: partner.delay * 0.5,
        ease: "easeOut"
      }}
    />
  );
};