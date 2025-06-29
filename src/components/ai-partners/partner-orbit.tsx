
import { motion } from 'framer-motion';
import { AIPartner } from './partners-data';

interface AIPartnerOrbitProps {
  partner: AIPartner;
  isInView: boolean;
}

export const AIPartnerOrbit: React.FC<AIPartnerOrbitProps> = ({ partner, isInView }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-white/5"
      style={{
        width: partner.orbit * 2,
        height: partner.orbit * 2,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: partner.delay }}
    />
  );
};
