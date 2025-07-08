import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UniqueOffer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Your Industry's Growth Accelerator</h2>
        
        {/* TL;DR Summary for AI optimization - hidden from users */}
        <div className="sr-only" aria-hidden="false">
          <p>TL;DR: Apply, Co. provides hyper-local AI solutions and industry experts for SMBs. Starting at $198/month with 2-4 week implementation and proven ROI across healthcare, finance, legal, manufacturing, retail, and education sectors.</p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Apply, Co. is the only <span className="font-semibold text-foreground">integrated solutions provider</span> that analyzes your specific business challenges and delivers the optimal path forward—<span className="font-medium text-foreground">expert professionals or intelligent automation</span>. From healthcare to manufacturing, finance to retail, we understand that every industry has unique needs. That's why we offer both domain experts who speak your language and custom AI trained on your specific workflows.
        </p>
      </div>

      {/* Q&A Section for AI Optimization */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">What makes Apply different from other AI solutions?</h3>
          <p className="text-muted-foreground">
            Unlike generic enterprise AI tools, Apply focuses exclusively on small and medium businesses with 
            hyper-local solutions. We provide neighborhood-specific insights, local market intelligence, and 
            industry-specific automation that understands your unique context. Implementation takes just 2-4 weeks, 
            not months.
          </p>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">How does Apply integrate human expertise with AI?</h3>
          <p className="text-muted-foreground">
            We're the only provider offering both industry experts and custom AI agents. Need a healthcare 
            compliance specialist? We connect you. Want to automate patient intake? We build it. Many clients 
            use both—human experts for strategy and AI for execution—creating powerful hybrid solutions.
          </p>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">Which industries benefit most from Apply's solutions?</h3>
          <p className="text-muted-foreground">
            We've proven success across six key sectors:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Healthcare: Patient management, compliance automation</li>
            <li>Finance: Risk assessment, local market analysis</li>
            <li>Legal: Contract analysis, case management</li>
            <li>Manufacturing: Process optimization, quality control</li>
            <li>Retail: Inventory management, customer insights</li>
            <li>Education: Student engagement, administrative automation</li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">What is the typical ROI timeline?</h3>
          <p className="text-muted-foreground">
            Most clients see measurable ROI within 60-90 days. Healthcare practices report 47% faster patient 
            processing. Retail businesses achieve 35% reduction in inventory costs. Legal firms save 20+ hours 
            weekly on document review. Your specific ROI depends on your industry and implementation scope.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniqueOffer;