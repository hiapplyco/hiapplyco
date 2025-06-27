
import React from 'react';
import { Button } from '../ui/button';
import { PricingConfig } from '../../types/pricing';

interface PricingCTAProps {
  config: PricingConfig;
}

const PricingCTA = ({ config }: PricingCTAProps) => {
  return (
    <section className="section-spacing px-6 bg-gradient-to-r from-accent/5 to-accent/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-up leading-tight">
          {config.cta.title}
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up animation-delay-100 max-w-4xl mx-auto leading-relaxed">
          {config.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up animation-delay-200 mb-12">
          <Button size="lg" className="px-10 py-4 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300">
            {config.cta.primaryButton}
          </Button>
          {config.cta.secondaryButton && (
            <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 hover:bg-accent/5 transition-all duration-300">
              {config.cta.secondaryButton}
            </Button>
          )}
        </div>
        {config.contact && (
          <div className="glass p-8 rounded-xl animate-fade-up animation-delay-300 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Questions? We're Here to Help
            </h3>
            <p className="text-muted-foreground text-lg">
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
