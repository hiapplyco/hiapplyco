
import React from 'react';
import { Code2, Database, Brain, Workflow, Users } from 'lucide-react';

const Tools = () => {
  return (
    <section id="tools" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Strategic AI Architecture */}
          <div className="glass p-8 rounded-lg animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="mb-4">
              <Workflow className="w-8 h-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Strategic AI Architecture</h3>
            <p className="text-muted-foreground mb-4">
              Expert in designing scalable AI agent systems and workflows that solve complex business challenges.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>System Design</li>
              <li>Agent Orchestration</li>
              <li>Solution Architecture</li>
              <li>Workflow Automation</li>
            </ul>
          </div>

          {/* Advanced Tooling */}
          <div className="glass p-8 rounded-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="mb-4">
              <Code2 className="w-8 h-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Advanced Tooling</h3>
            <p className="text-muted-foreground mb-4">
              Mastery of function calling and integration of sophisticated tools for powerful AI solutions.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Function Calling</li>
              <li>API Integration</li>
              <li>Vector Databases</li>
              <li>Data Pipelines</li>
            </ul>
          </div>

          {/* Framework Expertise */}
          <div className="glass p-8 rounded-lg animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="mb-4">
              <Brain className="w-8 h-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Framework Expertise</h3>
            <p className="text-muted-foreground mb-4">
              Deep knowledge of leading AI frameworks for efficient and scalable development.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>crew.ai</li>
              <li>LangChain</li>
              <li>Semantic Kernel</li>
              <li>Custom Frameworks</li>
            </ul>
          </div>

          {/* Prompt Engineering */}
          <div className="glass p-8 rounded-lg animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="mb-4">
              <Database className="w-8 h-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Prompt Engineering</h3>
            <p className="text-muted-foreground mb-4">
              Strategic prompt design and LLM optimization for maximum performance and accuracy.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Chain-of-Thought</li>
              <li>Few-Shot Learning</li>
              <li>Context Management</li>
              <li>Performance Tuning</li>
            </ul>
          </div>

          {/* Custom Solutions */}
          <div className="glass p-8 rounded-lg animate-fade-up" style={{ animationDelay: '500ms' }}>
            <div className="mb-4">
              <Users className="w-8 h-8 text-primary mb-2" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <p className="text-muted-foreground mb-4">
              User-centric AI agent development focused on delivering practical business value.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Solution Design</li>
              <li>User Experience</li>
              <li>Integration</li>
              <li>Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
