import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    title: 'Dual Expertise',
    description: 'We are uniquely positioned with deep experience in both niche talent acquisition and advanced AI agent development.',
  },
  {
    title: 'Proven Track Record',
    description: 'We have a history of success serving diverse business sectors, from startups to enterprise-level clients.',
  },
  {
    title: 'Tailored, Scalable Solutions',
    description: 'Our solutions are not one-size-fits-all. We tailor our approach to your specific business goals for maximum impact.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Why Choose Apply, Co.?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We bridge the gap between human talent and artificial intelligence to deliver unparalleled growth opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <Card key={reason.title} className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;