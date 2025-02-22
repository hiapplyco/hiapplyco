
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Apply, Co. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
