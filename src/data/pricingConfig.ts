
import { PricingConfig, PricingTier } from '../types/pricing';

// Helper function to create standard tiers
const createTier = (
  id: string,
  name: string,
  price: string,
  description: string,
  features: string[],
  ctaText: string,
  period?: string,
  popular?: boolean
): PricingTier => ({
  id,
  name,
  price,
  period,
  description,
  features,
  ctaText,
  popular
});

// Common feature sets
const commonFeatures = {
  basicSupport: ['Email support'],
  phoneSupport: ['Phone support', 'Email support'],
  prioritySupport: ['Priority support', 'Phone support', 'Email support'],
  basicReporting: ['Weekly reports'],
  advancedReporting: ['Daily automated reports'],
  customReporting: ['Custom reporting dashboards'],
  basicConsultation: ['Monthly consultation'],
  regularConsultation: ['Bi-weekly strategy sessions'],
  dedicatedSupport: ['Dedicated account manager', 'Weekly strategy sessions']
};

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
      createTier(
        'starter',
        'Market Insights',
        '$2,500',
        'Perfect for getting started with local customer analytics',
        [
          'Customer preference tracking for 2-3 locations',
          'Basic neighborhood demographic analysis',
          ...commonFeatures.basicReporting,
          ...commonFeatures.basicSupport,
          ...commonFeatures.basicConsultation,
        ],
        'Start with Insights',
        'month'
      ),
      createTier(
        'growth',
        'Multi-Location AI',
        '$4,500',
        'Scale across all your locations with advanced AI',
        [
          'Customer preference tracking for up to 10 locations',
          'Advanced neighborhood trend prediction',
          'Real-time inventory optimization',
          'Custom menu recommendations by location',
          ...commonFeatures.advancedReporting,
          ...commonFeatures.phoneSupport,
          ...commonFeatures.regularConsultation,
        ],
        'Scale Your Business',
        'month',
        true
      ),
      createTier(
        'enterprise',
        'Regional Dominance',
        'Custom',
        'Complete AI-powered regional market control',
        [
          'Unlimited locations',
          'Competitive intelligence tracking',
          'Predictive market expansion analysis',
          'Custom AI model training',
          'Real-time customer behavior analysis',
          ...commonFeatures.dedicatedSupport,
          'White-label reporting',
        ],
        'Contact for Pricing'
      )
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
      createTier(
        'basic',
        'Inventory Intelligence',
        '$1,800',
        'Essential inventory management for single-location stores',
        [
          'AI-powered demand forecasting',
          'Seasonal inventory planning',
          'Stockout prevention alerts',
          'Basic supplier optimization',
          ...commonFeatures.basicReporting,
          ...commonFeatures.basicSupport,
        ],
        'Optimize Inventory',
        'month'
      ),
      createTier(
        'advanced',
        'Smart Store Operations',
        '$3,200',
        'Complete store optimization with advanced analytics',
        [
          'Advanced demand forecasting',
          'Local project trend analysis',
          'Dynamic pricing recommendations',
          'Supplier performance tracking',
          'Customer behavior insights',
          ...commonFeatures.advancedReporting,
          ...commonFeatures.phoneSupport,
          'Monthly consultation calls',
        ],
        'Transform Operations',
        'month',
        true
      ),
      createTier(
        'enterprise',
        'Multi-Store Network',
        'Custom',
        'Full-scale AI for hardware store chains',
        [
          'Multi-location inventory optimization',
          'Regional demand pattern analysis',
          'Supply chain optimization',
          'Competitive pricing intelligence',
          ...commonFeatures.customReporting,
          ...commonFeatures.dedicatedSupport,
          ...commonFeatures.prioritySupport,
        ],
        'Contact for Pricing'
      )
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

  'blue-zones-health': {
    clientSlug: 'blue-zones-health',
    clientName: 'Blue Zones Health',
    hero: {
      title: 'SMB Hiring - Staffing Enterprise Recruitment Intelligence',
      subtitle: 'AI-powered recruitment platform for finding local talent through intelligent matching',
      badge: 'Effective July 10, 2025 – October 10, 2025',
    },
    tiers: [
      createTier(
        'standard',
        'Standard',
        '$198',
        'Perfect for small businesses getting started with AI recruitment',
        [
          '1 user included',
          'Additional users: $10/month',
          '2 hours/month email support',
          'Basic branding customization',
          'Basic analytics & reports',
          'Guided setup onboarding',
          '7-day free trial',
        ],
        'Start Standard Plan',
        'month'
      ),
      createTier(
        'professional',
        'Professional',
        '$298',
        'Advanced features for growing businesses',
        [
          'Up to 3 users included',
          'Additional users: $8/month',
          '3 hours/month email + chat support',
          'Advanced branding customization',
          'Cross-platform integration',
          'Standard analytics & reports',
          'Advanced guided setup',
          '14-day free trial',
        ],
        'Choose Professional',
        'month',
        true
      ),
      createTier(
        'enterprise',
        'Enterprise',
        '$548',
        'Complete solution for established businesses',
        [
          'Unlimited users included',
          '5 hours/month email + chat support',
          'Full white-labeling',
          'Full integration (Rippling +)',
          'Advanced analytics & reports',
          'Dedicated support onboarding',
          '21-day free trial + strategic call',
        ],
        'Go Enterprise',
        'month'
      )
    ],
    additionalFeatures: [
      {
        title: 'AI Matching Technology',
        description: 'Advanced AI algorithms match candidates based on neighborhood proximity and community connection for better local hiring.',
      },
      {
        title: 'Cost Efficiency',
        description: 'Reduce internal operational costs by 20-30% compared to traditional recruitment methods.',
      },
      {
        title: 'Integrated Platform',
        description: 'All recruitment tools in one AI-driven management interface for enhanced user experience and immediate ROI.',
      },
      {
        title: 'Competitive Advantage',
        description: 'Cost-effective solution compared to competitors ranging from $35,000 to $200,000 for mid-range solutions.',
      },
    ],
    cta: {
      title: 'Unlock Your Hiring Potential with Apply!',
      description: 'Most SMB solutions can be deployed within 2-4 weeks, delivering immediate ROI without disrupting your operations.',
      primaryButton: 'Schedule Your Complimentary 30-Minute Call Today!',
      secondaryButton: 'Learn More',
    },
    contact: {
      name: 'Martin Moreno',
      email: 'martin@hiapply.co',
      phone: '(301) 639-2545',
    },
    seo: {
      title: 'SMB Hiring Enterprise Recruitment Intelligence Pricing | apply.codes',
      description: 'AI-powered recruitment platform for Blue Zones Health. Find local talent through intelligent matching based on neighborhood proximity and community connection.',
    },
  },
};

export const getPricingConfig = (clientSlug: string): PricingConfig | null => {
  return pricingConfigs[clientSlug] || null;
};

export const getAllClientSlugs = (): string[] => {
  return Object.keys(pricingConfigs);
};
