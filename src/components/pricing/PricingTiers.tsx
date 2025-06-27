
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
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-up">
            Choose Your Plan
          </h2>
          <p className="text-base md:text-lg text-muted-foreground animate-fade-up animation-delay-100 max-w-2xl mx-auto">
            Select the perfect solution for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.tiers.map((tier, index) => (
            <Card 
              key={tier.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                tier.popular 
                  ? 'ring-2 ring-accent shadow-lg border-accent/20' 
                  : 'border hover:border-accent/30'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/60"></div>
              )}
              
              <CardHeader className="text-center pb-6">
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </Badge>
                )}
                
                <CardTitle className="text-xl font-bold mb-3 text-foreground">
                  {tier.name}
                </CardTitle>
                
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground font-medium">
                      /{tier.period}
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tier.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="h-px bg-border mb-4"></div>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground leading-relaxed">
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
