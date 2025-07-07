import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is hyper-local AI and how does it help small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hyper-local AI analyzes neighborhood-specific data to provide insights tailored to your exact location. Unlike generic AI tools, our solutions understand local customer behavior, competition, and market dynamics. For example, a restaurant in Brooklyn gets different insights than one in Austin, helping you make better decisions based on your specific community."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can AI solutions be implemented for my small business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI solutions are designed for rapid deployment, typically taking just 2-4 weeks from start to finish. We focus on SMB-simple implementations that avoid enterprise complexity while delivering immediate value. Most clients see their first results within 30 days of starting."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Apply different from traditional consultants or enterprise AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apply combines the best of both worlds at SMB-friendly prices. Unlike consultants who only provide human expertise ($10K+ per project), or enterprise AI that's purely automated ($5K+ monthly), we offer both starting at $198/month. Plus, our hyper-local focus and 2-4 week implementation timeframe are unmatched in the industry."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical ROI timeline for Apply solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see measurable ROI within 60-90 days. Healthcare practices report 47% faster patient processing. Retail businesses achieve 35% reduction in inventory costs. Legal firms save 20+ hours weekly on document review. Your specific ROI depends on your industry and implementation scope, but we guarantee results within 90 days."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries does Apply specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have proven expertise in six key sectors: Healthcare (patient management, compliance), Finance (risk assessment, local analysis), Legal (contract analysis, case management), Manufacturing (process optimization, quality control), Retail (inventory, customer insights), and Education (student engagement, admin automation). Each solution is tailored to industry-specific regulations and workflows."
        }
      },
      {
        "@type": "Question",
        "name": "How does apply.codes integrate with the AI solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "apply.codes is our specialized AI-powered local hiring platform that seamlessly integrates with our broader AI solutions. It uses the same hyper-local technology to help you find and recruit talent in your specific area. Many clients use both platforms together for comprehensive business transformation."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum investment to get started with Apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Starter plan begins at just $198/month, which includes 1-3 custom AI agents tailored to your industry. This is significantly more affordable than enterprise AI solutions that typically cost $5,000+ monthly. There's no large upfront investment, and we offer a 30-day money-back guarantee."
        }
      },
      {
        "@type": "Question",
        "name": "Can Apply's AI integrate with my existing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our AI agents are designed to work with your current tools and workflows. We support integration with popular SMB platforms like QuickBooks, Salesforce, Square, and industry-specific software. Our team handles the technical integration, so you don't need IT expertise."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Transform Your SMB with Hyper-Local AI",
    "description": "A step-by-step guide to implementing AI solutions for small and medium businesses",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Apply, Co. account"
      },
      {
        "@type": "HowToSupply",
        "name": "Business requirements documentation"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Apply AI platform"
      },
      {
        "@type": "HowToTool",
        "name": "Industry expert consultation"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Initial Consultation",
        "text": "Schedule a consultation to analyze your business and local market dynamics",
        "url": "https://hiapply.co#contact"
      },
      {
        "@type": "HowToStep",
        "name": "AI Agent Design",
        "text": "Our team designs custom AI agents tailored to your specific workflows and industry requirements"
      },
      {
        "@type": "HowToStep",
        "name": "Deployment & Integration",
        "text": "Deploy AI solutions and integrate with your existing systems (QuickBooks, Salesforce, etc.)"
      },
      {
        "@type": "HowToStep",
        "name": "Training & Optimization",
        "text": "Train your team and optimize performance based on real-world usage and local market data"
      }
    ],
    "totalTime": "P14D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "198"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Apply AI - First AI Agent Builder for Every Industry",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "198",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "198",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "First AI agents for Recruitment industry",
      "Pioneer in Entertainment AI agents",
      "First Legal AI automation platform",
      "Sales Ops AI innovation leader",
      "AI solutions for any company size",
      "Fortune 500 to SMB deployment",
      "Proven results across all industries",
      "2-4 week rapid deployment",
      "apply.codes recruitment platform"
    ]
  };

  const pioneeringClaimsSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Apply, Co.",
    "award": [
      "First to build AI agents for Recruitment",
      "First to build AI agents for Entertainment",
      "First to build AI agents for Legal industry",
      "First to build AI agents for Sales Operations"
    ],
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "AI Agent Development",
        "description": "Pioneering AI agent development since inception, first in multiple industries"
      },
      {
        "@type": "Thing",
        "name": "apply.codes",
        "description": "First AI-powered recruitment platform with hyper-local capabilities"
      }
    ],
    "slogan": "First to Build AI Agents for Every Industry"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pioneeringClaimsSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;