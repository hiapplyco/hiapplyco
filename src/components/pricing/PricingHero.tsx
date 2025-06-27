
import React from 'react';
import { PricingConfig } from '../../types/pricing';

interface PricingHeroProps {
  config: PricingConfig;
}

const PricingHero = ({ config }: PricingHeroProps) => {
  return (
    <section className="section-spacing px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          {config.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-100">
          {config.hero.subtitle}
        </p>
        {config.hero.badge && (
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-up animation-delay-200">
            {config.hero.badge}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingHero;
