import React from 'react';
import { Send, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your business with intelligent AI solutions?
          </p>
        </div>
        
        <div className="glass p-8 md:p-10 rounded-2xl animate-fade-up shadow-lg">
          <div className="flex items-center gap-3 mb-8 text-accent">
            <Mail className="h-5 w-5" />
            <span className="font-medium">james@hiapply.co</span>
          </div>
          
          <p className="text-lg mb-8">
            Looking to implement strategic AI agent solutions for your business? Let's discuss how we can leverage advanced AI capabilities to solve your specific challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="mailto:james@hiapply.co"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-accent/90"
            >
              <Send className="h-4 w-4" />
              Start a Conversation
            </a>
            
            <a
              href="https://calendly.com/james-apply"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 border border-border bg-background px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-secondary/50"
            >
              Schedule a Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
