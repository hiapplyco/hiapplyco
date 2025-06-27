
import React from 'react';
import { Button } from '../ui/button';
import { PricingConfig } from '../../types/pricing';

interface PricingCTAProps {
  config: PricingConfig;
}

const PricingCTA = ({ config }: PricingCTAProps) => {
  return (
    <section className="section-spacing px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 animate-fade-up">
          {config.cta.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-100">
          {config.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
          <Button size="lg" className="px-8">
            {config.cta.primaryButton}
          </Button>
          {config.cta.secondaryButton && (
            <Button variant="outline" size="lg" className="px-8">
              {config.cta.secondaryButton}
            </Button>
          )}
        </div>
        {config.contact && (
          <p className="text-muted-foreground mt-6 animate-fade-up animation-delay-300">
            Questions? Contact {config.contact.name} at{' '}
            <a href={`mailto:${config.contact.email}`} className="text-accent hover:underline">
              {config.contact.email}
            </a>
            {config.contact.phone && (
              <>
                {' '}or call{' '}
                <a href={`tel:${config.contact.phone}`} className="text-accent hover:underline">
                  {config.contact.phone}
                </a>
              </>
            )}
          </p>
        )}
      </div>
    </section>
  );
};

export default PricingCTA;
