
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Check } from 'lucide-react';
import { PricingConfig } from '../../types/pricing';

interface PricingTiersProps {
  config: PricingConfig;
}

const PricingTiers = ({ config }: PricingTiersProps) => {
  return (
    <section className="section-spacing px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100 max-w-3xl mx-auto">
            Select the perfect solution for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.tiers.map((tier, index) => (
            <Card 
              key={tier.id} 
              className={`glass glass-hover animate-fade-up relative overflow-hidden ${
                tier.popular ? 'ring-2 ring-accent scale-105 shadow-2xl' : 'shadow-lg'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {tier.popular && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/60"></div>
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                    Most Popular
                  </Badge>
                </>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl md:text-3xl mb-4 font-bold text-foreground">
                  {tier.name}
                </CardTitle>
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-lg text-muted-foreground font-medium">
                      /{tier.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {tier.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="h-px bg-border mb-6"></div>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
