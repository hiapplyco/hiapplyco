
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
  
  // Agent node component
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
        className={`relative w-64 rounded-lg glass p-4 transition-all duration-1000 ${positionClass} ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm border border-border/40">
          <Icon size={24} className={colorClasses[color]} />
        </div>
        <div className="pt-2">
          <h3 className="mb-2 font-bold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          
          {services.length > 0 && (
            <div className="border-t border-border/40 pt-2">
              <p className="text-xs text-muted-foreground mb-1">Integrates with:</p>
              <div className="flex flex-wrap gap-1">
                {services.map((service, idx) => (
                  <span 
                    key={idx} 
                    className="bg-secondary text-foreground text-xs px-2 py-1 rounded"
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
  const ConnectionLine = ({ visible, from, to }) => {
    return (
      <div 
        className={`absolute w-px bg-border/60 transition-all duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          height: '60px',
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
      
      <div className="relative w-full max-w-3xl mx-auto pb-40">
        <div className="sticky top-20 z-10 py-4 text-center glass rounded-lg mb-8 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            AI Agent Ecosystem for Subscription-Based SMBs
          </h2>
          <p className="text-muted-foreground">Scroll to explore the agent network</p>
        </div>
        
        {/* Central Hub Section */}
        <section 
          ref={sectionRefs.hub} 
          className="min-h-[60vh] flex flex-col items-center justify-center"
        >
          <AgentNode
            visible={visibleSections.hub}
            icon={Database}
            title="Central Agent Hub"
            description="Command center that coordinates workflows and manages subscription services"
            color="blue"
            services={["All connected services"]}
          />
          <ConnectionLine 
            visible={visibleSections.hub}
            from="100%"
            to="calc(100% + 60px)"
          />
        </section>
        
        {/* Executive Assistant Section */}
        <section 
          ref={sectionRefs.executive} 
          className="min-h-[60vh] flex flex-col items-center justify-start pt-20"
        >
          <AgentNode
            visible={visibleSections.executive}
            icon={Calendar}
            title="Executive Assistant Agents"
            description="Manages calendars, emails, and coordinates meetings"
            color="purple"
            services={["Google Workspace", "Microsoft 365", "Zoom", "Slack"]}
            position="left"
          />
          <ConnectionLine 
            visible={visibleSections.executive}
            from="100%"
            to="calc(100% + 60px)"
          />
        </section>
        
        {/* Customer Service Section */}
        <section 
          ref={sectionRefs.customer} 
          className="min-h-[60vh] flex flex-col items-center justify-start pt-20"
        >
          <AgentNode
            visible={visibleSections.customer}
            icon={MessageSquare}
            title="Customer Service Agents"
            description="Handles ticket routing and automated responses to FAQs"
            color="green"
            services={["Zendesk", "Intercom", "HubSpot", "Salesforce"]}
            position="right"
          />
          <ConnectionLine 
            visible={visibleSections.customer}
            from="100%"
            to="calc(100% + 60px)"
          />
        </section>
        
        {/* Data Analysis Section */}
        <section 
          ref={sectionRefs.data} 
          className="min-h-[60vh] flex flex-col items-center justify-start pt-20"
        >
          <AgentNode
            visible={visibleSections.data}
            icon={PieChart}
            title="Data Analysis Agents"
            description="Generates reports and identifies trends across business data"
            color="yellow"
            services={["QuickBooks", "Tableau", "Power BI", "Google Analytics"]}
            position="left"
          />
          <ConnectionLine 
            visible={visibleSections.data}
            from="100%"
            to="calc(100% + 60px)"
          />
        </section>
        
        {/* Content Creation Section */}
        <section 
          ref={sectionRefs.content} 
          className="min-h-[60vh] flex flex-col items-center justify-start pt-20"
        >
          <AgentNode
            visible={visibleSections.content}
            icon={Users}
            title="Content Creation Agents"
            description="Creates marketing materials and manages social media content"
            color="red"
            services={["Canva", "Buffer", "Hootsuite", "WordPress"]}
            position="right"
          />
        </section>
        
        {/* Subscription Connection Map */}
        <section 
          ref={sectionRefs.connections} 
          className="min-h-[60vh] flex flex-col items-center justify-center"
        >
          <div className={`text-center mb-8 transition-all duration-1000 ${
            visibleSections.connections ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-bold mb-2">Complete Integration Network</h3>
            <p className="text-muted-foreground">How all agents interact with subscription services</p>
          </div>
          
          <div className={`w-full max-w-2xl glass p-6 transition-all duration-1500 transform ${
            visibleSections.connections ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="flex flex-wrap justify-center gap-4">
              {/* This would be a more complex visualization of all connections */}
              {/* For simplicity, showing placeholder boxes */}
              {['CRM', 'Productivity', 'Communication', 'Financial', 'Project'].map((category, idx) => (
                <div key={idx} className="border border-border/40 rounded p-3 w-32 text-center">
                  <div className="font-semibold text-sm">{category}</div>
                  <div className="mt-2 text-xs text-muted-foreground">Subscription Services</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-border/40 pt-4">
              <h4 className="font-semibold mb-2">Cost Structure</h4>
              <div className="bg-secondary/30 p-3 rounded">
                <div className="flex justify-between items-center text-sm">
                  <span>Base</span>
                  <span>Professional</span>
                  <span>Enterprise</span>
                </div>
                <div className="h-2 bg-secondary rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent/50 via-accent to-accent/80 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="text-center py-8 text-muted-foreground text-sm">
          Contact us to learn more about our AI agent solutions for your business
        </div>
      </div>
    </section>
  );
};

export default AgentEcosystemVisualization;
