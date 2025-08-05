import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import PioneeringSolutions from '@/components/PioneeringSolutions';
import HumanVsAIComparison from '@/components/HumanVsAIComparison';
import UniqueOffer from '@/components/UniqueOffer';
import { Helmet } from 'react-helmet';

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - Pioneering AI & Human Intelligence | Apply, Co.</title>
        <meta name="description" content="Discover our pioneering solutions in AI agent development and strategic human recruitment. Learn when to leverage AI automation versus human expertise." />
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
                Pioneering <span className="text-gradient-purple-green">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
                First to market with AI agents for every industry
              </p>
            </div>
          </section>

          {/* Pioneering Solutions */}
          <section className="section-spacing">
            <PioneeringSolutions />
          </section>

          {/* Our Unique Offer */}
          <section className="section-spacing bg-muted/30">
            <UniqueOffer />
          </section>

          {/* Human vs AI Comparison */}
          <section className="section-spacing">
            <HumanVsAIComparison />
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Solutions;