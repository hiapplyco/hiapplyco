
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-semibold mb-3">AI Agent Framework</h3>
            <p className="text-muted-foreground mb-4">
              Built a scalable framework for deploying AI agents with advanced reasoning capabilities.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">LangChain</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">crew.ai</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-3">Function Calling API</h3>
            <p className="text-muted-foreground mb-4">
              Developed an API for seamless integration of AI function calling capabilities.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">OpenAI</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">FastAPI</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-3">Agent Monitoring Dashboard</h3>
            <p className="text-muted-foreground mb-4">
              Created a real-time dashboard for monitoring AI agent performance and metrics.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">WebSocket</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Grafana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
