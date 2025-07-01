// SEO Configuration for hiapply.co
// Domain-agnostic keywords and metadata for multi-industry AI solutions

export const seoConfig = {
  // Base metadata
  siteName: 'Apply, Co.',
  siteUrl: 'https://hiapply.co',
  defaultTitle: 'Custom AI Agents & Industry Experts | Apply, Co.',
  titleTemplate: '%s | Apply, Co. - AI Solutions',
  
  // Domain-agnostic descriptions
  defaultDescription: 'Transform any business challenge with custom AI agents and industry experts. Specialized solutions for healthcare, finance, legal, manufacturing, retail, and education.',
  
  // Multi-industry keywords
  keywords: {
    primary: [
      'custom AI agents',
      'AI solutions for business',
      'industry experts consulting',
      'business automation AI',
      'enterprise AI development',
      'AI transformation services',
      'sector-specific AI solutions',
      'AI consulting services'
    ],
    
    byIndustry: {
      healthcare: [
        'healthcare AI solutions',
        'medical AI automation',
        'HIPAA compliant AI',
        'patient care automation',
        'healthcare industry experts'
      ],
      finance: [
        'financial AI solutions',
        'fintech automation',
        'AI risk assessment',
        'compliance automation finance',
        'finance industry experts'
      ],
      legal: [
        'legal AI solutions',
        'law firm automation',
        'contract analysis AI',
        'legal tech solutions',
        'legal industry experts'
      ],
      manufacturing: [
        'manufacturing AI solutions',
        'predictive maintenance AI',
        'quality control automation',
        'supply chain AI',
        'manufacturing experts'
      ],
      retail: [
        'retail AI solutions',
        'ecommerce automation',
        'inventory management AI',
        'retail analytics AI',
        'retail industry experts'
      ],
      education: [
        'education AI solutions',
        'edtech automation',
        'adaptive learning AI',
        'educational technology',
        'education industry experts'
      ]
    },
    
    longTail: [
      'AI solutions for [industry]',
      'custom AI agents for [business type]',
      '[industry] experts near me',
      'business automation AI [city]',
      'enterprise AI development [sector]',
      'AI consulting for [industry] businesses',
      'industry-specific AI solutions [location]',
      'expert talent + custom AI'
    ]
  },
  
  // Schema.org structured data templates
  schemas: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Apply, Co.',
      url: 'https://hiapply.co',
      logo: 'https://hiapply.co/APPLYFullwordlogo2025.png',
      description: 'Custom AI agents and industry experts for business transformation',
      sameAs: [
        'https://apply.codes',
        // Add social media URLs when available
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        availableLanguage: ['English']
      }
    },
    
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'AI Development and Consulting',
      provider: {
        '@type': 'Organization',
        name: 'Apply, Co.'
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom AI Agent Development',
              description: 'Industry-specific AI agents tailored to your business needs'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Industry Expert Placement',
              description: 'Connect with specialized talent for your sector'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Business Automation',
              description: 'End-to-end automation solutions for any industry'
            }
          }
        ]
      }
    },
    
    // FAQ Schema for common questions
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What industries do you serve with AI solutions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide custom AI solutions for healthcare, finance, legal, manufacturing, retail, education, and many other industries. Our solutions are tailored to each sector\'s unique challenges and compliance requirements.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does it take to implement custom AI agents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most custom AI agent implementations are completed within 2-4 weeks, depending on complexity and integration requirements. We provide rapid deployment without compromising quality.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide both AI technology and human experts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer a unique combination of custom AI agents and industry-specific human experts. This dual approach ensures you get both technological innovation and specialized knowledge for your business.'
          }
        }
      ]
    }
  },
  
  // Page-specific metadata
  pages: {
    home: {
      title: 'Custom AI Agents & Industry Experts for Every Business',
      description: 'Transform your business with AI solutions tailored to your industry. Healthcare, finance, legal, manufacturing, retail, education experts + custom AI automation.',
      keywords: 'custom AI agents, industry experts, business automation AI, AI solutions'
    },
    
    pricing: {
      title: 'AI Solutions Pricing - Flexible Plans for Every Industry',
      description: 'Transparent pricing for custom AI agents and industry expert services. Plans starting at $198/month with rapid implementation and measurable ROI.',
      keywords: 'AI pricing, custom AI cost, business automation pricing, AI consulting rates'
    },
    
    industries: {
      title: 'AI Solutions by Industry - Healthcare, Finance, Legal & More',
      description: 'Industry-specific AI solutions and expert talent for healthcare, finance, legal, manufacturing, retail, and education. Custom agents for your sector.',
      keywords: 'industry AI solutions, sector-specific AI, vertical AI solutions'
    },
    
    about: {
      title: 'About Apply, Co. - Leaders in Custom AI Development',
      description: 'Learn how Apply, Co. combines AI innovation with industry expertise to transform businesses across all sectors. Your partner in AI-driven growth.',
      keywords: 'about Apply Co, AI company, custom AI developers, AI consulting firm'
    }
  },
  
  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://hiapply.co/APPLYFullwordlogo2025.png',
        width: 1200,
        height: 630,
        alt: 'Apply, Co. - Custom AI Solutions'
      }
    ]
  },
  
  // Twitter Card defaults
  twitter: {
    cardType: 'summary_large_image',
    site: '@applyco', // Update when Twitter handle is created
    creator: '@applyco'
  }
};

// Helper function to generate industry-specific meta tags
export function getIndustryMetaTags(industry: string) {
  const industryKey = industry.toLowerCase();
  const industryKeywords = seoConfig.keywords.byIndustry[industryKey as keyof typeof seoConfig.keywords.byIndustry] || [];
  
  return {
    title: `${industry} AI Solutions & Expert Talent`,
    description: `Transform your ${industry.toLowerCase()} business with custom AI agents and industry experts. Rapid implementation, compliance-ready, measurable ROI.`,
    keywords: [...seoConfig.keywords.primary, ...industryKeywords].join(', ')
  };
}

// Helper function to generate location-specific meta tags
export function getLocationMetaTags(location: string, industry?: string) {
  const baseTitle = industry 
    ? `${industry} AI Solutions in ${location}`
    : `AI Business Solutions in ${location}`;
    
  return {
    title: baseTitle,
    description: `Local AI solutions and industry experts serving ${location}. Custom AI agents for ${industry || 'businesses'} with neighborhood-specific insights.`,
    keywords: `AI solutions ${location}, ${industry || 'business'} automation ${location}, local AI experts`
  };
}

// Generate schema for specific industry pages
export function getIndustrySchema(industry: string, details: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry} AI Solutions`,
    description: details.description,
    provider: {
      '@type': 'Organization',
      name: 'Apply, Co.',
      url: 'https://hiapply.co'
    },
    areaServed: 'United States',
    serviceType: `AI Solutions for ${industry}`,
    offers: {
      '@type': 'Offer',
      priceRange: '$$',
      availability: 'https://schema.org/InStock'
    }
  };
}