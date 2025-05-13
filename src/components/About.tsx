
import React from 'react';
import { Shield, Target, LineChart, ExternalLink, Building, Globe, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-spacing px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-right">
            <h2 className="text-3xl md:text-4xl font-bold">SMB AI Expert with Military Precision</h2>
            
            <div className="prose prose-neutral">
              <p className="text-lg text-muted-foreground">
                A US Army Veteran and dedicated SMB Technology Partner specializing in locally-optimized AI solutions. With over a decade of experience helping small and medium businesses implement AI systems that deliver tangible ROI, I create solutions that understand your community as well as you do.
              </p>
            </div>

            <a 
              href="https://ivmf.syracuse.edu/2024/07/01/entrepreneur-spotlight-james-schlauch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-background to-secondary px-6 py-3 rounded-lg border border-border/50 hover:border-accent/30 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <ExternalLink className="h-5 w-5 text-accent flex-shrink-0 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="font-medium">Featured in Syracuse University's D'Aniello Institute</p>
                <p className="text-sm text-muted-foreground">Entrepreneur Spotlight: James Schlauch</p>
              </div>
            </a>

            <div className="space-y-6">
              <div className="glass glass-hover p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">SMB-First Design Philosophy</h3>
                    <p className="text-muted-foreground">Solutions built specifically for small business realities – budget-conscious, efficient, and immediately impactful.</p>
                  </div>
                </div>
              </div>

              <div className="glass glass-hover p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Hyper-Local Expertise</h3>
                    <p className="text-muted-foreground">AI systems that understand geographic nuances and community-specific patterns that national solutions miss.</p>
                  </div>
                </div>
              </div>

              <div className="glass glass-hover p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">SMB Success Focused</h3>
                    <p className="text-muted-foreground">Proven track record helping over 50 small and medium businesses implement AI that delivers measurable results within local markets.</p>
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
              <p className="text-sm text-muted-foreground">SMB AI Specialist | Local Deployment Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
