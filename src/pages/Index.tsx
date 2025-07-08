
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
import Pricing from '@/components/Pricing';
import DualValueProposition from '@/components/DualValueProposition';
import FAQ from '@/components/FAQ';
import StructuredData from '@/components/StructuredData';
import PioneeringSolutions from '@/components/PioneeringSolutions';
import HumanVsAIComparison from '@/components/HumanVsAIComparison';

const Index = () => {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Header />
        
        {/* Fixed particle background that covers the entire page */}
        <div className="fixed inset-0" style={{ zIndex: 1 }}>
          <ParticleBackground />
        </div>

        {/* Hero Section */}
        <section id="home" className="relative min-h-[70vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center" style={{ zIndex: 10 }}>
            {/* Central Logo */}
            <div className="mb-8 flex justify-center animate-fade-up">
              <img 
                src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos//Apply2025logo.png"
                alt="Apply Logo"
                className="h-32 md:h-40 lg:h-48 object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up animation-delay-200 text-balance">
              Build AI Agents. <span className="text-gradient-purple-green">Hire Human Experts.</span> Know the Difference.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up animation-delay-300 max-w-2xl mx-auto">
              First to pioneer AI agent development for every industry. Trusted for strategic human recruitment when expertise matters. We deliver the right solution – artificial or human intelligence – tailored to your needs.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-350 max-w-2xl mx-auto">
              From Fortune 500 to local SMBs – we know when you need cutting-edge AI automation and when you need exceptional human talent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <a href="#contact" className="inline-flex items-center justify-center btn-gradient-border px-8 py-4 rounded-lg font-medium animate-fade-up animation-delay-400">
                <span>Schedule a Consultation</span>
              </a>
              <a href="https://apply.codes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center btn-gradient-border px-8 py-4 rounded-lg font-medium animate-fade-up animation-delay-500">
                <span>Hiring Platform →</span>
              </a>
            </div>
          </div>
        </section>

        <div className="relative" style={{ zIndex: 10 }}>
          {/* Section 1: Pioneering Solutions - First Mover */}
          <section className="section-spacing">
            <PioneeringSolutions />
          </section>

          {/* Section 2: Our Unique Offer */}
          <section className="section-spacing bg-muted/30">
            <UniqueOffer />
            <AIPartnersSection />
          </section>
          
          {/* Section 3: Dual Value Proposition */}
          <section className="section-spacing">
            <DualValueProposition />
          </section>
          
          {/* Section 4: Human vs AI Comparison Guide */}
          <section className="section-spacing bg-muted/30">
            <HumanVsAIComparison />
          </section>
          
          {/* Section 5: Recruitment & Staffing */}
          <section id="recruitment" className="section-spacing">
            <RecruitmentServices />
          </section>

          {/* Section 6: AI Agent Development */}
          <section id="ai-development" className="section-spacing bg-muted/30">
            <AIAgentDevelopment />
          </section>
          
          {/* Section 7: Case Studies & Success Stories */}
          <section id="case-studies" className="section-spacing">
            <Projects />
          </section>

          {/* Section 8: Why Choose Apply, Co.? */}
          <section className="section-spacing">
            <WhyChooseUs />
          </section>
          
          {/* Section 9: Pricing */}
          <section id="pricing" className="section-spacing bg-muted/30">
            <Pricing />
          </section>
          
          {/* Section 10: FAQ */}
          <section id="faq" className="section-spacing">
            <FAQ />
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
