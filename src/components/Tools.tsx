
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
    <section id="tools" className="px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Our expertise in building AI solutions specifically for small and medium businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index} 
                className="group bg-background/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl hover:border-accent/50 transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {area.description}
                </p>
                
                <div className="space-y-1.5">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent/60"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
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
