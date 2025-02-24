
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Featured Projects</h2>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Harmony.works Card */}
          <div className="glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col h-full">
              <div 
                className="w-full h-32 mb-6 rounded-lg flex items-center justify-center transition-transform hover:scale-105"
                style={{ 
                  background: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
                  border: '2px solid #FFD700'
                }}
              >
                <a 
                  href="https://www.harmony.works" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-800"
                >
                  harmony.works
                </a>
              </div>
              <p className="text-sm text-muted-foreground flex-grow">
                Transforming life coaching through AI-powered personalized guidance systems and adaptive mentorship algorithms
              </p>
            </div>
          </div>

          {/* Strength.design Card */}
          <div className="glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col h-full">
              <div 
                className="w-full h-32 mb-6 rounded-lg flex items-center justify-center transition-transform hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #ea384c, #222)',
                  border: '2px solid #FEF7CD'
                }}
              >
                <a 
                  href="https://www.strength.design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-white"
                >
                  strength.design
                </a>
              </div>
              <p className="text-sm text-muted-foreground flex-grow">
                Revolutionary AI fitness platform leveraging machine learning to create precision-engineered workout programs tailored to individual goals
              </p>
            </div>
          </div>

          {/* Apply.codes Card */}
          <div className="glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex flex-col h-full">
              <div 
                className="w-full h-32 mb-6 rounded-lg flex items-center justify-center transition-transform hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #F2FCE2, #FFDEE2, #E5DEFF)',
                  border: '2px solid #E5DEFF'
                }}
              >
                <a 
                  href="https://www.apply.codes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-800"
                >
                  apply.codes
                </a>
              </div>
              <p className="text-sm text-muted-foreground flex-grow">
                Next-generation recruitment platform powered by intelligent AI agents that revolutionize talent acquisition through automated screening and matching
              </p>
            </div>
          </div>
        </div>

        {/* Project Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 - Harmony.Works */}
          <div className="glass p-6 rounded-lg animate-fade-in story-link h-full" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Music Education</h3>
            <p className="text-muted-foreground mb-4">
              Developed an innovative music education platform integrating AI for personalized learning experiences. Features adaptive curriculum and real-time feedback systems.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in">AI Integration</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '50ms' }}>Music Tech</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '100ms' }}>EdTech</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="glass p-6 rounded-lg animate-fade-in story-link h-full" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-3">Enterprise Agent Framework</h3>
            <p className="text-muted-foreground mb-4">
              Architected a scalable AI agent framework for enterprise clients, implementing advanced function calling and custom tool integration. Leveraged crew.ai for sophisticated agent orchestration.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in">System Design</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '50ms' }}>crew.ai</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '100ms' }}>LangChain</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="glass p-6 rounded-lg animate-fade-in story-link h-full" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-semibold mb-3">Intelligent Support System</h3>
            <p className="text-muted-foreground mb-4">
              Developed a user-centric AI support system with advanced prompt engineering and real-time data integration. Optimized LLM performance for accurate and contextual responses.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in">LLM Optimization</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '50ms' }}>Vector DB</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '100ms' }}>API Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
