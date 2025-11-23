
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIPartnersSection from '@/components/ai-partners';
import StructuredData from '@/components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Brain, TrendingUp, Code, Zap } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import FloatingElement from '@/components/FloatingElement';

const Index = () => {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-purple-500/30 overflow-x-hidden">
        <Header />

        {/* Hero Section with Vibrant Glassmorphism */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">

          {/* Vibrant Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="blob bg-purple-600 w-96 h-96 rounded-full top-0 left-0 mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="blob bg-emerald-500 w-96 h-96 rounded-full top-0 right-0 mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="blob bg-blue-600 w-80 h-80 rounded-full bottom-0 left-1/4 mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          {/* Floating Glass Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingElement className="absolute top-1/4 left-[10%] hidden md:block" delay={0}>
              <GlassCard className="p-4 backdrop-blur-md bg-white/5 border-white/10 w-16 h-16 flex items-center justify-center rounded-2xl">
                <Brain className="w-8 h-8 text-purple-400" />
              </GlassCard>
            </FloatingElement>
            <FloatingElement className="absolute top-1/3 right-[15%] hidden md:block" delay={1.5}>
              <GlassCard className="p-4 backdrop-blur-md bg-white/5 border-white/10 w-16 h-16 flex items-center justify-center rounded-2xl">
                <Users className="w-8 h-8 text-emerald-400" />
              </GlassCard>
            </FloatingElement>
            <FloatingElement className="absolute bottom-1/4 left-[20%] hidden md:block" delay={2.5}>
              <GlassCard className="p-4 backdrop-blur-md bg-white/5 border-white/10 w-14 h-14 flex items-center justify-center rounded-2xl">
                <Code className="w-6 h-6 text-blue-400" />
              </GlassCard>
            </FloatingElement>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 max-w-5xl mx-auto text-center mt-[10vh]">
            <div className="mb-8 flex justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-medium text-gray-300 shadow-lg">
                The Future of Workforce
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-fade-up opacity-0 text-balance leading-tight tracking-tight" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-glow">AI Agents.</span><br />
              Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-glow">Human Experts.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-up opacity-0 max-w-3xl mx-auto leading-relaxed font-light" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
              We pioneer AI agent development while providing strategic human recruitment.
              The perfect blend of artificial and human intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up opacity-0" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
              <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-600 opacity-100 blur-sm transition-opacity duration-300" />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/20 flex items-center gap-2 w-full h-full">
                  Schedule Consultation
                </div>
              </a>
              <a href="https://apply.codes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span>Hiring Platform</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2 backdrop-blur-sm">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        <div className="relative z-10 bg-black/40 backdrop-blur-3xl">
          {/* AI Partners Orbit Modal */}
          <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
            <AIPartnersSection />
          </section>

          {/* Key Value Props */}
          <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-6xl font-bold mb-6">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Apply, Co.</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  We bridge the gap between cutting-edge automation and irreplaceable human expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div onClick={() => window.location.href = '/solutions'} className="cursor-pointer group h-full">
                  <GlassCard className="h-full p-8 flex flex-col items-start hover:bg-white/10">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md border border-purple-500/30">
                      <Brain className="w-8 h-8 text-purple-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">First to Market</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                      Pioneering AI agent development across every industry with proven implementations that drive real efficiency.
                    </p>
                    <span className="text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </div>

                <div onClick={() => window.location.href = '/services'} className="cursor-pointer group h-full">
                  <GlassCard className="h-full p-8 flex flex-col items-start hover:bg-white/10">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md border border-emerald-500/30">
                      <Users className="w-8 h-8 text-emerald-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">Dual Expertise</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                      Unique capability in both AI development and strategic human recruitment, ensuring you get the best of both worlds.
                    </p>
                    <span className="text-emerald-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Explore services <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </div>

                <div onClick={() => window.location.href = '/case-studies'} className="cursor-pointer group h-full">
                  <GlassCard className="h-full p-8 flex flex-col items-start hover:bg-white/10">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md border border-blue-500/30">
                      <TrendingUp className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Proven Results</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                      From Fortune 500 to SMBs, delivering measurable ROI and transformation through our tailored solutions.
                    </p>
                    <span className="text-blue-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      View case studies <ArrowRight className="w-4 h-4" />
                    </span>
                  </GlassCard>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="py-24 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-emerald-900/10 pointer-events-none" />
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <GlassCard className="relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-600/30 transition-colors duration-500" />
                  <Sparkles className="w-12 h-12 mb-6 text-purple-400 relative z-10" />
                  <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Need AI Agents?</h3>
                  <p className="text-gray-300 mb-8 text-lg relative z-10">
                    Automate workflows, enhance customer service, and scale operations with custom AI agents tailored to your industry.
                  </p>
                  <Link to="/services#ai-development" className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:gap-3 transition-all text-lg relative z-10">
                    Explore AI solutions <ArrowRight className="w-5 h-5" />
                  </Link>
                </GlassCard>

                <GlassCard className="relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-600/30 transition-colors duration-500" />
                  <Users className="w-12 h-12 mb-6 text-emerald-400 relative z-10" />
                  <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Need Human Talent?</h3>
                  <p className="text-gray-300 mb-8 text-lg relative z-10">
                    Find exceptional leaders, specialists, and teams with our strategic recruitment services and vast network.
                  </p>
                  <Link to="/services#recruitment" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-3 transition-all text-lg relative z-10">
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
                <Link to="/contact" className="px-8 py-4 rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </Link>
                <Link to="/pricing" className="px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition-colors text-white backdrop-blur-md">
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
