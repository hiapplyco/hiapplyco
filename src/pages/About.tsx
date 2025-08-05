import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Pioneers in AI & Recruitment | Apply, Co.</title>
        <meta name="description" content="Learn about Apply, Co. - the first company to develop AI agents for every industry while maintaining excellence in strategic human recruitment." />
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
                About <span className="text-gradient-purple-green">Apply, Co.</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
                Pioneering the future of work with AI and human intelligence
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="section-spacing">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  Founded with a vision to bridge the gap between artificial and human intelligence, Apply, Co. has become the first company to successfully develop and deploy AI agents across every major industry.
                </p>
                <p className="mb-6">
                  We recognized early that the future of work isn't about replacing humans with AI, but about knowing when to leverage each type of intelligence. This insight led us to build two parallel expertise areas: cutting-edge AI agent development and strategic human recruitment.
                </p>
                <p className="mb-6">
                  Today, we serve everyone from Fortune 500 companies to local SMBs, helping them navigate the complex decision of when to automate with AI and when to invest in human talent. Our unique position as experts in both domains allows us to provide unbiased, optimal solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-spacing bg-muted/30">
            <div className="max-w-4xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower organizations with the right intelligence – artificial or human – to achieve extraordinary results. We believe in transparent guidance that puts our clients' success first, even if it means recommending solutions outside our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A future where AI and human intelligence work in perfect harmony, with every organization knowing exactly when and how to leverage each. We're building that future, one client at a time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="section-spacing">
            <WhyChooseUs />
          </section>

          {/* FAQ */}
          <section className="section-spacing bg-muted/30">
            <FAQ />
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;