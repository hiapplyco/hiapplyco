
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PricingHero from '../components/pricing/PricingHero';
import PricingTiers from '../components/pricing/PricingTiers';
import PricingFeatures from '../components/pricing/PricingFeatures';
import PricingCTA from '../components/pricing/PricingCTA';
import { getPricingConfig } from '../data/pricingConfig';

const Pricing = () => {
  const { clientSlug } = useParams<{ clientSlug: string }>();
  
  if (!clientSlug) {
    return <Navigate to="/404" replace />;
  }

  const pricingConfig = getPricingConfig(clientSlug);
  
  if (!pricingConfig) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{pricingConfig.seo.title}</title>
        <meta name="description" content={pricingConfig.seo.description} />
        <meta property="og:title" content={pricingConfig.seo.title} />
        <meta property="og:description" content={pricingConfig.seo.description} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <PricingHero config={pricingConfig} />
        <PricingTiers config={pricingConfig} />
        <PricingFeatures config={pricingConfig} />
        <PricingCTA config={pricingConfig} />
      </div>
    </>
  );
};

export default Pricing;
