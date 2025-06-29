import { ArrowRight, Users, Zap, Brain, ChartBar } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const AgenticRecruitmentPlatform = () => {
  return (
    <section id="agentic-platform" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="scale" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Introducing <span className="text-accent">apply.codes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Agentic Recruitment Platform powered by AI agents that understand your local talent market
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollAnimationWrapper animation="slide-right" delay={0}>
              <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hyper-Local Talent Matching</h3>
                  <p className="text-muted-foreground">
                    Find candidates who understand your neighborhood, your customers, and your community values
                  </p>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right" delay={100}>
              <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2-4 Week Implementation</h3>
                  <p className="text-muted-foreground">
                    From setup to your first hire in under a month. No lengthy enterprise deployments
                  </p>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right" delay={200}>
              <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Screening</h3>
                  <p className="text-muted-foreground">
                    Our agents handle initial screening, saving you 80% of recruitment time
                  </p>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right" delay={300}>
              <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <ChartBar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Measurable ROI</h3>
                  <p className="text-muted-foreground">
                    Average 65% reduction in time-to-hire and 40% improvement in retention rates
                  </p>
                </div>
              </div>
              </div>
            </ScrollAnimationWrapper>
          </div>

          <ScrollAnimationWrapper animation="slide-left" delay={400} className="relative">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of SMBs already using apply.codes to build stronger local teams with AI-powered recruitment
              </p>
              <div className="space-y-4">
                <a 
                  href="https://www.apply.codes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground px-6 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                >
                  Explore apply.codes
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.apply.codes/demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-secondary text-foreground border border-border/50 px-6 py-4 rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300"
                >
                  Watch 3-Minute Demo
                </a>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse animation-delay-200" />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default AgenticRecruitmentPlatform;