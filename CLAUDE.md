# hiapply.co Marketing & SEO Assistant Guide

## Quick Start for Claude

You are assisting with the hiapply.co marketing website - a landing page for AI consultancy specializing in hyper-local AI solutions for SMBs. Your primary mission is to optimize SEO, enhance marketing content, and drive qualified leads to apply.codes.

**Primary Directive**: Focus on SEO optimization, conversion rate improvement, and creating compelling marketing content that drives SMB clients to apply.codes for AI recruitment solutions.

## Content Strategy Guidelines

### When to Use Opus (claude-3-opus)
- **SEO Strategy**: Comprehensive keyword research, content architecture
- **Campaign Design**: Multi-channel marketing campaigns
- **Content Creation**: Long-form articles, case studies, whitepapers
- **Conversion Optimization**: Complex A/B testing, funnel analysis
- **Competitive Analysis**: Market positioning, competitor research

### When to Use Sonnet (claude-3-sonnet)
- **Copy Updates**: Headlines, CTAs, meta descriptions
- **Image Alt Text**: SEO-optimized descriptions
- **Quick Edits**: Pricing updates, contact info changes
- **Social Media**: Short posts, updates
- **Email Templates**: Simple follow-up sequences

### Task Delegation for Marketing

```bash
# For comprehensive SEO audit
Task: "SEO analysis" prompt="Analyze current SEO, find keyword gaps, suggest improvements..."
Task: "Content audit" prompt="Review all pages for SEO optimization opportunities..."

# For parallel marketing tasks
Task: "Update meta tags" | "Optimize images" | "Create alt text"

# For content creation
Task: "Write case study" prompt="Create SMB success story for hardware store client..."
```

## Business Context

### Target Audience
- **Primary**: Small and Medium Business Owners
- **Secondary**: Local Business Managers, Regional Chain Operators
- **Tertiary**: SMB Consultants and Advisors

### Value Propositions
1. **Hyper-Local AI**: Understanding neighborhood-specific needs
2. **SMB-Focused**: Not enterprise complexity, SMB simplicity
3. **Quick ROI**: 2-4 week implementation
4. **Budget-Conscious**: Affordable monthly plans starting at $198

### Key Differentiators
- Local market intelligence vs. generic AI
- SMB-specific solutions vs. enterprise tools
- Community-focused approach
- Proven ROI with specific metrics

## SEO Optimization Strategy

### Core Keywords to Target
```
Primary Keywords:
- "AI for small business"
- "hyper-local AI solutions"
- "SMB AI deployment"
- "local business AI tools"
- "AI recruitment for SMBs" (links to apply.codes)

Long-tail Keywords:
- "AI solutions for regional coffee chains"
- "inventory management AI for hardware stores"
- "local hiring AI platform"
- "neighborhood-specific AI analytics"
```

### On-Page SEO Checklist
```bash
# For every page update
- [ ] Title tag (50-60 chars) with primary keyword
- [ ] Meta description (150-160 chars) with CTA
- [ ] H1 tag with keyword variation
- [ ] Image alt text with keywords
- [ ] Internal linking to apply.codes
- [ ] Schema markup for local business
```

### Technical SEO Requirements
```bash
# Always implement
- Structured data (Organization, Product, FAQPage)
- XML sitemap generation
- Robots.txt optimization
- Canonical URLs
- Mobile-first optimization
- Core Web Vitals monitoring
```

## Content Marketing Patterns

### Landing Page Structure
```tsx
// Hero Section Pattern
<Hero>
  <Headline>Problem-aware statement with primary keyword</Headline>
  <Subheadline>Solution benefit with local emphasis</Subheadline>
  <CTA1>Primary action (high intent)</CTA1>
  <CTA2>Secondary action (research intent)</CTA2>
</Hero>

// Social Proof Section
<SocialProof>
  <Metric>Specific percentage improvement</Metric>
  <ClientType>Industry + location reference</ClientType>
  <Quote>Outcome-focused testimonial</Quote>
</SocialProof>
```

### Case Study Template
```markdown
# [Client Industry] Achieves [Specific Result] with Hyper-Local AI

## Challenge
- Local market complexity
- SMB-specific constraints
- Competitive pressure

## Solution
- Hyper-local AI implementation
- Custom neighborhood analytics
- Integration with apply.codes for hiring

## Results
- [X]% improvement in [metric]
- $[Y] monthly savings
- [Z] hours saved weekly

## Next Steps
Link to apply.codes for similar results
```

### Email Campaign Templates
```
Subject Lines:
- "How [Local Business Type] Increased [Metric] by [X]%"
- "Your Neighborhood AI Advantage: [Specific Benefit]"
- "[City] Businesses Save $[X] with Local AI"

CTA Options:
- "See How apply.codes Works for [Industry]"
- "Get Your Free SMB AI Assessment"
- "Join [X] Local Businesses Using AI"
```

## Conversion Optimization

### CTA Hierarchy
1. **Primary**: Direct to apply.codes demo/trial
2. **Secondary**: Case study downloads
3. **Tertiary**: Newsletter signup

### A/B Testing Priorities
```bash
# Test in this order
1. Hero headline variations (problem vs. solution focus)
2. CTA button text ("Get Started" vs. "See Demo")
3. Social proof placement (above vs. below fold)
4. Pricing page structure (features vs. benefits first)
5. Case study formats (video vs. text)
```

### Landing Page Optimization
```bash
# Before any campaign launch
- [ ] Page load time < 3 seconds
- [ ] Mobile responsiveness check
- [ ] Form fields minimized
- [ ] Trust signals visible
- [ ] Clear path to apply.codes
```

## Marketing Automation

### Lead Nurturing Flow
```
Day 0: Welcome + SMB AI Guide
Day 3: Case Study (industry-specific)
Day 7: ROI Calculator + apply.codes demo
Day 14: Success metrics + testimonials
Day 21: Special offer for apply.codes
```

### Tracking Implementation
```javascript
// Essential tracking events
- Hero CTA clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- apply.codes link clicks
- Contact form submissions
- Pricing page views
```

## Content Calendar Strategy

### Weekly Content Tasks
```bash
Monday: SEO audit + keyword updates
Tuesday: New case study draft
Wednesday: Social proof collection
Thursday: Email campaign creation
Friday: Performance analysis + optimization
```

### Monthly Campaigns
```
Month 1: "Local Success Stories" - Feature 3 SMB wins
Month 2: "ROI Reality Check" - Cost savings focus
Month 3: "Neighborhood Advantage" - Hyper-local benefits
```

## Quick Commands Reference

### SEO Tools
```bash
# Lighthouse audit
npm run lighthouse

# Generate sitemap
npm run generate-sitemap

# Check meta tags
npm run seo-check

# Validate structured data
npm run schema-validate
```

### Content Management
```bash
# Update meta tags
npm run update-meta

# Optimize images
npm run optimize-images

# Generate alt text
npm run generate-alts

# Deploy changes
npm run deploy
```

## Marketing Metrics to Track

### Primary KPIs
1. **Organic Traffic Growth**: Month-over-month
2. **Conversion Rate**: Visitors → apply.codes clicks
3. **Keyword Rankings**: Top 10 target keywords
4. **Lead Quality**: SMB vs. enterprise inquiries

### Secondary Metrics
- Average session duration
- Bounce rate by landing page
- Email open/click rates
- Social sharing metrics

## Integration with apply.codes

### Cross-Promotion Strategy
1. **Case Studies**: Always include apply.codes as the hiring solution
2. **CTAs**: "Hire Locally with apply.codes" variations
3. **Navigation**: Prominent apply.codes links in header/footer
4. **Content**: Reference apply.codes in blog posts about hiring

### Unified Messaging
```
hiapply.co: "We build hyper-local AI for SMBs"
     ↓
apply.codes: "AI-powered local hiring made simple"
```

## Security & Compliance

### Marketing Best Practices
1. **GDPR Compliance**: Cookie consent, privacy policy
2. **CAN-SPAM**: Unsubscribe links, physical address
3. **Accessibility**: WCAG 2.1 AA compliance
4. **Data Collection**: Minimal, purpose-driven
5. **SSL**: Always use HTTPS

## Strategic Update Protocol

When making marketing changes:

1. **New Campaign**: Document in Content Calendar section
2. **SEO Changes**: Update keyword strategy
3. **Conversion Tests**: Log in A/B Testing Priorities
4. **New Integrations**: Add to Marketing Automation
5. **Performance Wins**: Update case studies

### Update Command
```bash
# After significant marketing changes
UPDATE_CLAUDE_MD: "Added [campaign/strategy] to [section]"
```

## Emergency Response Playbook

### SEO Drops
```bash
1. Check Google Search Console for penalties
2. Validate technical SEO (crawlability, indexing)
3. Review recent content changes
4. Check competitor movements
5. Implement recovery plan
```

### Conversion Rate Drops
```bash
1. Check site functionality (forms, CTAs)
2. Review traffic sources for quality
3. Analyze user behavior flow
4. Test page load speeds
5. A/B test new variations
```

---

**Remember**: 
- Always prioritize SMB messaging over enterprise
- Every page should have a clear path to apply.codes
- Test and measure everything
- Update this document with winning strategies
- Focus on local/hyper-local differentiation

**Last Updated**: 2025-06-29
**Version**: 1.0
**Target**: Drive qualified SMB leads to apply.codes

**Quick Model Reference**:
- 🧠 Strategy/Research = Opus
- ⚡ Quick Updates = Sonnet
- 🔍 SEO Analysis = Task agent
- 🚀 Bulk Optimization = Multiple agents