import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    category: "Industry Leadership & Experience",
    questions: [
      {
        question: "What does it mean that Apply was 'first' to build AI agents for these industries?",
        answer: "Apply pioneered functional, production-ready AI agents when others were still theorizing. We were first to deploy AI agents for Recruitment (leading to apply.codes), Entertainment (content moderation and audience analytics), Legal (contract analysis and compliance), and Sales Ops (pipeline automation). This first-mover experience means we've already solved the challenges others are just discovering."
      },
      {
        question: "Can Apply really build AI agents for any company size?",
        answer: "Absolutely. We've built AI solutions for Fortune 500 companies and neighborhood businesses alike. Our pioneering work spans from enterprise-scale recruitment platforms handling millions of candidates to boutique law firm automation processing dozens of contracts. Whether you need 100 AI agents or just one, we have proven frameworks ready to customize."
      },
      {
        question: "How does your experience as pioneers benefit my business today?",
        answer: "Being first means we've learned what works and what doesn't across every industry. We've built the frameworks, solved the integration challenges, and understand the nuances. This translates to faster deployment (2-4 weeks vs months), lower risk (proven solutions), and better ROI (we know exactly what drives results in your industry)."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "What industries has Apply pioneered AI solutions for?",
        answer: "We were first to build production AI agents for: Recruitment (apply.codes platform), Entertainment (audience engagement, content moderation), Legal (contract analysis, compliance automation), and Sales Operations (pipeline management, forecasting). We've since expanded to Healthcare, Finance, Manufacturing, Retail, and Education - building custom solutions for companies from Fortune 500 to local SMBs."
      },
      {
        question: "How quickly can AI solutions be implemented for my business?",
        answer: "Our AI solutions are designed for rapid deployment, typically taking just 2-4 weeks from start to finish. We focus on SMB-simple implementations that avoid enterprise complexity while delivering immediate value. Most clients see their first results within 30 days of starting."
      },
      {
        question: "What's the minimum investment to get started with Apply?",
        answer: "Our Starter plan begins at just $198/month, which includes 1-3 custom AI agents tailored to your industry. This is significantly more affordable than enterprise AI solutions that typically cost $5,000+ monthly. There's no large upfront investment, and we offer a 30-day money-back guarantee."
      }
    ]
  },
  {
    category: "Solutions & Services",
    questions: [
      {
        question: "How does Apply integrate human expertise with AI solutions?",
        answer: "We're unique in offering both industry experts and custom AI agents. Need a healthcare compliance specialist? We connect you. Want to automate patient intake? We build it. Many clients use both—human experts for strategy and AI for execution—creating powerful hybrid solutions that maximize efficiency."
      },
      {
        question: "Which industries does Apply specialize in?",
        answer: "We have proven expertise in six key sectors: Healthcare (patient management, compliance), Finance (risk assessment, local analysis), Legal (contract analysis, case management), Manufacturing (process optimization, quality control), Retail (inventory, customer insights), and Education (student engagement, admin automation). Each solution is tailored to industry-specific regulations and workflows."
      },
      {
        question: "What makes Apply different from traditional consultants or enterprise AI?",
        answer: "Apply combines the best of both worlds at SMB-friendly prices. Unlike consultants who only provide human expertise ($10K+ per project), or enterprise AI that's purely automated ($5K+ monthly), we offer both starting at $198/month. Plus, our hyper-local focus and 2-4 week implementation timeframe are unmatched in the industry."
      }
    ]
  },
  {
    category: "Implementation & Support",
    questions: [
      {
        question: "What is the typical ROI timeline for Apply solutions?",
        answer: "Most clients see measurable ROI within 60-90 days. Healthcare practices report 47% faster patient processing. Retail businesses achieve 35% reduction in inventory costs. Legal firms save 20+ hours weekly on document review. Your specific ROI depends on your industry and implementation scope, but we guarantee results within 90 days."
      },
      {
        question: "How does the implementation process work?",
        answer: "Week 1: We analyze your business and local market. Week 2: Design custom AI agents for your workflows. Week 3: Deploy and integrate with your systems. Week 4: Train your team and optimize performance. Throughout, you have direct access to industry experts who ensure smooth adoption."
      },
      {
        question: "What kind of support is included?",
        answer: "All plans include industry expert consultation during setup, compliance-aware deployment, and ongoing optimization. Growth plans ($498+) add priority support and custom workflow development. Enterprise plans include dedicated support teams and SLA guarantees. We're committed to your success at every level."
      }
    ]
  },
  {
    category: "Integration & Technical",
    questions: [
      {
        question: "How does apply.codes integrate with the AI solutions?",
        answer: "apply.codes is our specialized AI-powered local hiring platform that seamlessly integrates with our broader AI solutions. It uses the same hyper-local technology to help you find and recruit talent in your specific area. Many clients use both platforms together for comprehensive business transformation."
      },
      {
        question: "Can Apply's AI integrate with my existing systems?",
        answer: "Yes, our AI agents are designed to work with your current tools and workflows. We support integration with popular SMB platforms like QuickBooks, Salesforce, Square, and industry-specific software. Our team handles the technical integration, so you don't need IT expertise."
      },
      {
        question: "Is my business data secure with Apply's AI solutions?",
        answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and industry-specific privacy standards (HIPAA for healthcare, PCI for retail, etc.). Your data stays yours—we never share it with third parties or use it to train general AI models."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "What's included in the ISV Partner plan?",
        answer: "The ISV Partner plan ($998/month) is perfect for consultancies and system integrators. You get 2 custom AI solutions monthly, white-label deployment under your brand, revenue sharing opportunities, and industry-specific tools. It's designed to help you add AI capabilities to your existing service offerings."
      },
      {
        question: "Can I change plans as my business grows?",
        answer: "Yes, you can upgrade or downgrade anytime. Many clients start with our Starter plan ($198) to test 1-3 AI agents, then upgrade to Growth ($498) as they see results. There are no penalties for changing plans, and we'll help migrate your solutions seamlessly."
      },
      {
        question: "Is there a commitment period or contract?",
        answer: "No long-term contracts required. All plans are month-to-month with a 30-day money-back guarantee. You can cancel anytime, though most clients expand their usage once they see results. Annual plans are available with a 20% discount for those ready to commit."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          
          {/* TL;DR Summary Box */}
          <Card className="max-w-3xl mx-auto mb-8 bg-muted/50">
            <CardContent className="p-4">
              <p className="text-sm font-semibold mb-1">Quick Answers:</p>
              <p className="text-base">
                • Starting price: $198/month • Implementation: 2-4 weeks • ROI: 60-90 days 
                • Industries: Healthcare, Finance, Legal, Manufacturing, Retail, Education 
                • Includes: AI agents + human experts • Guarantee: 30-day money back
              </p>
            </CardContent>
          </Card>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about transforming your business with Apply's 
            hyper-local AI solutions and industry experts.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-medium text-lg pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center btn-gradient-border px-6 py-3 rounded-lg font-medium"
            >
              <span>Schedule a Consultation</span>
            </a>
            <a 
              href="mailto:martin@hiapply.co" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Email: martin@hiapply.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;