
import React from 'react';
import { ExternalLink, ArrowUpRight, Heart, Dumbbell, UserRound, Swords, Crosshair } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      name: "harmony.works",
      description: "Transforming life coaching through AI-powered personalized guidance systems and adaptive mentorship algorithms that deliver tailored growth experiences",
      url: "https://www.harmony.works",
      icon: Heart,
      iconColor: "text-pink-500"
    },
    {
      name: "strength.design",
      description: "Revolutionary AI fitness platform leveraging machine learning to create precision-engineered workout programs tailored to individual goals and physiological markers",
      url: "https://www.strength.design",
      icon: Dumbbell,
      iconColor: "text-red-500"
    },
    {
      name: "apply.codes",
      description: "Next-generation recruitment platform powered by intelligent AI agents that revolutionize talent acquisition through automated screening and personalized candidate matching",
      url: "https://www.apply.codes",
      icon: UserRound,
      iconColor: "text-blue-500"
    },
    {
      name: "JiuJitsu Analyzer",
      description: "Advanced martial arts technique analysis platform utilizing Gemini 2.0 Flash AI to provide real-time feedback and personalized improvement recommendations for practitioners",
      url: "https://540studio.streamlit.app/",
      icon: Swords,
      iconColor: "text-cyan-500"
    },
    {
      name: "CrossFit Analyzer",
      description: "Comprehensive movement assessment tool powered by Gemini Flash 2.0 AI that analyzes CrossFit techniques to optimize performance and reduce injury risk through detailed feedback",
      url: "https://cfvideoanalysis.streamlit.app/",
      icon: Crosshair,
      iconColor: "text-amber-600"
    }
  ];
  
  return (
    <section id="projects" className="section-spacing px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Transforming businesses with intelligent AI agent solutions
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
                <p className="text-sm text-muted-foreground flex-grow">
                  {project.description}
                </p>
                <a 
                  href={project.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 text-accent text-sm flex items-center font-medium group self-start"
                >
                  Visit website 
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
