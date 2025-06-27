
import { PricingConfig } from '../types/pricing';

const pricingConfigs: Record<string, PricingConfig> = {
  'regional-coffee-chain': {
    clientSlug: 'regional-coffee-chain',
    clientName: 'Regional Coffee Chain',
    hero: {
      title: 'AI-Powered Local Market Intelligence',
      subtitle: 'Custom pricing for your coffee chain\'s hyper-local customer analytics',
      badge: 'Tailored for Regional Coffee Chains',
    },
    tiers: [
      {
        id: 'starter',
        name: 'Market Insights',
        price: '$2,500',
        period: 'month',
        description: 'Perfect for getting started with local customer analytics',
        features: [
          'Customer preference tracking for 2-3 locations',
          'Basic neighborhood demographic analysis',
          'Weekly trend reports',
          'Email support',
          'Monthly strategy consultation',
        ],
        ctaText: 'Start with Insights',
      },
      {
        id: 'growth',
        name: 'Multi-Location AI',
        price: '$4,500',
        period: 'month',
        description: 'Scale across all your locations with advanced AI',
        features: [
          'Customer preference tracking for up to 10 locations',
          'Advanced neighborhood trend prediction',
          'Real-time inventory optimization',
          'Custom menu recommendations by location',
          'Daily automated reports',
          'Priority phone support',
          'Bi-weekly strategy sessions',
        ],
        ctaText: 'Scale Your Business',
        popular: true,
      },
      {
        id: 'enterprise',
        name: 'Regional Dominance',
        price: 'Custom',
        description: 'Complete AI-powered regional market control',
        features: [
          'Unlimited locations',
          'Competitive intelligence tracking',
          'Predictive market expansion analysis',
          'Custom AI model training',
          'Real-time customer behavior analysis',
          'Dedicated success manager',
          'Weekly strategy sessions',
          'White-label reporting',
        ],
        ctaText: 'Contact for Pricing',
      },
    ],
    additionalFeatures: [
      {
        title: 'Neighborhood-Specific Analytics',
        description: 'Understand the unique preferences of each neighborhood you serve with granular demographic and behavioral insights.',
      },
      {
        title: 'Seasonal Trend Prediction',
        description: 'Stay ahead of seasonal changes with AI that learns from local weather patterns, events, and historical data.',
      },
      {
        title: 'Competitive Intelligence',
        description: 'Monitor competitor pricing, new locations, and market moves to maintain your competitive edge.',
      },
      {
        title: 'Custom Menu Optimization',
        description: 'AI-recommended menu items and pricing strategies tailored to each location\'s customer base.',
      },
    ],
    cta: {
      title: 'Ready to Transform Your Coffee Business?',
      description: 'Join other regional chains that have increased customer retention by 47% with our hyper-local AI.',
      primaryButton: 'Schedule Your Demo',
      secondaryButton: 'View Case Study',
    },
    contact: {
      name: 'Sarah Johnson',
      email: 'sarah@apply.codes',
      phone: '(555) 123-4567',
    },
    seo: {
      title: 'Custom AI Solutions Pricing for Regional Coffee Chain | apply.codes',
      description: 'Discover custom AI pricing for your regional coffee chain. Hyper-local customer analytics, trend prediction, and market intelligence tailored for your business.',
    },
  },
  'local-hardware-store': {
    clientSlug: 'local-hardware-store',
    clientName: 'Local Hardware Store',
    hero: {
      title: 'Smart Inventory Management for Hardware Stores',
      subtitle: 'Custom AI solutions to eliminate stockouts and optimize inventory',
      badge: 'Built for Local Hardware Stores',
    },
    tiers: [
      {
        id: 'basic',
        name: 'Inventory Intelligence',
        price: '$1,800',
        period: 'month',
        description: 'Essential inventory management for single-location stores',
        features: [
          'AI-powered demand forecasting',
          'Seasonal inventory planning',
          'Stockout prevention alerts',
          'Basic supplier optimization',
          'Weekly inventory reports',
          'Email support',
        ],
        ctaText: 'Optimize Inventory',
      },
      {
        id: 'advanced',
        name: 'Smart Store Operations',
        price: '$3,200',
        period: 'month',
        description: 'Complete store optimization with advanced analytics',
        features: [
          'Advanced demand forecasting',
          'Local project trend analysis',
          'Dynamic pricing recommendations',
          'Supplier performance tracking',
          'Customer behavior insights',
          'Daily automated reports',
          'Phone support',
          'Monthly consultation calls',
        ],
        ctaText: 'Transform Operations',
        popular: true,
      },
      {
        id: 'enterprise',
        name: 'Multi-Store Network',
        price: 'Custom',
        description: 'Full-scale AI for hardware store chains',
        features: [
          'Multi-location inventory optimization',
          'Regional demand pattern analysis',
          'Supply chain optimization',
          'Competitive pricing intelligence',
          'Custom reporting dashboards',
          'Dedicated account manager',
          'Priority support',
          'Weekly strategy sessions',
        ],
        ctaText: 'Contact for Pricing',
      },
    ],
    additionalFeatures: [
      {
        title: 'Seasonal Demand Prediction',
        description: 'Anticipate seasonal spikes in demand for construction materials, gardening supplies, and home improvement items.',
      },
      {
        title: 'Local Project Intelligence',
        description: 'Monitor local construction permits and community projects to predict material needs before they spike.',
      },
      {
        title: 'Supplier Optimization',
        description: 'AI-driven supplier performance tracking and cost optimization to maximize your profit margins.',
      },
      {
        title: 'Smart Reordering',
        description: 'Automated reorder suggestions based on historical data, seasonal patterns, and local demand forecasts.',
      },
    ],
    cta: {
      title: 'Stop Losing Sales to Stockouts',
      description: 'Join hardware stores that have reduced stockouts by 89% and increased profit margins by 26%.',
      primaryButton: 'Get Started Today',
      secondaryButton: 'See Success Story',
    },
    contact: {
      name: 'Mike Thompson',
      email: 'mike@apply.codes',
      phone: '(555) 987-6543',
    },
    seo: {
      title: 'AI Inventory Management Pricing for Hardware Stores | apply.codes',
      description: 'Custom AI inventory management solutions for local hardware stores. Eliminate stockouts, optimize inventory, and increase profits with smart demand forecasting.',
    },
  },
};

export const getPricingConfig = (clientSlug: string): PricingConfig | null => {
  return pricingConfigs[clientSlug] || null;
};

export const getAllClientSlugs = (): string[] => {
  return Object.keys(pricingConfigs);
};
