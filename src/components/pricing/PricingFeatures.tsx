
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
    <section className="py-8 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful features designed to transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {config.additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background/50 backdrop-blur-sm border border-border/50 p-4 rounded-lg hover:shadow-sm transition-all duration-300"
            >
              <h3 className="font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;
