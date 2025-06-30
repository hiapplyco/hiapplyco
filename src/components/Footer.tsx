
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
                src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png" 
                alt="Apply Logo" 
                className="h-10" 
              />
            </a>
            <p className="text-muted-foreground text-sm max-w-md text-center md:text-left">
              Strategic AI agent development for businesses looking to harness the power of artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-sm">
            <a href="#case-studies" className="text-muted-foreground hover:text-accent transition-colors">Projects</a>
            <a href="#ai-development" className="text-muted-foreground hover:text-accent transition-colors">Expertise</a>
            <a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">Pricing</a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/hiapplyco"
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
        
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to transform your hiring with AI-powered recruitment?
            </p>
            <a 
              href="https://www.apply.codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Visit apply.codes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Apply, Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
