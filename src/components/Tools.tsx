
import React from 'react';
import { Code2, Database, Brain, Workflow, Users } from 'lucide-react';

const Tools = () => {
  const expertiseAreas = [
    {
      icon: Workflow,
      title: "Strategic AI Architecture",
      description: "Expert in designing scalable AI agent systems and workflows that solve complex business challenges.",
      skills: ["System Design", "Agent Orchestration", "Solution Architecture", "Workflow Automation"],
      caseStudy: {
        title: "Enterprise Agent Framework",
        description: "Architected a scalable AI agent framework for enterprise clients, implementing advanced function calling and custom tool integration. Leveraged crew.ai for sophisticated agent orchestration.",
        tags: ["System Design", "crew.ai", "LangChain"]
      }
    },
    {
      icon: Code2,
      title: "Advanced Tooling",
      description: "Mastery of function calling and integration of sophisticated tools for powerful AI solutions.",
      skills: ["Function Calling", "API Integration", "Vector Databases", "Data Pipelines"],
      caseStudy: {
        title: "AI Fitness Generator",
        description: "Built a scalable workout generation system for a network of 1000+ gyms. The system creates personalized training programs based on individual fitness levels, goals, and equipment availability.",
        tags: ["Machine Learning", "Scaling", "Personalization"]
      }
    },
    {
      icon: Brain,
      title: "Framework Expertise",
      description: "Deep knowledge of leading AI frameworks for efficient and scalable development.",
      skills: ["crew.ai", "LangChain", "Semantic Kernel", "Custom Frameworks"],
      caseStudy: {
        title: "Multi-Modal Assistant Platform",
        description: "Developed a sophisticated AI assistant platform combining multiple frameworks for enhanced capabilities. Integrated voice, text, and image processing using LangChain and Semantic Kernel.",
        tags: ["Framework Integration", "Multi-Modal", "Enterprise Scale"]
      }
    },
    {
      icon: Database,
      title: "Prompt Engineering",
      description: "Strategic prompt design and LLM optimization for maximum performance and accuracy.",
      skills: ["Chain-of-Thought", "Few-Shot Learning", "Context Management", "Performance Tuning"],
      caseStudy: {
        title: "Intelligent Support System",
        description: "Developed a user-centric AI support system with advanced prompt engineering and real-time data integration. Optimized LLM performance for accurate and contextual responses.",
        tags: ["LLM Optimization", "Vector DB", "API Integration"]
      }
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "User-centric AI agent development focused on delivering practical business value.",
      skills: ["Solution Design", "User Experience", "Integration", "Deployment"],
      caseStudy: {
        title: "Automated Document Processing",
        description: "Created an intelligent document processing system for a legal firm handling millions of pages monthly. Implemented custom OCR and classification models with 99.8% accuracy.",
        tags: ["Document AI", "Automation", "Enterprise Scale"]
      }
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
                
                <div className="space-y-2 mb-6">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>

                {area.caseStudy && (
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <h4 className="text-lg font-semibold mb-3">Case Study: {area.caseStudy.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {area.caseStudy.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.caseStudy.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm animate-scale-in" 
                          style={{ animationDelay: `${300 + tagIndex * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
