
import React from 'react';
import { Button } from '../ui/button';
import { PricingConfig } from '../../types/pricing';

interface PricingCTAProps {
  config: PricingConfig;
}

const PricingCTA = ({ config }: PricingCTAProps) => {
  return (
    <section className="py-8 px-6 bg-gradient-to-r from-accent/5 to-accent/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-3">
          {config.cta.title}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {config.cta.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button size="lg" className="px-6 py-2 font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
            {config.cta.primaryButton}
          </Button>
          {config.cta.secondaryButton && (
            <Button variant="outline" size="lg" className="px-6 py-2 font-semibold border hover:bg-accent/5">
              {config.cta.secondaryButton}
            </Button>
          )}
        </div>
        
        {config.contact && (
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 p-4 rounded-lg max-w-lg mx-auto">
            <h3 className="font-semibold mb-2">
              Questions? We're Here to Help
            </h3>
            <p className="text-muted-foreground text-sm">
              Contact <span className="font-semibold text-foreground">{config.contact.name}</span> at{' '}
              <a 
                href={`mailto:${config.contact.email}`} 
                className="text-accent hover:text-accent/80 font-semibold hover:underline"
              >
                {config.contact.email}
              </a>
              {config.contact.phone && (
                <>
                  {' '}or call{' '}
                  <a 
                    href={`tel:${config.contact.phone}`} 
                    className="text-accent hover:text-accent/80 font-semibold hover:underline"
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
