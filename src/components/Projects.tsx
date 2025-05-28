import React from 'react';
import { ExternalLink, ArrowUpRight, Heart, Dumbbell, UserRound, Swords, Crosshair, Store, Building, Globe } from 'lucide-react';
import { Badge } from './ui/badge';

const Projects = () => {
  const featuredProjects = [
    {
      name: "harmony.works",
      description: "SMB coaching platform providing AI mentorship for local business owners, with customized guidance tailored to specific local market conditions",
      url: "https://www.harmony.works",
      icon: Heart,
      iconColor: "text-pink-500",
      tags: ["Small Business", "Locally Deployed"],
      metrics: "87% owner satisfaction rate"
    },
    {
      name: "strength.design",
      description: "AI fitness platform for local gyms and small fitness centers, with location-specific workout programs customized to regional preferences",
      url: "https://www.strength.design",
      icon: Dumbbell,
      iconColor: "text-red-500",
      tags: ["Local Business", "Regional Adaptation"],
      metrics: "43% member retention boost"
    },
    {
      name: "apply.codes",
      description: "Recruitment platform helping SMBs find local talent through AI matching based on neighborhood proximity and community connection",
      url: "https://www.apply.codes",
      icon: Building,
      iconColor: "text-amber-600",
      tags: ["SMB Hiring", "Hyper-Local"],
      metrics: "61% faster local hiring"
    }
  ];
  
  return (
    <section id="projects" className="section-spacing px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">SMB-Focused Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            AI agents designed specifically for small and medium businesses with hyper-local deployment
          </p>
        </div>
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index} 
                className="glass glass-hover p-6 rounded-xl animate-fade-up h-full flex flex-col" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group mb-6"
                >
                  <div 
                    className="w-full h-36 mb-6 rounded-lg flex items-center justify-center transition-transform group-hover:scale-[1.03] relative overflow-hidden bg-secondary/30 border-2 border-secondary"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon className={`w-12 h-12 ${project.iconColor}`} />
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
                
                <p className="text-sm text-muted-foreground flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-4 mb-4 py-2 px-3 bg-secondary/20 rounded-md text-sm font-medium text-accent">
                  {project.metrics}
                </div>
                
                <a 
                  href={project.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent text-sm flex items-center font-medium group self-start"
                >
                  View case study
                  <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
