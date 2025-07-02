
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
import IndustryShowcase from '@/components/IndustryShowcase';
import ColorfulApplyLogo from '@/components/ColorfulApplyLogo';

const Index = () => {
  return (
    <>
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
              <ColorfulApplyLogo className="h-32 md:h-40 lg:h-48" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up animation-delay-200 text-balance">
              Custom AI Agents & Industry Experts for <span className="text-gradient-purple-green">Every Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up animation-delay-300 max-w-2xl mx-auto">
              Transform healthcare, finance, legal, manufacturing, retail, or education businesses with specialized AI solutions and expert talent. Rapid deployment, measurable ROI.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <a href="#contact" className="inline-flex items-center justify-center btn-gradient-border px-8 py-4 rounded-lg font-medium animate-fade-up animation-delay-400">
                <span>Schedule a Consultation</span>
              </a>
              <a href="#case-studies" className="inline-flex items-center justify-center btn-gradient-border px-8 py-4 rounded-lg font-medium animate-fade-up animation-delay-500">
                <span>View Work</span>
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
          
          {/* Section 2: Dual Value Proposition */}
          <section className="section-spacing bg-muted/30">
            <DualValueProposition />
          </section>
          
          {/* Section 3: Recruitment & Staffing */}
          <section id="recruitment" className="section-spacing">
            <RecruitmentServices />
          </section>

          {/* Section 4: AI Agent Development */}
          <section id="ai-development" className="section-spacing bg-muted/30">
            <AIAgentDevelopment />
          </section>
          
          {/* Section 5: Case Studies & Success Stories */}
          <section id="case-studies" className="section-spacing">
            <Projects />
          </section>

          {/* Section 6: Industry Solutions */}
          <section className="section-spacing bg-muted/30">
            <IndustryShowcase />
          </section>
          
          {/* Section 7: Why Choose Apply, Co.? */}
          <section className="section-spacing">
            <WhyChooseUs />
          </section>
          
          {/* Section 8: Pricing */}
          <section id="pricing" className="section-spacing bg-muted/30">
            <Pricing />
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
