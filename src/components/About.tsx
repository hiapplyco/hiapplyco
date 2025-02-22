
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="glass p-8 rounded-lg animate-fade-up">
          <p className="text-lg text-muted-foreground mb-6">
            With over a decade of experience in software engineering, I've focused the last few years on building and deploying AI agents that solve real-world problems. My passion lies in creating intelligent systems that can reason, learn, and adapt.
          </p>
          <p className="text-lg text-muted-foreground">
            As the founder of Apply, Co., I work with companies to implement AI solutions that enhance their capabilities through advanced function calling, custom tooling, and frameworks like crew.ai. My approach combines technical expertise with practical business applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
