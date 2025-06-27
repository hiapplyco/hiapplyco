
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface AdditionalFeature {
  title: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
}

export interface PricingConfig {
  clientSlug: string;
  clientName: string;
  hero: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  tiers: PricingTier[];
  additionalFeatures?: AdditionalFeature[];
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton?: string;
  };
  contact?: ContactInfo;
  seo: {
    title: string;
    description: string;
  };
}
