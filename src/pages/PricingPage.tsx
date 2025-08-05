import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Pricing from '@/components/Pricing';
import { Helmet } from 'react-helmet';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Transparent Solutions | Apply, Co.</title>
        <meta name="description" content="Clear, transparent pricing for AI agent development and recruitment services. Custom solutions tailored to your budget and requirements." />
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
                Transparent <span className="text-gradient-purple-green">Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
                Flexible plans for businesses of all sizes
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="section-spacing">
            <Pricing />
          </section>

          {/* Additional Value Props */}
          <section className="section-spacing bg-muted/30">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Our Pricing Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
                  <p className="text-muted-foreground">
                    What you see is what you get. Transparent pricing with no surprises.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                  <p className="text-muted-foreground">
                    Start small and scale up as your needs grow. Upgrade anytime.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
                  <p className="text-muted-foreground">
                    Our solutions pay for themselves through efficiency gains and better outcomes.
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

export default PricingPage;