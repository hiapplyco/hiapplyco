
import React from 'react';
import { PricingConfig } from '../../types/pricing';

interface PricingFeaturesProps {
  config: PricingConfig;
}

const PricingFeatures = ({ config }: PricingFeaturesProps) => {
  if (!config.additionalFeatures || config.additionalFeatures.length === 0) {
    return null;
  }

  return (
    <section className="section-spacing px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 animate-fade-up">
          Everything You Need to Succeed
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="text-left animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;
