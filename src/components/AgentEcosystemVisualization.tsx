
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Database, MessageSquare, PieChart, Calendar, Users } from 'lucide-react';

const AgentEcosystemVisualization = () => {
  // Track which sections are visible
  const [visibleSections, setVisibleSections] = useState({
    hub: false,
    executive: false,
    customer: false,
    data: false,
    content: false,
    connections: false
  });
  
  // References to section elements
  const sectionRefs = {
    hub: useRef(null),
    executive: useRef(null),
    customer: useRef(null),
    data: useRef(null),
    content: useRef(null),
    connections: useRef(null)
  };
  
  // Set up intersection observers for each section
  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.3 } // Trigger when 30% visible
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return { key, observer };
    });
    
    // Cleanup observers
    return () => {
      observers.forEach(({ key, observer }) => {
        if (sectionRefs[key].current) {
          observer.unobserve(sectionRefs[key].current);
        }
      });
    };
  }, []);
  
  // Agent node component - more compact design
  const AgentNode = ({ 
    visible, 
    icon: Icon, 
    title, 
    description, 
    color, 
    services = [],
    position = 'center'
  }) => {
    const positionClass = {
      'left': 'justify-start mr-auto',
      'right': 'justify-end ml-auto',
      'center': 'mx-auto'
    }[position];
    
    const colorClasses = {
      'blue': 'text-accent',
      'purple': 'text-purple-500',
      'green': 'text-emerald-500',
      'yellow': 'text-amber-500',
      'red': 'text-rose-500'
    };
    
    return (
      <div 
        className={`relative w-64 rounded-lg glass p-4 transition-all duration-700 ${positionClass} ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-sm border border-border/40">
          <Icon size={20} className={colorClasses[color]} />
        </div>
        <div className="pt-1 pl-2">
          <h3 className="mb-1 font-bold text-base">{title}</h3>
          <p className="text-xs text-muted-foreground mb-2">{description}</p>
          
          {services.length > 0 && (
            <div className="border-t border-border/40 pt-1.5">
              <div className="flex flex-wrap gap-1">
                {services.map((service, idx) => (
                  <span 
                    key={idx} 
                    className="bg-secondary/60 text-foreground text-[10px] px-1.5 py-0.5 rounded"
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
  
  // Connection line between nodes - thinner and more subtle
  const ConnectionLine = ({ visible, from, to }) => {
    return (
      <div 
        className={`absolute w-[1px] bg-border/60 transition-all duration-700 ${
          visible ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          height: '40px',
          left: '50%',
          top: from,
          transformOrigin: 'top',
          transform: visible ? 'scaleY(1)' : 'scaleY(0)'
        }}
      />
    );
  };
  
  return (
    <section id="ecosystem" className="section-spacing px-6 relative overflow-hidden">
      <div className="absolute top-20 left-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="sticky top-20 z-10 py-3 text-center glass rounded-lg mb-6 animate-fade-up">
          <h2 className="text-xl md:text-2xl font-bold mb-1">
            AI Agent Ecosystem for SMBs
          </h2>
          <p className="text-xs text-muted-foreground">Scroll to explore the agent network</p>
        </div>
        
        {/* Central Hub Section - more compact */}
        <section 
          ref={sectionRefs.hub} 
          className="min-h-[30vh] flex flex-col items-center justify-center"
        >
          <AgentNode
            visible={visibleSections.hub}
            icon={Database}
            title="Central Agent Hub"
            description="Command center coordinating workflows across subscription services"
            color="blue"
            services={["All connected services"]}
          />
          <ConnectionLine 
            visible={visibleSections.hub}
            from="100%"
            to="calc(100% + 40px)"
          />
        </section>
        
        {/* Executive Assistant Section - more compact */}
        <section 
          ref={sectionRefs.executive} 
          className="min-h-[25vh] flex flex-col items-center justify-start pt-10"
        >
          <AgentNode
            visible={visibleSections.executive}
            icon={Calendar}
            title="Executive Assistant Agents"
            description="Manages calendars, emails, and coordinates meetings"
            color="purple"
            services={["Google Workspace", "Microsoft 365", "Slack"]}
            position="left"
          />
          <ConnectionLine 
            visible={visibleSections.executive}
            from="100%"
            to="calc(100% + 40px)"
          />
        </section>
        
        {/* Customer Service Section - more compact */}
        <section 
          ref={sectionRefs.customer} 
          className="min-h-[25vh] flex flex-col items-center justify-start pt-10"
        >
          <AgentNode
            visible={visibleSections.customer}
            icon={MessageSquare}
            title="Customer Service Agents"
            description="Handles ticket routing and automated responses"
            color="green"
            services={["Zendesk", "Intercom", "HubSpot"]}
            position="right"
          />
          <ConnectionLine 
            visible={visibleSections.customer}
            from="100%"
            to="calc(100% + 40px)"
          />
        </section>
        
        {/* Data Analysis Section - more compact */}
        <section 
          ref={sectionRefs.data} 
          className="min-h-[25vh] flex flex-col items-center justify-start pt-10"
        >
          <AgentNode
            visible={visibleSections.data}
            icon={PieChart}
            title="Data Analysis Agents"
            description="Generates reports and identifies key trends"
            color="yellow"
            services={["QuickBooks", "Tableau", "Google Analytics"]}
            position="left"
          />
          <ConnectionLine 
            visible={visibleSections.data}
            from="100%"
            to="calc(100% + 40px)"
          />
        </section>
        
        {/* Content Creation Section - more compact */}
        <section 
          ref={sectionRefs.content} 
          className="min-h-[25vh] flex flex-col items-center justify-start pt-10"
        >
          <AgentNode
            visible={visibleSections.content}
            icon={Users}
            title="Content Creation Agents"
            description="Creates marketing materials and social content"
            color="red"
            services={["Canva", "Buffer", "WordPress"]}
            position="right"
          />
          <ConnectionLine 
            visible={visibleSections.connections}
            from="100%"
            to="calc(100% + 40px)"
          />
        </section>
        
        {/* Subscription Connection Map - more compact */}
        <section 
          ref={sectionRefs.connections} 
          className="min-h-[30vh] flex flex-col items-center justify-center pt-10"
        >
          <div className={`text-center mb-4 transition-all duration-700 ${
            visibleSections.connections ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-lg font-bold mb-1">Integration Network</h3>
            <p className="text-xs text-muted-foreground">How agents integrate with subscriptions</p>
          </div>
          
          <div className={`w-full max-w-lg glass p-4 transition-all duration-1000 ${
            visibleSections.connections ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="flex flex-wrap justify-center gap-2">
              {['CRM', 'Productivity', 'Communication', 'Financial', 'Project'].map((category, idx) => (
                <div key={idx} className="border border-border/40 rounded p-2 w-24 text-center">
                  <div className="font-medium text-xs">{category}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground">Services</div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 border-t border-border/40 pt-3">
              <h4 className="font-medium text-sm mb-2">Cost Structure</h4>
              <div className="bg-secondary/30 p-2 rounded">
                <div className="flex justify-between items-center text-xs">
                  <span>Basic</span>
                  <span>Pro</span>
                  <span>Enterprise</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent/50 via-accent to-accent/80 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AgentEcosystemVisualization;
