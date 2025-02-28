
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Tools from '@/components/Tools';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import LogosSection from '@/components/LogosSection';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      
      {/* Particle background with proper z-index to appear throughout the entire page */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <ParticleBackground targetElementIds={['home', 'process', 'projects', 'tools', 'about', 'contact']} />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none" style={{ zIndex: 0 }}></div>
        <div className="absolute top-20 right-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ zIndex: 0 }}></div>
        <div className="absolute bottom-20 left-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ zIndex: 0 }}></div>
        
        <div className="relative max-w-3xl mx-auto text-center glass p-8 rounded-xl" style={{ zIndex: 2 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-balance">
            Strategic <span className="text-accent">AI Agent</span> Development
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up animation-delay-200 md:px-6 text-balance">
            Expert in Strategic AI Agent Architecture, Advanced Tooling Integration, and User-Centric Solutions. Specializing in building intelligent systems that deliver real business value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium interactive-element animate-fade-up animation-delay-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block bg-secondary text-foreground border border-border/50 px-8 py-3.5 rounded-lg font-medium interactive-element animate-fade-up animation-delay-400"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Content sections with proper z-index to appear above the particle background */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Process />
        <Projects />
        <Tools />
        <LogosSection />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
