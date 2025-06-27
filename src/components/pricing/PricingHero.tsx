
import React from 'react';
import { PricingConfig } from '../../types/pricing';

interface PricingHeroProps {
  config: PricingConfig;
}

const PricingHero = ({ config }: PricingHeroProps) => {
  return (
    <section className="section-spacing px-6 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        {config.hero.badge && (
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-8 animate-fade-up border border-accent/20">
            {config.hero.badge}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-up leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {config.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up animation-delay-100 max-w-4xl mx-auto leading-relaxed">
          {config.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
