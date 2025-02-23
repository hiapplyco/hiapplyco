
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="glass p-8 rounded-lg animate-fade-up">
          <p className="text-lg text-muted-foreground mb-6">
            With extensive expertise in AI agent development, I specialize in crafting intelligent systems that bridge the gap between advanced technology and practical business solutions. My approach blends strategic AI agent architecture with a user-first design philosophy, ensuring that every solution not only leverages cutting-edge technology but delivers real value.
          </p>
          <p className="text-lg text-muted-foreground">
            At Apply, Co., I focus on creating custom AI agent solutions that combine intelligent prompt engineering, advanced tooling integration, and framework expertise. Whether it's designing complex agent architectures, implementing sophisticated function calling systems, or optimizing LLM performance, I'm dedicated to building solutions that are both powerful and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
