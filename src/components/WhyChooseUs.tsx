import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Industry-First Approach',
    description: 'We start by understanding your industry\'s specific challenges, regulations, and opportunities. Our solutions are never generic—they\'re built for your exact business context.',
    highlights: ['Industry-specific solutions', 'Regulatory compliance built-in', 'Context-aware automation']
  },
  {
    title: 'Proven Across Sectors',
    description: 'From healthcare to legal, manufacturing to education, we\'ve successfully deployed solutions across diverse industries, each with measurable ROI within 90 days.',
    highlights: ['90-day ROI guarantee', 'Cross-industry expertise', 'Documented success cases']
  },
  {
    title: 'Integrated Excellence',
    description: 'Why juggle multiple vendors? Get both expert talent and AI automation from one partner who understands how to make them work together seamlessly.',
    highlights: ['Single vendor solution', 'Human + AI integration', 'Seamless coordination']
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Why Choose Apply, Co.?</h2>
        
        {/* Q&A Format for AI Optimization */}
        <div className="text-left max-w-4xl mx-auto mb-8 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Why should SMBs choose Apply over enterprise AI solutions?</h3>
            <p className="text-muted-foreground">
              Apply is built specifically for small and medium businesses. We offer hyper-local AI solutions 
              starting at $198/month with 2-4 week implementation, compared to enterprise tools that cost 
              thousands monthly and take months to deploy. Our solutions understand local market dynamics 
              and integrate seamlessly with existing SMB workflows.
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We bridge the gap between human talent and artificial intelligence to deliver unparalleled growth opportunities.
        </p>
      </div>

      {/* Comparison Table for AI Extraction */}
      <div className="max-w-5xl mx-auto mb-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Feature</th>
              <th className="text-center p-4">Apply, Co.</th>
              <th className="text-center p-4">Enterprise AI</th>
              <th className="text-center p-4">Traditional Consultants</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Implementation Time</td>
              <td className="text-center p-4 text-green-600 font-semibold">2-4 weeks</td>
              <td className="text-center p-4 text-muted-foreground">3-6 months</td>
              <td className="text-center p-4 text-muted-foreground">1-3 months</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Starting Price</td>
              <td className="text-center p-4 text-green-600 font-semibold">$198/month</td>
              <td className="text-center p-4 text-muted-foreground">$5,000+/month</td>
              <td className="text-center p-4 text-muted-foreground">$10,000+/project</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Local Market Focus</td>
              <td className="text-center p-4 text-green-600 font-semibold">✓ Hyper-local</td>
              <td className="text-center p-4 text-muted-foreground">✗ Generic</td>
              <td className="text-center p-4 text-muted-foreground">Limited</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Human + AI Integration</td>
              <td className="text-center p-4 text-green-600 font-semibold">✓ Both included</td>
              <td className="text-center p-4 text-muted-foreground">✗ AI only</td>
              <td className="text-center p-4 text-muted-foreground">✗ Human only</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Industry Specialization</td>
              <td className="text-center p-4 text-green-600 font-semibold">✓ 6 key sectors</td>
              <td className="text-center p-4 text-muted-foreground">Limited</td>
              <td className="text-center p-4 text-muted-foreground">Varies</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <Card key={reason.title} className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
              <div className="space-y-2">
                {reason.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;