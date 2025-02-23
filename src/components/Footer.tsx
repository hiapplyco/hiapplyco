
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Apply, Co. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/jamesschlauch/"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/hiapplyco"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
