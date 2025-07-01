import { AIPartnersOrbitalSystem } from './orbital-system';

const AIPartnersSection = () => {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading with proper spacing */}
        <div className="mb-20 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Our Technology Stack
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading AI technologies we leverage to build custom solutions for SMBs
          </p>
        </div>
        
        {/* Orbital system container with proper height and overflow */}
        <div className="relative overflow-visible" style={{ minHeight: '950px' }}>
          <AIPartnersOrbitalSystem />
        </div>
      </div>
    </div>
  );
};

export default AIPartnersSection;