
import React from 'react';
import { Github, Linkedin, Twitter, Rss } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="mb-2">
              <img 
                src="/lovable-uploads/d57e18cf-ef2b-43ec-84cc-a8bcb2c88158.png" 
                alt="Apply Logo" 
                className="h-10" 
              />
            </a>
            <p className="text-muted-foreground text-sm max-w-md text-center md:text-left">
              Strategic AI agent development for businesses looking to harness the power of artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-sm">
            <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</a>
            <a href="#tools" className="text-muted-foreground hover:text-accent transition-colors">Expertise</a>
            <a href="#process" className="text-muted-foreground hover:text-accent transition-colors">Process</a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/jamesschlauch/"
              className="text-muted-foreground hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/hiapplyco"
              className="text-muted-foreground hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/jamesschlauch"
              className="text-muted-foreground hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://hiapplyco.substack.com/"
              className="text-muted-foreground hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
            >
              <Rss size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Apply, Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
