
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Tools from '@/components/Tools';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import LogosSection from '@/components/LogosSection';
import ParticleBackground from '@/components/ParticleBackground';
import DeploymentTimeline from '@/components/DeploymentTimeline';
import SuccessStories from '@/components/SuccessStories';
import AgentEcosystemVisualization from '@/components/AgentEcosystemVisualization';
import AgenticRecruitmentPlatform from '@/components/AgenticRecruitmentPlatform';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Agent Solutions for SMBs | Apply, Co. - Hyper-Local AI Deployment</title>
        <meta name="description" content="Expert AI solutions for small and medium businesses. Hyper-local AI deployment, recruitment automation, and measurable ROI. Transform your SMB with neighborhood-specific intelligence." />
        <meta name="keywords" content="AI for small business, hyper-local AI solutions, SMB AI deployment, local business AI tools, AI recruitment for SMBs, apply.codes, neighborhood AI analytics" />
        <meta property="og:title" content="AI Agent Solutions for SMBs | Apply, Co." />
        <meta property="og:description" content="Expert AI solutions for small and medium businesses. Hyper-local AI deployment with measurable ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiapply.co/" />
        <meta property="og:image" content="https://hiapply.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Agent Solutions for SMBs | Apply, Co." />
        <meta name="twitter:description" content="Expert AI solutions for small and medium businesses. Hyper-local AI deployment with measurable ROI." />
        <meta name="twitter:image" content="https://hiapply.co/og-image.png" />
        <link rel="canonical" href="https://hiapply.co/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Apply, Co.",
            "url": "https://hiapply.co/",
            "logo": "https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png",
            "description": "Expert AI solutions for small and medium businesses. Hyper-local AI deployment, recruitment automation, and measurable ROI.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@apply.codes",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.linkedin.com/in/jamesschlauch/",
              "https://github.com/hiapplyco",
              "https://twitter.com/jamesschlauch",
              "https://hiapplyco.substack.com/"
            ],
            "founder": {
              "@type": "Person",
              "name": "James Schlauch"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "198",
              "highPrice": "4500",
              "offerCount": "5",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "SMB AI Solutions",
                  "description": "AI-powered solutions for small and medium businesses",
                  "url": "https://hiapply.co/#contact"
                },
                {
                  "@type": "Offer",
                  "name": "Agentic Recruitment Platform",
                  "description": "AI recruitment platform at apply.codes",
                  "url": "https://www.apply.codes"
                }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://hiapply.co/",
            "name": "Apply, Co. - AI Solutions for SMBs",
            "description": "Hyper-local AI deployment for small and medium businesses",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://hiapply.co/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is hyper-local AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hyper-local AI refers to artificial intelligence systems that understand and adapt to specific neighborhood dynamics, local market conditions, and regional customer preferences. Unlike generic AI solutions, our hyper-local approach considers the unique characteristics of your business location."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to implement AI for my SMB?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most SMB AI solutions can be deployed within 2-4 weeks, delivering immediate ROI without disrupting your operations. This includes setup, training, and initial optimization for your specific business needs."
                }
              },
              {
                "@type": "Question",
                "name": "What is apply.codes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "apply.codes is our Agentic Recruitment Platform - an AI-powered hiring solution that helps SMBs find local talent through intelligent matching based on neighborhood proximity and community connection."
                }
              }
            ]
          })}
        </script>
      </Helmet>
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
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none" style={{
        zIndex: 1
      }}></div>
        <div className="absolute top-20 right-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{
        zIndex: 3
      }}></div>
        <div className="absolute bottom-20 left-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{
        zIndex: 3
      }}></div>
        
        <div className="relative max-w-3xl mx-auto text-center glass p-8 rounded-xl" style={{
        zIndex: 10
      }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-balance">
            AI Agent Solutions <span className="text-accent">Built for SMBs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up animation-delay-200 md:px-6 text-balance">
            Experts in hyper-local AI deployment specifically for small and medium businesses. 
            <span className="block mt-2 font-medium">Delivering measurable ROI with localized intelligence that understands your market.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="#projects" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium interactive-element animate-fade-up animation-delay-300">
              SMB Success Stories
            </a>
            <a href="#contact" className="inline-block bg-secondary text-foreground border border-border/50 px-8 py-3.5 rounded-lg font-medium interactive-element animate-fade-up animation-delay-400">
              Free SMB Consultation
            </a>
          </div>
        </div>
      </section>

      <div className="relative" style={{
      zIndex: 10
    }}>
        <AgenticRecruitmentPlatform />
        <Process />
        <Projects />
        <AgentEcosystemVisualization />
        <Tools />
        <SuccessStories />
        <DeploymentTimeline />
        <LogosSection />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Index;
