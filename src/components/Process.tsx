
import React from 'react';
import { Search, Lightbulb, RefreshCcw, Brain, Server, GitFork, DollarSign, Target, Clock } from 'lucide-react';
const Process = () => {
  const stages = [{
    icon: Search,
    title: "SMB Problem Discovery",
    description: "Identify high-impact opportunities uniquely relevant to small business contexts. We focus on issues that deliver immediate ROI for local businesses with limited resources."
  }, {
    icon: DollarSign,
    title: "Budget-Conscious Validation",
    description: "Test solutions with minimal investment using cost-effective prototyping. We validate concepts without requiring enterprise-level investment, perfect for SMB budgets."
  }, {
    icon: Clock,
    title: "Rapid SMB Implementation",
    description: "Fast-track deployment with agile cycles optimized for small business timelines. Get operational AI agents in weeks, not months, critical for businesses that need immediate results."
  }, {
    icon: Target,
    title: "Hyper-Local Intelligence",
    description: "Build agents that understand your specific community, neighborhood demographics, and local market dynamics. AI that knows your customers like you do."
  }, {
    icon: Server,
    title: "SMB-Scale Operations",
    description: "Deploy agent systems that work within your existing business operations. No enterprise-level IT department required – designed for small teams with big goals."
  }, {
    icon: Brain,
    title: "Ongoing Local Learning",
    description: "Continuously adapt your AI to evolving local trends, seasonal patterns, and community changes. Systems that grow with your business and neighborhood."
  }];
  return <section id="process" className="section-spacing px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-secondary/30 -skew-y-3 -z-10 transform-gpu"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">SMB AI Development Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            A streamlined approach to building effective AI agents specifically for small and medium businesses
          </p>
        </div>
        
        {/* Process Diagram Image */}
        <div className="mb-16 max-w-5xl mx-auto bg-slate-50">
          <img src="/lovable-uploads/8165a53c-449a-42c1-9b0c-7483ea924bbf.png" alt="Strategic AI Agent Development Process" className="w-full h-auto rounded-xl shadow-lg animate-fade-up opacity-75" />
          <div className="text-center text-sm text-muted-foreground py-2">
            Hyper-localized AI deployment framework optimized for SMB implementation
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => {
          const Icon = stage.icon;
          return <div key={index} className="glass glass-hover p-8 rounded-xl flex flex-col items-start animate-fade-up hover:scale-[1.02] transition-all duration-300" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="mb-5 p-3 rounded-lg bg-accent/10 text-accent">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{stage.title}</h3>
                <p className="text-muted-foreground">{stage.description}</p>
                <div className="mt-4 text-sm text-accent font-medium">Phase {index + 1}</div>
              </div>;
        })}
        </div>
        
        {/* Decorative element */}
        <div className="hidden lg:block absolute -bottom-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>;
};
export default Process;
