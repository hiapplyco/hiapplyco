import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Strategic Expertise',
    description: 'Deploy industry veterans for critical projects and transformational initiatives.',
  },
  {
    title: 'Technical Specialists',
    description: 'Access professionals with deep domain knowledge and technical capabilities specific to your sector.',
  },
  {
    title: 'Leadership Placement',
    description: 'Find executives and managers who understand your industry\'s unique dynamics and opportunities.',
  },
  {
    title: 'Team Transformation',
    description: 'Build high-performance teams with the right mix of industry experience and innovative thinking.',
  },
];

const benefits = [
  'Industry-specific expertise on demand',
  'Pre-vetted professionals who understand your sector',
  'Flexible engagement models for any business need',
  'Rapid deployment of specialized knowledge',
];

const RecruitmentServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold tracking-tight">Human Talent Recruitment</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
          When AI isn't the answer, we deliver exceptional human expertise. Access specialized professionals who understand your industry's unique challenges. From strategic advisors to technical specialists, domain architects to transformation leaders, we connect you with the human talent that drives real business outcomes. Powered by <a href="https://apply.codes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">apply.codes</a>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {services.map((service) => (
          <Card key={service.title} className="bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Key Benefits & Pricing</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="text-center md:text-left p-6 bg-card rounded-lg gradient-border">
            <h4 className="text-xl font-semibold mb-2">Transparent Pricing</h4>
            <p className="text-muted-foreground">
              Our pricing is based on a standard industry markup (typically 25-35%) over professional fees or project rates. We also offer customized pricing for specialized engagements, transformation initiatives, and strategic partnerships across all industries.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecruitmentServices;