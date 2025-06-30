
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import UniqueOffer from '@/components/UniqueOffer';
import RecruitmentServices from '@/components/RecruitmentServices';
import AIAgentDevelopment from '@/components/AIAgentDevelopment';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import AIPartnersSection from '@/components/ai-partners';

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Header />
        
        {/* Fixed particle background that covers the entire page */}
        <div className="fixed inset-0" style={{ zIndex: 1 }}>
          <ParticleBackground onEffectReady={(effect) => {
            // Store effect reference if needed for animations
            window.particleEffect = effect;
          }} />
        </div>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center" style={{ zIndex: 10 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up text-balance">
              Scale Faster with Apply, Co.: <span className="text-gradient-purple-green">Human and AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-up animation-delay-200 max-w-2xl mx-auto">
              Hire top-tier talent or automate critical tasks with custom AI agents, tailored for your business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <a href="#contact" className="inline-flex items-center justify-center gradient-purple-green text-white px-8 py-4 rounded-lg font-medium hover:bg-foreground hover:text-background transition-all duration-200 animate-fade-up animation-delay-300">
                Schedule a Consultation
              </a>
              <a href="#case-studies" className="inline-flex items-center justify-center border-2 border-purple-600/50 text-foreground px-8 py-4 rounded-lg font-medium hover:bg-purple-600/10 transition-all duration-200 animate-fade-up animation-delay-400">
                View Work
              </a>
            </div>
          </div>
        </section>

        <div className="relative" style={{ zIndex: 10 }}>
          {/* Section 1: Our Unique Offer */}
          <section className="section-spacing">
            <UniqueOffer />
            <AIPartnersSection />
          </section>
          
          {/* Section 2: Recruitment & Staffing */}
          <section id="recruitment" className="section-spacing bg-muted/30">
            <RecruitmentServices />
          </section>

          {/* Section 3: AI Agent Development */}
          <section id="ai-development" className="section-spacing">
            <AIAgentDevelopment />
          </section>
          
          {/* Section 4: Case Studies & Success Stories */}
          <section id="case-studies" className="section-spacing bg-muted/30">
            <Projects />
          </section>

          {/* Section 5: Why Choose Apply, Co.? */}
          <section className="section-spacing">
            <WhyChooseUs />
          </section>
          
          {/* Call-to-Action Footer */}
          <section id="contact" className="section-spacing bg-muted/30">
            <Contact />
          </section>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
