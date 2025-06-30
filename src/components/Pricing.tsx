import React from 'react';
import { Check, X } from 'lucide-react';
import EnhancedButton from './EnhancedButton';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$198",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        { text: "1 AI Agent", included: true },
        { text: "Local market insights", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "Custom integrations", included: false },
        { text: "Advanced training", included: false },
      ]
    },
    {
      name: "Growth",
      price: "$498",
      period: "/month",
      description: "For growing SMBs ready to scale with AI",
      popular: true,
      features: [
        { text: "3 AI Agents", included: true },
        { text: "Advanced local analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Custom workflows", included: true },
        { text: "API access", included: true },
        { text: "Team training", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for established businesses",
      features: [
        { text: "Unlimited AI Agents", included: true },
        { text: "Custom development", included: true },
        { text: "Dedicated support", included: true },
        { text: "Full integration suite", included: true },
        { text: "On-site training", included: true },
        { text: "SLA guarantee", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="section-spacing px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your SMB. All plans include hyper-local AI optimization and can be deployed within 2-4 weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl p-8 animate-fade-up gradient-border ${
                plan.popular 
                  ? 'shadow-lg scale-105' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <EnhancedButton
                variant={plan.popular ? 'accent' : 'secondary'}
                className={`w-full ${
                  plan.popular 
                    ? 'gradient-purple-green text-white hover:bg-foreground hover:text-background' 
                    : 'hover:bg-foreground hover:text-background'
                }`}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
              </EnhancedButton>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
          <p className="text-muted-foreground mb-3">
            All plans include a 30-day money-back guarantee
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? Contact <a href="mailto:martin@hiapply.co" className="text-accent hover:underline">martin@hiapply.co</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;