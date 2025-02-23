
import React from 'react';
import { Search, Lightbulb, RefreshCcw, Brain, Server, GitFork } from 'lucide-react';

const Process = () => {
  const stages = [
    {
      icon: Search,
      title: "Problem Discovery & JTBD Alignment",
      description: "Uncover high-impact, underserved 'jobs' in specific domains using customer interviews and JTBD principles. Ensure you're solving real problems that matter."
    },
    {
      icon: Lightbulb,
      title: "Pretotyping & Rapid Validation",
      description: "Test demand and feasibility before building complex AI. Use Fake Agent Demos and Wizard of Oz testing to validate your core value proposition quickly and cheaply."
    },
    {
      icon: RefreshCcw,
      title: "Agentic Build-Measure-Learn",
      description: "Iterate your agents with tight feedback loops focused on job completion. Build Minimum Viable Agents (MVAs) and continuously validate with user feedback."
    },
    {
      icon: Brain,
      title: "Domain-Driven Agent Design",
      description: "Embed deep domain expertise into your agents. Collaborate with industry experts, train on domain-specific language, and bake in necessary guardrails."
    },
    {
      icon: Server,
      title: "Scalable AgentOps",
      description: "Systematize deployment, monitoring, and iteration across multiple agents with an Agent Factory Model. Track performance and optimize for cost and efficiency."
    },
    {
      icon: GitFork,
      title: "Pivot or Scale Decision Framework",
      description: "Make informed decisions about iterating, pivoting, or scaling your agents based on confidence thresholds and data-driven insights."
    }
  ];

  return (
    <section id="process" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div 
                key={index}
                className="glass p-8 rounded-lg flex flex-col items-start animate-fade-up hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{stage.title}</h3>
                <p className="text-muted-foreground">{stage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
