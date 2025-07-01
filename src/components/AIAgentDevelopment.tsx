import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const agentExamples = [
  'Automated Customer Support & Triage',
  'Real-time Data Analysis & Reporting',
  'Intelligent Document Processing & Summarization',
  'Automated Lead Generation & Outreach',
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
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-foreground/90">
            Our team handles the <span className="font-semibold text-foreground">full lifecycle</span> of AI agent creation, from initial consultation and development to deployment, integration, and ongoing optimization.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We ensure your AI solutions are not only powerful but also seamlessly integrated into your existing workflows.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-muted-foreground mb-6">
          Ready to explore how AI agents can transform your business? Check out our pricing options below.
        </p>
        <a 
          href="#pricing" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
        >
          View Pricing Plans
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AIAgentDevelopment;