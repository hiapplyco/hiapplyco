import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Scale, Factory, ShoppingCart, GraduationCap, DollarSign } from 'lucide-react';

const industries = [
  {
    title: 'Healthcare',
    icon: Heart,
    iconColor: 'text-red-500',
    challenges: 'Patient scheduling, documentation, compliance',
    solutions: 'Automated intake, HIPAA-compliant AI assistants, predictive care analytics',
    metric: '60% reduction in administrative time'
  },
  {
    title: 'Legal',
    icon: Scale,
    iconColor: 'text-blue-500',
    challenges: 'Document review, case research, billing',
    solutions: 'Contract analysis AI, automated research, intelligent time tracking',
    metric: '3x faster document processing'
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    iconColor: 'text-gray-500',
    challenges: 'Quality control, maintenance, inventory',
    solutions: 'Predictive maintenance AI, vision-based QC, supply chain optimization',
    metric: '80% reduction in defects'
  },
  {
    title: 'Retail',
    icon: ShoppingCart,
    iconColor: 'text-green-500',
    challenges: 'Inventory management, personalization, customer service',
    solutions: 'Demand forecasting, AI recommendations, automated support',
    metric: '45% increase in conversions'
  },
  {
    title: 'Education',
    icon: GraduationCap,
    iconColor: 'text-purple-500',
    challenges: 'Student engagement, grading, personalization',
    solutions: 'Adaptive learning paths, automated assessment, engagement analytics',
    metric: '40% improved outcomes'
  },
  {
    title: 'Finance',
    icon: DollarSign,
    iconColor: 'text-yellow-500',
    challenges: 'Risk assessment, compliance, fraud detection',
    solutions: 'Automated underwriting, regulatory AI, anomaly detection',
    metric: '90% faster processing'
  }
];

const IndustryShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Solutions for Every Industry</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We understand that every industry has unique challenges. That's why we deliver custom AI solutions and expert talent specifically designed for your sector's needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <Card key={industry.title} className="bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon className={`h-8 w-8 ${industry.iconColor}`} />
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Common Challenges:</p>
                  <p className="text-sm">{industry.challenges}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Our Solutions:</p>
                  <p className="text-sm">{industry.solutions}</p>
                </div>
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm font-semibold text-accent">{industry.metric}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">
          Don't see your industry? We create custom solutions for any business sector.
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 px-6 py-3 gradient-purple-green text-white rounded-lg font-medium hover:bg-foreground hover:text-background transition-all duration-200"
        >
          Discuss Your Industry's Needs
        </a>
      </div>
    </div>
  );
};

export default IndustryShowcase;