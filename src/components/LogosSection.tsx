import React, { useEffect, useState } from 'react';
import { storage } from "@/integrations/firebase/client";
import { ref, listAll, getDownloadURL } from "firebase/storage";
const LogosSection = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const logosRef = ref(storage, 'logos');
        const result = await listAll(logosRef);

        // Get public URLs for each logo
        const logoUrls = await Promise.all(result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        }));
        setLogos(logoUrls);
      } catch (error) {
        console.error('Error fetching logos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLogos();
  }, []);
  if (loading) {
    return <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full border-4 border-accent/30 border-t-accent animate-spin"></div>
        </div>
      </div>
    </section>;
  }
  if (!logos.length) {
    return null;
  }
  return <section className="py-16 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-up">
        <h3 className="text-2xl font-semibold">Trusted Technologies</h3>
        <p className="text-muted-foreground mt-2">The powerful tools and platforms I leverage</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-items-center px-8">
          {logos.map((url, index) => <div key={index} className="w-24 h-24 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-500 animate-fade-in opacity-70 hover:opacity-100" style={{
            animationDelay: `${index * 50}ms`
          }}>
            <img src={url} alt={`Technology logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
          </div>)}
        </div>
      </div>
    </div>
  </section>;
};
export default LogosSection;