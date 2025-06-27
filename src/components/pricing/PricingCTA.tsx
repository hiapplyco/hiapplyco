
import React from 'react';
import { Button } from '../ui/button';
import { PricingConfig } from '../../types/pricing';

interface PricingCTAProps {
  config: PricingConfig;
}

const PricingCTA = ({ config }: PricingCTAProps) => {
  return (
    <section className="py-12 md:py-16 px-6 bg-gradient-to-r from-accent/5 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-up leading-tight">
          {config.cta.title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-100 max-w-3xl mx-auto leading-relaxed">
          {config.cta.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200 mb-8">
          <Button size="lg" className="px-8 py-3 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all duration-300">
            {config.cta.primaryButton}
          </Button>
          {config.cta.secondaryButton && (
            <Button variant="outline" size="lg" className="px-8 py-3 text-base font-semibold border-2 hover:bg-accent/5 transition-all duration-300">
              {config.cta.secondaryButton}
            </Button>
          )}
        </div>
        
        {config.contact && (
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 p-6 rounded-lg animate-fade-up animation-delay-300 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Questions? We're Here to Help
            </h3>
            <p className="text-muted-foreground text-sm">
              Contact <span className="font-semibold text-foreground">{config.contact.name}</span> at{' '}
              <a 
                href={`mailto:${config.contact.email}`} 
                className="text-accent hover:text-accent/80 font-semibold hover:underline transition-colors"
              >
                {config.contact.email}
              </a>
              {config.contact.phone && (
                <>
                  {' '}or call{' '}
                  <a 
                    href={`tel:${config.contact.phone}`} 
                    className="text-accent hover:text-accent/80 font-semibold hover:underline transition-colors"
                  >
                    {config.contact.phone}
                  </a>
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingCTA;
