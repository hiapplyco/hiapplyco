import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import RecruitmentServices from '@/components/RecruitmentServices';
import AIAgentDevelopment from '@/components/AIAgentDevelopment';
import DualValueProposition from '@/components/DualValueProposition';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - AI Development & Human Recruitment | Apply, Co.</title>
        <meta name="description" content="Comprehensive AI agent development and strategic human recruitment services. From custom AI solutions to executive search, we deliver the right intelligence for your needs." />
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
                Our <span className="text-gradient-purple-green">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
                Comprehensive solutions for AI automation and human talent acquisition
              </p>
            </div>
          </section>

          {/* Dual Value Proposition */}
          <section className="section-spacing">
            <DualValueProposition />
          </section>

          {/* Recruitment Services */}
          <section id="recruitment" className="section-spacing bg-muted/30">
            <RecruitmentServices />
          </section>

          {/* AI Agent Development */}
          <section id="ai-development" className="section-spacing">
            <AIAgentDevelopment />
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Services;