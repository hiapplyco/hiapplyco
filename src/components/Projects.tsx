
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <a 
            href="https://www.strength.design" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover-scale"
          >
            <div className="glass p-6 rounded-lg animate-fade-in story-link h-full" style={{ animationDelay: '100ms' }}>
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
          </a>

          {/* Project Card 2 */}
          <a 
            href="https://www.apply.codes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover-scale"
          >
            <div className="glass p-6 rounded-lg animate-fade-in story-link h-full" style={{ animationDelay: '200ms' }}>
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
          </a>

          {/* Project Card 3 */}
          <div className="glass p-6 rounded-lg animate-fade-in story-link" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-3">Multi-Agent Workflow System</h3>
            <p className="text-muted-foreground mb-4">
              Created a sophisticated multi-agent system for automated workflow processing, featuring strategic agent architecture and advanced tooling integration.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in">Workflow Design</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '50ms' }}>Agent Orchestration</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-scale-in" style={{ animationDelay: '100ms' }}>Function Calling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
