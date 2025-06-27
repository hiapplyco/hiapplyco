
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
    <section className="section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100 max-w-3xl mx-auto">
            Powerful features designed to transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {config.additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="glass glass-hover p-8 rounded-xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
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
