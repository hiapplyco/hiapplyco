import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const agentExamples = [
  'Automated Customer Support & Triage',
  'Real-time Data Analysis & Reporting',
  'Intelligent Document Processing & Summarization',
  'Automated Lead Generation & Outreach',
];

const pricingTiers = [
  {
    name: 'Starter Pack',
    agents: '1-3 Agents',
    description: 'Perfect for automating a few key tasks and proving ROI.',
  },
  {
    name: 'Growth Pack',
    agents: '4-10 Agents',
    description: 'Ideal for scaling automation across multiple departments.',
  },
  {
    name: 'Enterprise Pack',
    agents: '11+ Agents',
    description: 'Custom solutions for large-scale, complex automation needs.',
  },
];

const AIAgentDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold tracking-tight">AI Agent Development</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
          Reduce overhead, increase productivity, and optimize your workflows with custom AI agents built for your specific business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
        <Card className="bg-background/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Example Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {agentExamples.map((example) => (
                <li key={example} className="flex items-center text-muted-foreground">
                  <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {example}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="prose prose-lg text-muted-foreground">
          <p>Our team handles the full lifecycle of AI agent creation, from initial consultation and development to deployment, integration, and ongoing optimization. We ensure your AI solutions are not only powerful but also seamlessly integrated into your existing workflows.</p>
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold">Pricing Tiers</h3>
        <p className="mt-2 text-md text-muted-foreground">Based on the number of agents developed and deployed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <p className="font-semibold text-lg">{tier.agents}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{tier.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button variant="outline" className="w-full">Request Info</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIAgentDevelopment;