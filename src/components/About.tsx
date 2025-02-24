
import React from 'react';
import { Shield, Target, LineChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-3xl font-bold">Bridging Battlefield Discipline & Boardroom Strategy</h2>
            
            <div className="prose prose-neutral">
              <p className="text-lg text-muted-foreground">
                A US Army Veteran and C-Suite Advisor specializing in AI Solutions Architecture. With over a decade of experience leading high-stakes tech deployments for Fortune 500s and government agencies, I design agentic AI systems that work as hard as your team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-lg hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Executive-First AI Design</h3>
                    <p className="text-muted-foreground">Solutions that speak both engineer and CFO – no translation needed.</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-lg hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Compliance-Built Systems</h3>
                    <p className="text-muted-foreground">Government-grade security & governance baked into every workflow.</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-lg hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <LineChart className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Measurable Impact</h3>
                    <p className="text-muted-foreground">Clear ROI tracking for AI investments, focused on revenue, efficiency, and risk reduction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-2xl glass p-2">
              <img 
                src="/lovable-uploads/d80be15b-18f5-4197-b89a-38254156fc5e.png"
                alt="James Schlauch - AI Solutions Architect"
                className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform"
              />
            </div>
            <div className="glass absolute bottom-4 left-4 right-4 p-4 rounded-lg backdrop-blur-md">
              <h3 className="font-bold text-lg">James Schlauch</h3>
              <p className="text-sm text-muted-foreground">AI Solutions Architect | Strategic Technology Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
