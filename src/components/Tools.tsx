import React from 'react';
import { Code2, Database, Brain, Workflow, Users } from 'lucide-react';

const Tools = () => {
  const expertiseAreas = [
    {
      icon: Workflow,
      title: "Strategic AI Architecture",
      description: "Expert in designing scalable AI agent systems and workflows that solve complex business challenges.",
      skills: ["System Design", "Agent Orchestration", "Solution Architecture", "Workflow Automation"]
    },
    {
      icon: Code2,
      title: "Advanced Tooling",
      description: "Mastery of function calling and integration of sophisticated tools for powerful AI solutions.",
      skills: ["Function Calling", "API Integration", "Vector Databases", "Data Pipelines"]
    },
    {
      icon: Brain,
      title: "Framework Expertise",
      description: "Deep knowledge of leading AI frameworks for efficient and scalable development.",
      skills: ["crew.ai", "LangChain", "Semantic Kernel", "Custom Frameworks"]
    },
    {
      icon: Database,
      title: "Prompt Engineering",
      description: "Strategic prompt design and LLM optimization for maximum performance and accuracy.",
      skills: ["Chain-of-Thought", "Few-Shot Learning", "Context Management", "Performance Tuning"]
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "User-centric AI agent development focused on delivering practical business value.",
      skills: ["Solution Design", "User Experience", "Integration", "Deployment"]
    }
  ];

  return (
    <section id="tools" className="section-spacing px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">Core Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Specialized knowledge and capabilities for building intelligent AI systems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index} 
                className="glass glass-hover p-8 rounded-xl animate-fade-up hover:scale-[1.02] transition-all duration-300 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Visual accent element */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent/20 rounded-t-xl overflow-hidden">
                  <div 
                    className="h-full bg-accent" 
                    style={{ width: `${30 + index * 15}%` }}
                  ></div>
                </div>
                
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {area.description}
                </p>
                
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
