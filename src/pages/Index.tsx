import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const Index = () => {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-[#050505] text-white font-sans antialiased">
        <Header />

        {/* Main content area - ready for new design */}
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Landing Page
            </h1>
            <p className="text-xl text-gray-400">
              Ready for redesign
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
