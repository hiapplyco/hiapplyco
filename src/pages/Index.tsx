
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIPartnersSection from '@/components/ai-partners';
import StructuredData from '@/components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Brain, TrendingUp } from 'lucide-react';
import NeonTextAnimation from '@/components/NeonTextAnimation';
import GlassCard from '@/components/GlassCard';

const Index = () => {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-purple-500/30">
        <Header />

        {/* Hero Section with Neon Animation */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
          {/* Background Animation Layer */}
          <div className="absolute inset-0 z-0 opacity-60">
            <NeonTextAnimation text="Apply" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 max-w-5xl mx-auto text-center mt-[40vh]">
            <div className="mb-8 flex justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300">
                The Future of Workforce
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0 text-balance leading-tight" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Build AI Agents. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Hire Human Experts.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 animate-fade-up opacity-0 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
              We pioneer AI agent development while providing strategic human recruitment.
              The perfect blend of artificial and human intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up opacity-0" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
              <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-emerald-600 opacity-80 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative bg-black rounded-lg px-8 py-4 border border-white/10 flex items-center gap-2">
                  Schedule Consultation
                </div>
              </a>
              <a href="https://apply.codes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <span>Hiring Platform</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        <div className="relative z-10 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]">
          {/* AI Partners Orbit Modal */}
          <section className="py-24">
            <AIPartnersSection />
          </section>

          {/* Key Value Props */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Apply, Co.</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  We bridge the gap between cutting-edge automation and irreplaceable human expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div onClick={() => window.location.href = '/solutions'} className="cursor-pointer group">
                  <GlassCard className="h-full">
                    <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">First to Market</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Pioneering AI agent development across every industry with proven implementations that drive real efficiency.
                    </p>
                    <span className="text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </div>

                <div onClick={() => window.location.href = '/services'} className="cursor-pointer group">
                  <GlassCard className="h-full">
                    <div className="w-14 h-14 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Dual Expertise</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Unique capability in both AI development and strategic human recruitment, ensuring you get the best of both worlds.
                    </p>
                    <span className="text-emerald-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore services <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </div>

                <div onClick={() => window.location.href = '/case-studies'} className="cursor-pointer group">
                  <GlassCard className="h-full">
                    <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Proven Results</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      From Fortune 500 to SMBs, delivering measurable ROI and transformation through our tailored solutions.
                    </p>
                    <span className="text-blue-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      View case studies <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="py-24 px-6 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <GlassCard className="bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/20">
                  <Sparkles className="w-10 h-10 mb-6 text-purple-400" />
                  <h3 className="text-3xl font-bold mb-4 text-white">Need AI Agents?</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Automate workflows, enhance customer service, and scale operations with custom AI agents tailored to your industry.
                  </p>
                  <Link to="/services#ai-development" className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:gap-3 transition-all text-lg">
                    Explore AI solutions <ArrowRight className="w-5 h-5" />
                  </Link>
                </GlassCard>

                <GlassCard className="bg-gradient-to-br from-emerald-900/20 to-transparent border-emerald-500/20">
                  <Users className="w-10 h-10 mb-6 text-emerald-400" />
                  <h3 className="text-3xl font-bold mb-4 text-white">Need Human Talent?</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Find exceptional leaders, specialists, and teams with our strategic recruitment services and vast network.
                  </p>
                  <Link to="/services#recruitment" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-3 transition-all text-lg">
                    Explore recruitment <ArrowRight className="w-5 h-5" />
                  </Link>
                </GlassCard>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-emerald-900/20 blur-3xl -z-10" />
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Whether you need cutting-edge AI or exceptional humans, we deliver the right solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition-colors">
                  Schedule Consultation
                </Link>
                <Link to="/pricing" className="px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/10 transition-colors text-white">
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
