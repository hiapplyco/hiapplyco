
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PasswordProtection from '../components/PasswordProtection';
import PricingHero from '../components/pricing/PricingHero';
import CinematicHero from '../components/pricing/CinematicHero';
import PricingTiers from '../components/pricing/PricingTiers';
import PricingFeatures from '../components/pricing/PricingFeatures';
import PricingCTA from '../components/pricing/PricingCTA';
import { getPricingConfig } from '../data/pricingConfig';

const ProtectedPricing = () => {
  const { clientSlug } = useParams<{ clientSlug: string }>();
  
  if (!clientSlug) {
    return <Navigate to="/404" replace />;
  }

  const pricingConfig = getPricingConfig(clientSlug);
  
  if (!pricingConfig) {
    return <Navigate to="/404" replace />;
  }

  // Use cinematic hero for Blue Zones Health
  const isBlueZones = clientSlug === 'blue-zones-health';

  const pricingContent = (
    <>
      
      <div className="min-h-screen bg-background">
        {isBlueZones ? (
          <CinematicHero config={pricingConfig} />
        ) : (
          <PricingHero config={pricingConfig} />
        )}
        
        <div className={isBlueZones ? 'relative z-20 bg-white' : ''}>
          <PricingTiers config={pricingConfig} />
          <PricingFeatures config={pricingConfig} />
          <PricingCTA config={pricingConfig} />
        </div>
      </div>
    </>
  );

  // Only protect Blue Zones Health for now
  if (isBlueZones) {
    return (
      <PasswordProtection 
        requiredPassword="bzh" 
        storageKey={`pricing-auth-${clientSlug}`}
      >
        {pricingContent}
      </PasswordProtection>
    );
  }

  return pricingContent;
};

export default ProtectedPricing;
