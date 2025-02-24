import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      name: "harmony.works",
      description: "Transforming life coaching through AI-powered personalized guidance systems and adaptive mentorship algorithms",
      url: "https://www.harmony.works",
      style: {
        bg: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)",
        border: "#FFD700",
        text: "text-gray-800"
      }
    },
    {
      name: "strength.design",
      description: "Revolutionary AI fitness platform leveraging machine learning to create precision-engineered workout programs tailored to individual goals",
      url: "https://www.strength.design",
      style: {
        bg: "linear-gradient(135deg, #ea384c, #222)",
        border: "#FEF7CD",
        text: "text-white"
      }
    },
    {
      name: "apply.codes",
      description: "Next-generation recruitment platform powered by intelligent AI agents that revolutionize talent acquisition through automated screening and matching",
      url: "https://www.apply.codes",
      style: {
        bg: "linear-gradient(135deg, #F2FCE2, #FFDEE2, #E5DEFF)",
        border: "#E5DEFF",
        text: "text-gray-800"
      }
    }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Music Education",
      description: "Developed an innovative music education platform integrating AI for personalized learning experiences. Features adaptive curriculum and real-time feedback systems.",
      tags: ["AI Integration", "Music Tech", "EdTech"]
    },
    {
      title: "Enterprise Agent Framework",
      description: "Architected a scalable AI agent framework for enterprise clients, implementing advanced function calling and custom tool integration. Leveraged crew.ai for sophisticated agent orchestration.",
      tags: ["System Design", "crew.ai", "LangChain"]
    },
    {
      title: "Intelligent Support System",
      description: "Developed a user-centric AI support system with advanced prompt engineering and real-time data integration. Optimized LLM performance for accurate and contextual responses.",
      tags: ["LLM Optimization", "Vector DB", "API Integration"]
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
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
                  className="w-full h-36 mb-6 rounded-lg flex items-center justify-center transition-transform group-hover:scale-[1.03] relative overflow-hidden"
                  style={{ 
                    background: project.style.bg,
                    border: `2px solid ${project.style.border}`
                  }}
                >
                  <span className={`text-xl font-semibold ${project.style.text} flex items-center gap-2`}>
                    {project.name}
                    <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                  </span>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-shimmer bg-200% animate-shimmer opacity-30"></div>
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
          ))}
        </div>

        {/* Project Case Studies */}
        <h3 className="text-2xl font-bold mb-8 text-center">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <div 
              key={index} 
              className="glass glass-hover p-6 rounded-xl animate-fade-up h-full flex flex-col justify-between"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
