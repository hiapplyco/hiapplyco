
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

const LogosSection = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const { data, error } = await supabase.storage.from('logos').list();
        
        if (error) {
          console.error('Error fetching logos:', error);
          return;
        }

        // Get public URLs for each logo
        const logoUrls = await Promise.all(
          data.map(async (file) => {
            const { data: { publicUrl } } = supabase.storage
              .from('logos')
              .getPublicUrl(file.name);
            return publicUrl;
          })
        );

        setLogos(logoUrls);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-8">Loading logos...</div>;
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">Trusted Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((url, index) => (
            <div 
              key={index} 
              className="w-20 h-20 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={url} 
                alt={`Technology logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
