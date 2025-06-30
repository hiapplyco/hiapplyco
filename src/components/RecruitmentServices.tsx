import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Staffing',
    description: 'Flexible and temporary workforce solutions to meet immediate operational needs.',
  },
  {
    title: 'Contingent Hiring',
    description: 'Access to a contractual workforce for projects with defined timelines and deliverables.',
  },
  {
    title: 'Permanent Hiring',
    description: 'Full-time employees sourced to fill specialized, long-term, or executive roles.',
  },
  {
    title: 'Staff Augmentation',
    description: 'Integrating skilled professionals into your existing teams to fill talent gaps.',
  },
];

const benefits = [
  'Rapidly scale your workforce up or down',
  'Access to a pipeline of high-quality, vetted talent',
  'Customized hiring solutions tailored to your goals',
  'Reduced time-to-hire for critical roles',
];

const RecruitmentServices = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Recruitment & Staffing</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Whether you need to hire one key person or build an entire team, we provide the human resources to help you scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {services.map((service) => (
          <Card key={service.title} className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/30">
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
          <div className="text-center md:text-left p-6 bg-background/50 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Transparent Pricing</h4>
            <p className="text-muted-foreground">
              Our pricing is based on a standard industry markup (typically 15-25%) over candidate salaries or hourly rates. We also offer customized pricing for specialized and high-volume recruitment projects.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecruitmentServices;