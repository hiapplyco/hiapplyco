import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Projects from '@/components/Projects';
import { Helmet } from 'react-helmet';

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Apply, Co.</title>
        <meta name="description" content="Explore our successful AI agent implementations and strategic recruitment placements. Real-world results from Fortune 500 to innovative startups." />
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
                Case <span className="text-gradient-purple-green">Studies</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
                Real-world success stories from our AI and recruitment solutions
              </p>
            </div>
          </section>

          {/* Projects/Case Studies */}
          <section className="section-spacing">
            <Projects />
          </section>

          {/* Call to Action */}
          <section className="section-spacing bg-muted/30">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you need AI agents or human experts, we'll help you achieve extraordinary results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-gradient-border px-8 py-4 rounded-lg font-medium">
                  Start Your Project
                </a>
                <a href="/services" className="btn-gradient-border px-8 py-4 rounded-lg font-medium">
                  Explore Services
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default CaseStudies;