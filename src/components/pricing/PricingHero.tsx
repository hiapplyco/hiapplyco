
import React from 'react';
import { PricingConfig } from '../../types/pricing';

interface PricingHeroProps {
  config: PricingConfig;
}

const PricingHero = ({ config }: PricingHeroProps) => {
  return (
    <section className="py-12 md:py-16 px-6 text-center bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-4xl mx-auto">
        {config.hero.badge && (
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-up border border-accent/20">
            {config.hero.badge}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-up leading-tight">
          {config.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-100 max-w-3xl mx-auto leading-relaxed">
          {config.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
