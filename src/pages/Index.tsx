
import { useState } from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Tools from '@/components/Tools';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Building Next-Gen AI Agents
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Hi, I'm <span className="font-semibold">James</span>, founder of{' '}
            <span className="font-semibold">Apply, Co.</span> specializing in AI agent
            solutions using function calling, advanced tooling, and frameworks like crew.ai.
          </p>
          <a
            href="#projects"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Explore My Work
          </a>
        </div>
      </section>

      <Projects />
      <Tools />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
