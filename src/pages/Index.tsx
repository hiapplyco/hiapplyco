
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Tools from '@/components/Tools';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AIPartnersSection from '@/components/ai-partners';

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      
      {/* Fixed particle background that covers the entire page */}
      <div className="fixed inset-0" style={{
      zIndex: 1
    }}>
        <ParticleBackground onEffectReady={(effect) => {
          // Store effect reference if needed for animations
          window.particleEffect = effect;
        }} />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center" style={{
        zIndex: 10
      }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up text-balance">
            AI Solutions for <span className="text-gradient-purple-green">Small Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-up animation-delay-200 max-w-2xl mx-auto">
            Hyper-local AI that understands your market. Built specifically for SMBs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a href="#projects" className="inline-flex items-center justify-center gradient-purple-green text-white px-8 py-4 rounded-lg font-medium hover:bg-foreground hover:text-background transition-all duration-200 animate-fade-up animation-delay-300">
              View Success Stories
            </a>
            <a href="#contact" className="inline-flex items-center justify-center bg-background/80 backdrop-blur-sm text-foreground border-2 border-foreground/80 px-8 py-4 rounded-lg font-medium hover:bg-foreground hover:text-background transition-all duration-200 animate-fade-up animation-delay-400">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <div className="relative" style={{
      zIndex: 10
    }}>
        {/* Section 1: What We Do */}
        <section className="section-spacing">
          <Projects />
        </section>
        
        {/* Section 2: How We Work */}
        <section className="section-spacing bg-muted/30">
          <Tools />
          <AIPartnersSection />
        </section>
        
        {/* Section 3: Pricing */}
        <section className="section-spacing">
          <Pricing />
        </section>
        
        {/* Section 4: Get Started */}
        <section className="section-spacing bg-muted/30">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Index;
