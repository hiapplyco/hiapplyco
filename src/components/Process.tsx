
import React from 'react';
import { Search, Lightbulb, RefreshCcw, Brain, Server, GitFork } from 'lucide-react';
const Process = () => {
  const stages = [{
    icon: Search,
    title: "Problem Discovery & JTBD Alignment",
    description: "Uncover high-impact, underserved 'jobs' in specific domains using customer interviews and JTBD principles. Ensure you're solving real problems that matter."
  }, {
    icon: Lightbulb,
    title: "Pretotyping & Rapid Validation",
    description: "Test demand and feasibility before building complex AI. Use Fake Agent Demos and Wizard of Oz testing to validate your core value proposition quickly and cheaply."
  }, {
    icon: RefreshCcw,
    title: "Agentic Build-Measure-Learn",
    description: "Iterate your agents with tight feedback loops focused on job completion. Build Minimum Viable Agents (MVAs) and continuously validate with user feedback."
  }, {
    icon: Brain,
    title: "Domain-Driven Agent Design",
    description: "Embed deep domain expertise into your agents. Collaborate with industry experts, train on domain-specific language, and bake in necessary guardrails."
  }, {
    icon: Server,
    title: "Scalable AgentOps",
    description: "Systematize deployment, monitoring, and iteration across multiple agents with an Agent Factory Model. Track performance and optimize for cost and efficiency."
  }, {
    icon: GitFork,
    title: "Pivot or Scale Decision Framework",
    description: "Make informed decisions about iterating, pivoting, or scaling your agents based on confidence thresholds and data-driven insights."
  }];
  return <section id="process" className="section-spacing px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-secondary/30 -skew-y-3 -z-10 transform-gpu"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">Development Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            A systematic approach to building effective AI agents that deliver real value
          </p>
        </div>
        
        {/* Process Diagram Image */}
        <div className="mb-16 max-w-5xl mx-auto bg-slate-50">
          <img src="/lovable-uploads/8165a53c-449a-42c1-9b0c-7483ea924bbf.png" alt="Strategic AI Agent Development Process" className="w-full h-auto rounded-xl shadow-lg animate-fade-up opacity-75" />
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
                <div className="mt-4 text-sm text-accent font-medium">Step {index + 1}</div>
              </div>;
        })}
        </div>
        
        {/* Decorative element */}
        <div className="hidden lg:block absolute -bottom-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>;
};
export default Process;
