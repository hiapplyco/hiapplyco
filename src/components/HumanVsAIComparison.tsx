import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Users, Bot, TrendingUp, Lightbulb, Heart, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ComparisonItem {
  useCase: string;
  icon?: React.ReactNode;
  thumbsUp: string;
  thumbsDown: string;
}

const humanReasons: ComparisonItem[] = [
  {
    useCase: "🤝 Strategic Partnerships",
    thumbsUp: "Builds trust through personal relationships, negotiates complex deals, reads room dynamics",
    thumbsDown: "Limited to one meeting at a time, relationship-building takes months/years"
  },
  {
    useCase: "💡 Innovation & R&D",
    thumbsUp: "Creative problem-solving, connects disparate ideas, thinks outside existing patterns",
    thumbsDown: "Innovation speed varies by individual, costly talent to retain"
  },
  {
    useCase: "🎯 Customer Success (High-Value)",
    thumbsUp: "Manages enterprise accounts, provides white-glove service, handles escalations with empathy",
    thumbsDown: "Expensive per customer, doesn't scale, inconsistent service quality"
  },
  {
    useCase: "🏢 C-Suite Decision Making",
    thumbsUp: "Considers company culture, makes judgment calls, takes calculated risks",
    thumbsDown: "Decisions influenced by politics/emotions, limited data processing capacity"
  },
  {
    useCase: "🎨 Brand & Creative Direction",
    thumbsUp: "Understands cultural zeitgeist, creates emotional connections, defines brand voice",
    thumbsDown: "Subjective opinions, creative blocks, expensive creative talent"
  },
  {
    useCase: "🔧 Complex Problem Resolution",
    thumbsUp: "Handles edge cases, manages crises, adapts to unprecedented situations",
    thumbsDown: "Solution quality varies by experience, knowledge silos between employees"
  },
  {
    useCase: "🤲 Company Culture Building",
    thumbsUp: "Models values, mentors teams, creates psychological safety",
    thumbsDown: "Culture varies by manager, difficult to scale across locations"
  },
  {
    useCase: "💰 High-Stakes Sales",
    thumbsUp: "Builds exec relationships, customizes solutions, closes complex deals",
    thumbsDown: "Long sales cycles, high cost per sale, limited pipeline capacity"
  },
  {
    useCase: "⚖️ Compliance & Ethics",
    thumbsUp: "Interprets gray areas, applies ethical judgment, manages regulatory relationships",
    thumbsDown: "Interpretation inconsistencies, keeping up with regulations is time-intensive"
  },
  {
    useCase: "🌟 Leadership & Vision",
    thumbsUp: "Inspires teams, sets vision, navigates uncertainty with intuition",
    thumbsDown: "Leadership quality varies, succession planning challenges, key person risk"
  }
];

const aiReasons: ComparisonItem[] = [
  {
    useCase: "📧 Customer Service (Tier 1)",
    thumbsUp: "Handles unlimited inquiries 24/7, instant responses, consistent quality",
    thumbsDown: "Can't handle complex emotions, customers may demand human escalation"
  },
  {
    useCase: "📊 Data Analysis & Reporting",
    thumbsUp: "Processes millions of data points, identifies patterns humans miss, real-time insights",
    thumbsDown: "Lacks business context, can't explain \"why\" behind numbers"
  },
  {
    useCase: "🔄 Process Automation",
    thumbsUp: "Eliminates repetitive tasks, zero errors, scales infinitely without hiring",
    thumbsDown: "Rigid rule-following, can't adapt to exceptions without reprogramming"
  },
  {
    useCase: "📝 Content Generation",
    thumbsUp: "Creates marketing copy at scale, A/B tests variations, SEO optimization",
    thumbsDown: "May lack brand authenticity, requires human review for accuracy"
  },
  {
    useCase: "💳 Financial Operations",
    thumbsUp: "Processes invoices/payments instantly, fraud detection, accurate forecasting",
    thumbsDown: "Can't negotiate payment terms, misses relationship nuances"
  },
  {
    useCase: "🎯 Lead Scoring & Qualification",
    thumbsUp: "Analyzes thousands of leads instantly, predicts conversion probability, works 24/7",
    thumbsDown: "May miss high-potential outliers, can't read human intuition"
  },
  {
    useCase: "📅 Operations Management",
    thumbsUp: "Optimizes scheduling/routing, manages inventory, predicts maintenance needs",
    thumbsDown: "Can't handle unexpected disruptions, lacks human flexibility"
  },
  {
    useCase: "🔍 Market Intelligence",
    thumbsUp: "Monitors competitors 24/7, analyzes trends across data sources, alerts on changes",
    thumbsDown: "Can't interpret strategic implications, may miss context"
  },
  {
    useCase: "💬 Sales Enablement",
    thumbsUp: "Personalizes outreach at scale, suggests next best actions, automates follow-ups",
    thumbsDown: "Can feel impersonal, may annoy high-value prospects"
  },
  {
    useCase: "📈 Performance Monitoring",
    thumbsUp: "Tracks KPIs in real-time, identifies anomalies, predicts outcomes",
    thumbsDown: "Can't understand human factors, may encourage gaming metrics"
  }
];

const HumanVsAIComparison = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Human vs AI in Business Operations 2025: <span className="text-gradient-purple-green">The Ultimate Decision Guide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The most successful businesses in 2025 won't choose between humans OR AI – they'll strategically deploy both. 
            We've mastered both approaches to help you know exactly when to use which.
          </p>
        </div>

        <Tabs defaultValue="comparison" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value="stats">2025 Stats</TabsTrigger>
            <TabsTrigger value="hybrid">Hybrid Approach</TabsTrigger>
          </TabsList>

          <TabsContent value="comparison" className="space-y-12 mt-8">
            {/* Human Advantages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Top 10 Reasons to Keep HUMANS in Your Business</h3>
              </div>
              
              <div className="grid gap-4">
                {humanReasons.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-12 gap-0">
                        <div className="md:col-span-3 p-4 bg-muted/30 font-semibold flex items-center">
                          {item.useCase}
                        </div>
                        <div className="md:col-span-4 p-4 border-r">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item.thumbsUp}</span>
                          </div>
                        </div>
                        <div className="md:col-span-5 p-4">
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item.thumbsDown}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* AI Advantages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold">Top 10 Reasons to Use AI in Your Business</h3>
              </div>
              
              <div className="grid gap-4">
                {aiReasons.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-12 gap-0">
                        <div className="md:col-span-3 p-4 bg-muted/30 font-semibold flex items-center">
                          {item.useCase}
                        </div>
                        <div className="md:col-span-4 p-4 border-r">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item.thumbsUp}</span>
                          </div>
                        </div>
                        <div className="md:col-span-5 p-4">
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item.thumbsDown}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">📊 The 2025 Business Reality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">Companies planning AI increase</span>
                      <span className="text-2xl font-bold text-accent">92%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">Productivity gains from AI</span>
                      <span className="text-2xl font-bold text-accent">$4.4T</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">New jobs by 2030</span>
                      <span className="text-2xl font-bold text-accent">170M</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">Companies at AI maturity</span>
                      <span className="text-2xl font-bold text-accent">1%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">⚡ Critical Success Factors</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-accent">1.</span>
                      <div>
                        <span className="font-semibold">Start with processes, not people</span>
                        <span className="text-muted-foreground ml-2">- Automate tasks, not jobs</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-accent">2.</span>
                      <div>
                        <span className="font-semibold">Invest in human skills that AI can't replace</span>
                        <span className="text-muted-foreground ml-2">- Leadership, creativity, relationships</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-accent">3.</span>
                      <div>
                        <span className="font-semibold">Use AI to amplify human capabilities</span>
                        <span className="text-muted-foreground ml-2">- Not replace them entirely</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-accent">4.</span>
                      <div>
                        <span className="font-semibold">Maintain human oversight</span>
                        <span className="text-muted-foreground ml-2">- For quality, ethics, and strategic alignment</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-accent">5.</span>
                      <div>
                        <span className="font-semibold">Plan for reskilling</span>
                        <span className="text-muted-foreground ml-2">- Help employees transition to higher-value work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hybrid" className="mt-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">🎯 The Business Owner's Decision Framework</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-semibold">
                        <Users className="w-5 h-5 text-purple-600" />
                        Keep Humans When You Need:
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Relationship capital (investors, key customers, partners)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Creative innovation (product development, marketing strategy)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Ethical judgment (compliance, crisis management)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Cultural leadership (team building, vision setting)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Complex negotiation (M&A, enterprise sales)
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-semibold">
                        <Bot className="w-5 h-5 text-green-600" />
                        Deploy AI When You Need:
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Scale without hiring (customer service, data processing)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          24/7 availability (support, monitoring, responses)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Consistent quality (process execution, compliance checks)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Speed to market (content creation, analysis, reporting)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Cost reduction (automation of repetitive tasks)
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl">🚀 The Bottom Line</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-medium mb-4">
                    The most successful businesses in 2025 won't choose between humans OR AI - they'll strategically deploy both. 
                    Use AI to handle the predictable and scalable, while investing in humans for the creative, relational, and strategic. 
                    Your competitive advantage lies in knowing when to use which.
                  </p>
                  <div className="mt-6 p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Remember:</span> McKinsey reports $4.4 trillion in potential productivity gains from AI, 
                      but only 1% of companies have reached AI maturity. The opportunity is massive for those who act strategically now.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <p className="text-lg font-semibold mb-6">
                  Ready to build the perfect human + AI strategy for your business?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center btn-gradient-border px-8 py-4 rounded-lg font-medium"
                  >
                    <span>Get Started Today</span>
                  </a>
                  <a 
                    href="https://apply.codes" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Explore Our Platform →
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HumanVsAIComparison;