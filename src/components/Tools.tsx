
import React from 'react';
import { Code2, Database, Brain, Workflow, Users, Store, Building, Globe, Map, Compass } from 'lucide-react';

const Tools = () => {
  const expertiseAreas = [
    {
      icon: Store,
      title: "SMB-Focused AI Strategies",
      description: "Specialized AI implementations tailored to small and medium business needs, budgets, and local markets.",
      skills: ["Cost-Optimized Solutions", "SMB Market Analysis", "Local Advantage Design", "ROI-Centric Planning"],
      caseStudy: {
        title: "Local Bakery Chain Transformation",
        description: "Developed a hyperlocal AI system for a 5-store bakery chain that analyzes neighborhood preferences, resulting in 27% reduction in waste and 41% increase in return customers through personalized marketing.",
        tags: ["SMB Success", "Hyper-Local", "Cost Reduction"]
      }
    },
    {
      icon: Map,
      title: "Hyper-Local Deployment",
      description: "AI systems that understand and adapt to local markets, regional preferences, and neighborhood dynamics.",
      skills: ["Geo-Specific Training", "Local Data Integration", "Cultural Context Adaptation", "Regional Preference Analysis"],
      caseStudy: {
        title: "Multi-Region Retail Optimization",
        description: "Built a hyper-local inventory system for a regional retail chain that adjusts stock based on neighborhood demographics, reducing overstock by 32% while increasing local relevance ratings by 47%.",
        tags: ["Local Adaptation", "Regional AI", "SMB Scale"]
      }
    },
    {
      icon: Workflow,
      title: "SMB Agent Architecture",
      description: "Right-sized agent systems specifically designed for small and medium businesses with budget-conscious implementation.",
      skills: ["SMB Workflow Design", "Cost-Efficient Architecture", "Scalable SMB Systems", "Owner-Friendly Interfaces"],
      caseStudy: {
        title: "Small Business Agent Network",
        description: "Created an interconnected AI agent ecosystem for a local business collective, enabling 12 small businesses to share customer insights while maintaining privacy and boosting cross-referral revenue by 34%.",
        tags: ["SMB Ecosystem", "Localized AI", "Collective Intelligence"]
      }
    },
    {
      icon: Compass,
      title: "Local Market Intelligence",
      description: "AI systems that monitor and analyze hyperlocal trends, competition, and customer behavior specific to your location.",
      skills: ["Neighborhood Analysis", "Local Competitor Tracking", "Community Trend Detection", "Regional Customer Insight"],
      caseStudy: {
        title: "Localized Customer Intelligence",
        description: "Developed a community-aware customer analysis tool for a small service business that identified hyperlocal service gaps, leading to three new revenue streams tailored to neighborhood needs.",
        tags: ["SMB Growth", "Community Analysis", "Revenue Creation"]
      }
    },
    {
      icon: Building,
      title: "SMB-Scale Operations",
      description: "Right-sized implementations that deliver enterprise-level AI capabilities at SMB budgets and operational scale.",
      skills: ["Budget Optimization", "Operational Integration", "Simplified Management", "SMB Team Training"],
      caseStudy: {
        title: "Streamlined Operations for Local Chain",
        description: "Implemented a cost-effective AI operations suite for a 7-location service business, automating 76% of back-office tasks while operating within SMB budget constraints.",
        tags: ["Operational AI", "Cost-Effective", "SMB Scale"]
      }
    }
  ];

  return (
    <section id="tools" className="section-spacing px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">SMB AI Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Specialized knowledge and frameworks for building intelligent AI systems specifically for small and medium businesses
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
