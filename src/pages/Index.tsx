
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AIPartnersSection from '@/components/ai-partners';
import StructuredData from '@/components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Brain, TrendingUp } from 'lucide-react';

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
          {/* AI Partners Orbit Modal */}
          <section className="section-spacing">
            <AIPartnersSection />
          </section>

          {/* Key Value Props */}
          <section className="section-spacing bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose <span className="text-gradient-purple-green">Apply, Co.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group cursor-pointer" onClick={() => window.location.href = '/solutions'}>
                  <div className="bg-card rounded-xl p-8 border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                    <Brain className="w-12 h-12 mb-4 text-purple-500" />
                    <h3 className="text-xl font-semibold mb-3">First to Market</h3>
                    <p className="text-muted-foreground mb-4">
                      Pioneering AI agent development across every industry with proven implementations
                    </p>
                    <span className="text-purple-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                
                <div className="group cursor-pointer" onClick={() => window.location.href = '/services'}>
                  <div className="bg-card rounded-xl p-8 border border-border/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                    <Users className="w-12 h-12 mb-4 text-green-500" />
                    <h3 className="text-xl font-semibold mb-3">Dual Expertise</h3>
                    <p className="text-muted-foreground mb-4">
                      Unique capability in both AI development and strategic human recruitment
                    </p>
                    <span className="text-green-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore services <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                
                <div className="group cursor-pointer" onClick={() => window.location.href = '/case-studies'}>
                  <div className="bg-card rounded-xl p-8 border border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    <TrendingUp className="w-12 h-12 mb-4 text-blue-500" />
                    <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                    <p className="text-muted-foreground mb-4">
                      From Fortune 500 to SMBs, delivering measurable ROI and transformation
                    </p>
                    <span className="text-blue-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View case studies <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="section-spacing">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-500/10 to-green-500/10 rounded-2xl p-8 border border-border/50">
                  <Sparkles className="w-10 h-10 mb-4 text-purple-500" />
                  <h3 className="text-2xl font-bold mb-4">Need AI Agents?</h3>
                  <p className="text-muted-foreground mb-6">
                    Automate workflows, enhance customer service, and scale operations with custom AI agents tailored to your industry.
                  </p>
                  <Link to="/services#ai-development" className="inline-flex items-center gap-2 text-purple-500 font-medium hover:gap-3 transition-all">
                    Explore AI solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-border/50">
                  <Users className="w-10 h-10 mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold mb-4">Need Human Talent?</h3>
                  <p className="text-muted-foreground mb-6">
                    Find exceptional leaders, specialists, and teams with our strategic recruitment services and vast network.
                  </p>
                  <Link to="/services#recruitment" className="inline-flex items-center gap-2 text-green-500 font-medium hover:gap-3 transition-all">
                    Explore recruitment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-spacing bg-muted/30">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you need cutting-edge AI or exceptional humans, we deliver the right solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-gradient-border px-8 py-4 rounded-lg font-medium">
                  Schedule Consultation
                </Link>
                <Link to="/pricing" className="btn-gradient-border px-8 py-4 rounded-lg font-medium">
                  View Pricing
                </Link>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
