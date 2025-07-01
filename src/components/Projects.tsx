import React from 'react';
import { ExternalLink, ArrowUpRight, Film, Palette, Code, Heart, Music, Globe, Scale } from 'lucide-react';
import { Badge } from './ui/badge';

const Projects = () => {
  const featuredProjects = [
    {
      name: "The Studio & BEAT",
      description: "AI-powered invention development platform and Black Box Theatre system. Transform ideas into fully realized inventions with multimodal AI visualization and expert analysis",
      url: "https://www.muchado.productions/",
      icon: Film,
      iconColor: "text-purple-500",
      tags: ["AI Innovation", "Creative Tech"],
      metrics: "From idea to 3D model in minutes",
      caseStudy: "Coming soon: How inventors accelerated product development with AI-powered visualization",
      imageUrl: null
    },
    {
      name: "Strength Design",
      description: "Intelligent workout programming platform combining exercise science with intuitive software. Creates personalized strength training programs using data-driven algorithms",
      url: "https://www.strength.design/",
      icon: Palette,
      iconColor: "text-pink-500",
      tags: ["Fitness AI", "Training Tech"],
      metrics: "Science-backed program optimization",
      caseStudy: "Coming soon: How gyms increased member retention with personalized AI programming",
      imageUrl: null
    },
    {
      name: "Apply Codes",
      description: "Comprehensive AI platform transforming how businesses find domain experts and build intelligent solutions with market intelligence and automated matching",
      url: "https://www.apply.codes/",
      icon: Code,
      iconColor: "text-blue-500",
      tags: ["AI Platform", "Expert Matching"],
      metrics: "73% faster expert deployment",
      caseStudy: "Coming soon: Tech startup reduces talent acquisition costs by 80% while accessing top domain experts",
      imageUrl: null
    },
    {
      name: "Empath Care",
      description: "Revolutionary caregiving platform connecting hearts and empowering care. Features AI-driven care needs assessment, smart caregiver matching, and family coordination tools",
      url: "https://empath.care/",
      icon: Heart,
      iconColor: "text-red-500",
      tags: ["Healthcare AI", "Care Coordination"],
      metrics: "96% care satisfaction rating",
      caseStudy: "Coming soon: How families improved care outcomes with intelligent matching and monitoring",
      imageUrl: null
    },
    {
      name: "Harmony Works",
      description: "AI Coaching Platform for coaches and clients to maintain healthy and productive relationships. Enables life coaches to deliver personalized guidance with AI-enhanced insights",
      url: "https://www.harmony.works/",
      icon: Music,
      iconColor: "text-green-500",
      tags: ["AI Coaching", "Life Coach Tech"],
      metrics: "85% improved client outcomes",
      caseStudy: "Coming soon: Life coaches double their impact with AI-powered relationship insights",
      imageUrl: null
    },
    {
      name: "Adventure Clubs",
      description: "YMCA-powered community platform optimizing youth programs and social impact initiatives. Connects local organizations with resources for maximum community reach",
      url: "https://hoya-hoya.org/",
      icon: Globe,
      iconColor: "text-orange-500",
      tags: ["Youth Programs", "Community AI"],
      metrics: "3x community reach growth",
      caseStudy: "Coming soon: YMCA triples youth program participation with AI-driven resource optimization",
      imageUrl: null
    },
    {
      name: "VA Disability Lawyer",
      description: "AI-driven learning and development platform for lawyers and legal firms. Learn from experts in the Veterans Affairs legal community with personalized training paths",
      url: "https://v0-amanda-mineer.vercel.app/",
      icon: Scale,
      iconColor: "text-indigo-500",
      tags: ["Legal Tech", "AI Education"],
      metrics: "90% bar exam improvement",
      caseStudy: "Coming soon: VA law firms accelerate attorney training with AI-powered legal education",
      imageUrl: null
    }
  ];
  
  return (
    <section id="projects" className="section-spacing px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-up">Our Product Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            A comprehensive suite of AI-powered solutions and expert talent platforms designed for businesses across every industry vertical
          </p>
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={`${project.name} preview`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Icon className={`w-12 h-12 ${project.iconColor} transition-transform group-hover:scale-110`} />
                        <span className="text-xl font-semibold text-foreground flex items-center gap-2">
                          {project.name}
                          <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                        </span>
                      </div>
                    )}
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
            className="inline-flex items-center gap-2 px-6 py-3 btn-gradient-border rounded-lg font-medium"
          >
            <span>Discuss Your Project Needs</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;