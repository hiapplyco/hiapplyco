import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    title: 'Industry-First Approach',
    description: 'We start by understanding your industry\'s specific challenges, regulations, and opportunities. Our solutions are never generic—they\'re built for your exact business context.',
  },
  {
    title: 'Proven Across Sectors',
    description: 'From healthcare to legal, manufacturing to education, we\'ve successfully deployed solutions across diverse industries, each with measurable ROI within 90 days.',
  },
  {
    title: 'Integrated Excellence',
    description: 'Why juggle multiple vendors? Get both expert talent and AI automation from one partner who understands how to make them work together seamlessly.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Why Choose Apply, Co.?</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We bridge the gap between human talent and artificial intelligence to deliver unparalleled growth opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <Card key={reason.title} className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;