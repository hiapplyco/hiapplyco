
import React from 'react';
import { PricingConfig } from '../../types/pricing';

interface PricingHeroProps {
  config: PricingConfig;
}

const PricingHero = ({ config }: PricingHeroProps) => {
  return (
    <section className="py-8 px-6 text-center bg-gradient-to-b from-background to-muted/5">
      <div className="max-w-3xl mx-auto">
        {config.hero.badge && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
            {config.hero.badge}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
          {config.hero.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          {config.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
