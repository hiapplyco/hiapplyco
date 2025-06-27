
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
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select the perfect solution for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {config.tiers.map((tier, index) => (
            <Card 
              key={tier.id} 
              className={`relative transition-all duration-300 hover:shadow-lg ${
                tier.popular 
                  ? 'ring-2 ring-accent shadow-md scale-105' 
                  : 'hover:border-accent/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-lg font-bold mb-2">
                  {tier.name}
                </CardTitle>
                
                <div className="mb-3">
                  <span className="text-2xl md:text-3xl font-bold">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">
                      /{tier.period}
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 pb-6">
                <div className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
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
