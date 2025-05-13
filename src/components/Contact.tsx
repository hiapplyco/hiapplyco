
import React from 'react';
import { Send, Mail, Building, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SMB AI Consultation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your small or medium business with locally-optimized AI solutions?
          </p>
        </div>
        
        <div className="glass p-8 md:p-10 rounded-2xl animate-fade-up shadow-lg">
          <div className="flex items-center gap-3 mb-8 text-accent">
            <Mail className="h-5 w-5" />
            <span className="font-medium">james@hiapply.co</span>
          </div>
          
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
              <Building className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Free SMB Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule a complimentary 30-minute call to identify the highest-impact AI opportunities for your local business
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
              <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Quick-Start Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Most SMB solutions can be deployed within 2-4 weeks, delivering immediate ROI without disrupting your operations
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-lg mb-8">
            Let's discuss how we can implement hyper-local AI solutions designed specifically for your small business needs and budget.
          </p>
          
          <div className="flex justify-center sm:justify-start">
            <a
              href="mailto:james@hiapply.co?subject=SMB%20AI%20Consultation"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-accent/90"
            >
              <Send className="h-4 w-4" />
              Schedule SMB Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
