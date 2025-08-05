import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Contact from '@/components/Contact';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get Started | Apply, Co.</title>
        <meta name="description" content="Contact Apply, Co. for AI agent development or strategic recruitment services. Schedule a consultation to discuss your needs." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Header />
        
        {/* Fixed particle background */}
        <div className="fixed inset-0" style={{ zIndex: 1 }}>
          <ParticleBackground />
        </div>

        <div className="relative" style={{ zIndex: 10 }}>
          {/* Hero Section */}
          <section className="relative min-h-[40vh] flex items-center justify-center pt-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
                Let's <span className="text-gradient-purple-green">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
                Start your journey with AI agents or human talent today
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="section-spacing">
            <Contact />
          </section>

          {/* Additional Contact Info */}
          <section className="section-spacing bg-muted/30">
            <div className="max-w-4xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                  <p className="text-muted-foreground">
                    Free 30-minute consultation to discuss your needs
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Serving clients worldwide with remote and on-site solutions
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactPage;