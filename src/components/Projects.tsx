import React from 'react';
import { ExternalLink, ArrowUpRight, Film, Palette, Code, Heart, Music, Globe } from 'lucide-react';
import { Badge } from './ui/badge';

const Projects = () => {
  const featuredProjects = [
    {
      name: "Muchado Productions",
      description: "AI-powered creative production studio specializing in multimedia content creation and automated video production workflows for SMBs",
      url: "https://www.muchado.productions/",
      icon: Film,
      iconColor: "text-purple-500",
      tags: ["AI Video", "Content Creation"],
      metrics: "75% faster production time",
      caseStudy: "Coming soon: How a local restaurant chain increased engagement by 400% with AI-generated video content"
    },
    {
      name: "Strength Design",
      description: "AI-enhanced design system and branding platform that creates cohesive visual identities optimized for local market appeal",
      url: "https://www.strength.design/",
      icon: Palette,
      iconColor: "text-pink-500",
      tags: ["AI Design", "Branding"],
      metrics: "10x more design iterations",
      caseStudy: "Coming soon: Regional retail chain achieves brand consistency across 15 locations"
    },
    {
      name: "Apply Codes",
      description: "Comprehensive AI recruitment platform transforming how SMBs find and hire talent with hyper-local market intelligence",
      url: "https://www.apply.codes/",
      icon: Code,
      iconColor: "text-blue-500",
      tags: ["AI Recruitment", "Local Hiring"],
      metrics: "73% faster hiring process",
      caseStudy: "Coming soon: Tech startup reduces hiring costs by 80% while improving candidate quality"
    },
    {
      name: "Empath Care",
      description: "Advanced healthcare AI platform providing empathetic patient communication and intelligent care coordination for local clinics",
      url: "https://empath.care/",
      icon: Heart,
      iconColor: "text-red-500",
      tags: ["Healthcare AI", "Patient Care"],
      metrics: "96% patient satisfaction",
      caseStudy: "Coming soon: Local clinic network improves patient outcomes with AI-powered care coordination"
    },
    {
      name: "Harmony Works",
      description: "Intelligent workflow orchestration platform that adapts to your business processes and scales with local market demands",
      url: "https://www.harmony.works/",
      icon: Music,
      iconColor: "text-green-500",
      tags: ["Workflow AI", "Automation"],
      metrics: "67% efficiency gain",
      caseStudy: "Coming soon: Multi-location service business streamlines operations across all branches"
    },
    {
      name: "Hoya Hoya",
      description: "Community-focused AI platform connecting local organizations with resources and optimizing social impact initiatives",
      url: "https://hoya-hoya.org/",
      icon: Globe,
      iconColor: "text-orange-500",
      tags: ["Social Impact", "Community AI"],
      metrics: "3x community reach growth",
      caseStudy: "Coming soon: Local non-profit triples its community impact with AI-driven resource optimization"
    }
  ];
  
  return (
    <section id="projects" className="section-spacing px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">Our Product Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            A comprehensive suite of AI-powered solutions designed specifically for small and medium businesses
          </p>
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index} 
                className="group bg-background/50 backdrop-blur-sm border-2 border-border/50 p-6 rounded-xl hover:border-accent/50 transition-all duration-200 animate-fade-up h-full flex flex-col" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group mb-6"
                >
                  <div className="w-full h-36 mb-6 rounded-lg flex items-center justify-center transition-transform group-hover:scale-[1.03] relative overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                    <div className="flex flex-col items-center gap-2">
                      <Icon className={`w-12 h-12 ${project.iconColor} transition-transform group-hover:scale-110`} />
                      <span className="text-xl font-semibold text-foreground flex items-center gap-2">
                        {project.name}
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                      </span>
                    </div>
                  </div>
                </a>
                
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground flex-grow mb-4">
                  {project.description}
                </p>
                
                <div className="mt-auto space-y-3">
                  <div className="py-2 px-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-md text-sm font-medium text-accent">
                    {project.metrics}
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-md border border-border/50">
                    <p className="text-xs text-muted-foreground italic">
                      <span className="font-semibold text-foreground">Case Study:</span> {project.caseStudy}
                    </p>
                  </div>
                  
                  <a 
                    href={project.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium group/link hover:text-accent/80 transition-colors"
                  >
                    Visit Project
                    <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Each solution is tailored for SMB needs with local market optimization
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 gradient-purple-green text-white rounded-lg font-medium hover:bg-foreground hover:text-background transition-all duration-200"
          >
            Discuss Your Project Needs
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;