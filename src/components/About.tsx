import React from 'react';
import { Shield, Target, LineChart, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-spacing px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-right">
            <h2 className="text-3xl md:text-4xl font-bold">Bridging Battlefield Discipline & Boardroom Strategy</h2>
            
            <div className="prose prose-neutral">
              <p className="text-lg text-muted-foreground">
                A US Army Veteran and C-Suite Advisor specializing in AI Solutions Architecture. With over a decade of experience leading high-stakes tech deployments for Fortune 500s and government agencies, I design agentic AI systems that work as hard as your team.
              </p>
            </div>

            <a 
              href="https://ivmf.syracuse.edu/2024/07/01/entrepreneur-spotlight-james-schlauch/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-lg block group"
            >
              <div className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 text-accent flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="font-medium">Featured in Syracuse University's D'Aniello Institute</p>
                  <p className="text-sm text-muted-foreground">Entrepreneur Spotlight: James Schlauch</p>
                </div>
              </div>
            </a>

            <div className="space-y-6">
              <div className="glass glass-hover p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Executive-First AI Design</h3>
                    <p className="text-muted-foreground">Solutions that speak both engineer and CFO – no translation needed.</p>
                  </div>
                </div>
              </div>

              <div className="glass glass-hover p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Compliance-Built Systems</h3>
                    <p className="text-muted-foreground">Government-grade security & governance baked into every workflow.</p>
                  </div>
                </div>
              </div>

              <div className="glass glass-hover p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <LineChart className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Measurable Impact</h3>
                    <p className="text-muted-foreground">Clear ROI tracking for AI investments, focused on revenue, efficiency, and risk reduction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group animate-fade-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="overflow-hidden rounded-2xl glass p-2 relative">
              <img 
                src="/lovable-uploads/d80be15b-18f5-4197-b89a-38254156fc5e.png"
                alt="James Schlauch - AI Solutions Architect"
                className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
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
