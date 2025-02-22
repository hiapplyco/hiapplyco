
import React from 'react';

const Tools = () => {
  return (
    <section id="tools" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tools & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & ML */}
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-semibold mb-4">AI & ML</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>LangChain</li>
              <li>OpenAI API</li>
              <li>crew.ai</li>
              <li>TensorFlow</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Python</li>
              <li>FastAPI</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="glass p-6 rounded-lg animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
