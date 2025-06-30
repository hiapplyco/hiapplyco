
import { AIPartnersOrbitalSystem } from './orbital-system';

const AIPartnersSection = () => {
  return (
    <div className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-up">
            Our Technology Stack
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Leading AI technologies we leverage to build custom solutions for SMBs
          </p>
        </div>
        
        {/* Orbital system component */}
        <div className="animate-fade-up animation-delay-200">
          <AIPartnersOrbitalSystem />
        </div>
      </div>
    </div>
  );
};

export default AIPartnersSection;
