
import React, { useState, useEffect, useRef } from 'react';
import { Database, MessageSquare, PieChart, Calendar, Users, ArrowRight, Settings, Connect } from 'lucide-react';
import { Card } from './ui/card';

const AgentEcosystemVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const visualizationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (visualizationRef.current) {
      observer.observe(visualizationRef.current);
    }
    
    return () => {
      if (visualizationRef.current) {
        observer.unobserve(visualizationRef.current);
      }
    };
  }, []);
  
  // Tool node component
  const ToolNode = ({ 
    icon: Icon, 
    title, 
    color, 
    delay = 0,
    services = []
  }) => {
    const colorClasses = {
      'blue': 'text-accent',
      'purple': 'text-purple-500',
      'green': 'text-emerald-500',
      'yellow': 'text-amber-500',
      'red': 'text-rose-500'
    };
    
    return (
      <div 
        className={`transition-all duration-700 delay-[${delay}ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative glass p-3 rounded-lg w-40 h-40 flex flex-col items-center justify-center border border-border/40">
          <Icon size={28} className={colorClasses[color]} />
          <h3 className="font-semibold text-sm mt-2 mb-1 text-center">{title}</h3>
          
          {services.length > 0 && (
            <div className="mt-1">
              <div className="flex flex-wrap justify-center gap-1">
                {services.map((service, idx) => (
                  <span 
                    key={idx} 
                    className="bg-secondary/60 text-[10px] px-1 py-0.5 rounded"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  // Connection line between nodes
  const ConnectionLine = ({ 
    delay = 0, 
    type = 'straight',
    direction = 'right'
  }) => {
    return (
      <div className="flex items-center w-10 h-20 mx-1">
        <div 
          className={`w-full h-[2px] bg-border relative transition-all duration-500 delay-[${delay + 100}ms] ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        >
          <ArrowRight 
            size={12} 
            className={`absolute top-1/2 -translate-y-1/2 ${direction === 'right' ? 'right-0' : 'left-0 rotate-180'} text-muted-foreground`} 
          />
          
          {type === 'data' && (
            <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-accent/70 animate-pulse"></div>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <section id="ecosystem" className="section-spacing px-6 relative overflow-hidden">
      <div className="absolute top-20 left-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto" ref={visualizationRef}>
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            AI Agent Ecosystem for SMB Integration
          </h2>
          <p className="text-sm text-muted-foreground">An interconnected network of specialized AI agents working across your tools</p>
        </div>
        
        {/* Workflow diagram - horizontal layout */}
        <div className="w-full overflow-x-auto pb-6">
          <div className="flex flex-nowrap min-w-[900px] justify-center items-center p-4">
            {/* Hub */}
            <ToolNode
              icon={Database}
              title="Central Hub"
              color="blue"
              services={["Orchestration"]}
              delay={0}
            />
            
            <ConnectionLine delay={150} type="data" />
            
            {/* Executive Assistant */}
            <ToolNode
              icon={Calendar}
              title="Executive Assistant"
              color="purple"
              services={["Calendar", "Email"]}
              delay={200}
            />
            
            <ConnectionLine delay={350} />
            
            {/* Customer Service */}
            <ToolNode
              icon={MessageSquare}
              title="Customer Service"
              color="green"
              services={["Support", "Chat"]}
              delay={400}
            />
            
            <ConnectionLine delay={550} type="data" />
            
            {/* Data Analysis */}
            <ToolNode
              icon={PieChart}
              title="Data Analysis"
              color="yellow"
              services={["Reports", "Insights"]}
              delay={600}
            />
            
            <ConnectionLine delay={750} />
            
            {/* Content Creation */}
            <ToolNode
              icon={Users}
              title="Content Creation"
              color="red"
              services={["Marketing", "Social"]}
              delay={800}
            />
          </div>
          
          {/* Connection lines to SaaS tools below */}
          <div className={`mt-4 glass rounded-lg p-4 transition-all duration-1000 delay-[900ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-sm font-medium mb-3 text-center">Connected SaaS Subscriptions</h3>
            
            <div className="grid grid-cols-5 gap-2">
              {/* Tool connections - 5 columns to match the 5 agent nodes */}
              {[
                ["Google", "Microsoft", "Slack"],
                ["Zoom", "Asana", "Notion"],
                ["Zendesk", "Intercom", "HubSpot"],
                ["QuickBooks", "Tableau", "Google Analytics"],
                ["Canva", "Buffer", "WordPress"]
              ].map((toolGroup, groupIdx) => (
                <div key={groupIdx} className="flex flex-col items-center">
                  <div className="h-6 border-l border-border/50 w-0"></div>
                  <div className="bg-secondary/30 p-2 rounded w-full">
                    {toolGroup.map((tool, idx) => (
                      <div key={idx} className="text-[10px] text-center mb-1 bg-background/50 rounded py-0.5">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Data flow indicators */}
        <div className={`mt-6 text-center transition-all duration-700 delay-[1100ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="inline-flex items-center px-4 py-2 gap-2 text-xs border border-border/40">
            <div className="w-3 h-3 rounded-full bg-accent/70 animate-pulse"></div>
            <span className="text-muted-foreground">Live data flowing through the ecosystem</span>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgentEcosystemVisualization;
