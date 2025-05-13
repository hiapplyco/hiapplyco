
import React from 'react';
import { Shield, Target, LineChart, ExternalLink, Building, Globe, Briefcase, Award, CheckCircle, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-spacing px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-right">
            <h2 className="text-3xl md:text-4xl font-bold">Multi-Sector AI Expertise for SMB Success</h2>
            
            <div className="prose prose-neutral">
              <p className="text-lg text-muted-foreground">
                Drawing from diverse experience across federal government, enterprise, and academic institutions, our team specializes in deploying hyper-local AI solutions that deliver measurable success for small and medium businesses. We leverage cutting-edge generational knowledge to navigate current marketing streams and validate MVPs with precision and efficiency.
              </p>
            </div>

            <a 
              href="https://ivmf.syracuse.edu/2024/07/01/innovation-spotlight-ai-localization-experts/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-background to-secondary px-6 py-3 rounded-lg border border-border/50 hover:border-accent/30 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <ExternalLink className="h-5 w-5 text-accent flex-shrink-0 group-hover:rotate-12 transition-transform" />
              <div>
                <p className="font-medium">Featured in Syracuse University's D'Aniello Institute</p>
                <p className="text-sm text-muted-foreground">Innovation Spotlight: SMB AI Localization Experts</p>
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
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">MVP Validation Specialists</h3>
                    <p className="text-muted-foreground">Our team excels at rapidly validating AI concepts for SMBs, ensuring market fit before significant investment.</p>
                  </div>
                </div>
              </div>

              <div className="glass glass-hover p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Cross-Sector Experience</h3>
                    <p className="text-muted-foreground">Our diverse background from federal, enterprise, and academic sectors brings unique insights to SMB AI deployment challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group animate-fade-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="overflow-hidden rounded-2xl glass p-2 relative">
              <img 
                src="/lovable-uploads/d57e18cf-ef2b-43ec-84cc-a8bcb2c88158.png"
                alt="Our team of SMB AI deployment experts"
                className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="glass absolute bottom-4 left-4 right-4 p-4 rounded-lg backdrop-blur-md">
              <h3 className="font-bold text-lg">SMB AI Specialists</h3>
              <p className="text-sm text-muted-foreground">Experts in Hyper-Local AI Deployment & Implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
