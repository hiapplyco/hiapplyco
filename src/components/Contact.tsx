
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="glass p-8 rounded-lg animate-fade-up">
          <p className="text-lg text-muted-foreground mb-8">
            Interested in working together? Let's discuss how we can implement AI solutions for your business.
          </p>
          <a
            href="mailto:contact@apply.co"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
