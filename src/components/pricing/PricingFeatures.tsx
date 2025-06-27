
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
    <section className="py-12 md:py-16 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-up">
            Everything You Need to Succeed
          </h2>
          <p className="text-base md:text-lg text-muted-foreground animate-fade-up animation-delay-100 max-w-2xl mx-auto">
            Powerful features designed to transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background/50 backdrop-blur-sm border border-border/50 p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
