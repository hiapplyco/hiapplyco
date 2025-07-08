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
    useCase: "🤝 Relationship Building",
    thumbsUp: "Creates genuine connections, builds trust through face-to-face interactions, understands cultural nuances",
    thumbsDown: "Limited by time/availability, can only meet one person at a time"
  },
  {
    useCase: "💡 Complex Decision Making",
    thumbsUp: "Applies ethical judgment, considers context, makes nuanced hiring decisions beyond data",
    thumbsDown: "Subject to unconscious bias, decisions can be inconsistent"
  },
  {
    useCase: "🎯 Cultural Fit Assessment",
    thumbsUp: "Intuitively reads body language, assesses personality fit, evaluates team dynamics",
    thumbsDown: "Personal preferences may override objectivity, limited sample size"
  },
  {
    useCase: "🔄 Adaptability & Problem-Solving",
    thumbsUp: "Handles unexpected situations, pivots strategies quickly, manages unique candidate scenarios",
    thumbsDown: "Solutions vary by individual experience, learning curve for new situations"
  },
  {
    useCase: "❤️ Emotional Intelligence",
    thumbsUp: "Provides empathy during job loss, celebrates wins, offers mentorship and support",
    thumbsDown: "Emotional involvement can cloud judgment, burnout risk"
  },
  {
    useCase: "🎨 Creative Sourcing",
    thumbsUp: "Networks at events, leverages personal connections, thinks outside traditional channels",
    thumbsDown: "Network limited by personal reach, time-intensive process"
  },
  {
    useCase: "🤲 Candidate Care",
    thumbsUp: "Offers personalized rejection feedback, provides career advice, maintains long-term relationships",
    thumbsDown: "Cannot scale personal touch to thousands, time constraints"
  },
  {
    useCase: "🔍 Deep Dive Interviews",
    thumbsUp: "Asks follow-up questions, reads between lines, adapts interview style to candidate",
    thumbsDown: "Interview quality varies by interviewer, potential for bias"
  },
  {
    useCase: "📊 Strategic Workforce Planning",
    thumbsUp: "Understands business context, anticipates future needs, aligns talent with company vision",
    thumbsDown: "Limited by personal experience, may miss data patterns"
  },
  {
    useCase: "🏆 Executive Search",
    thumbsUp: "Builds C-suite relationships, understands leadership dynamics, maintains confidentiality",
    thumbsDown: "High cost per placement, limited bandwidth for multiple searches"
  }
];

const aiReasons: ComparisonItem[] = [
  {
    useCase: "🚀 High-Volume Processing",
    thumbsUp: "Screens thousands of resumes in minutes, works 24/7, consistent evaluation criteria",
    thumbsDown: "May miss exceptional candidates with non-traditional backgrounds"
  },
  {
    useCase: "📝 Content Generation",
    thumbsUp: "Creates job descriptions instantly, personalizes outreach at scale, generates inclusive language",
    thumbsDown: "Content can feel generic without human editing, may lack company voice"
  },
  {
    useCase: "🤖 Automated Scheduling",
    thumbsUp: "Coordinates complex calendars, sends reminders, handles rescheduling automatically",
    thumbsDown: "Cannot handle special requests, lacks flexibility for unique situations"
  },
  {
    useCase: "💬 Candidate Engagement",
    thumbsUp: "Answers FAQs 24/7, provides instant responses, engages unlimited candidates simultaneously",
    thumbsDown: "Cannot handle complex queries, may frustrate candidates seeking human connection"
  },
  {
    useCase: "🎯 Skills Matching",
    thumbsUp: "Identifies transferable skills, removes degree bias, focuses on competencies over credentials",
    thumbsDown: "May miss soft skills or potential, requires quality training data"
  },
  {
    useCase: "📊 Predictive Analytics",
    thumbsUp: "Forecasts hiring needs, predicts candidate success, identifies flight risks",
    thumbsDown: "Predictions based on historical data may perpetuate past biases"
  },
  {
    useCase: "🔍 Intelligent Search",
    thumbsUp: "Understands synonyms and context, delivers relevant results, improves with usage",
    thumbsDown: "May not understand industry-specific nuances, requires ongoing training"
  },
  {
    useCase: "⚖️ Bias Reduction",
    thumbsUp: "Evaluates candidates consistently, focuses on skills not demographics, documents decisions",
    thumbsDown: "Can amplify biases if trained on biased data, lacks human intuition"
  },
  {
    useCase: "📈 Data-Driven Insights",
    thumbsUp: "Tracks pipeline health, identifies bottlenecks, provides real-time recruiting metrics",
    thumbsDown: "Data without context can mislead, requires human interpretation"
  },
  {
    useCase: "💰 Cost Efficiency",
    thumbsUp: "Reduces time-to-hire, lowers cost-per-hire, scales without adding headcount",
    thumbsDown: "High initial investment, ongoing maintenance costs, vendor lock-in risks"
  }
];

const HumanVsAIComparison = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Human vs AI in the Workplace 2025: <span className="text-gradient-purple-green">The Ultimate Guide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The future of hiring isn't human OR machine – it's human AND machine working together. 
            We've mastered both so you get the perfect solution for every challenge.
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
                <h3 className="text-2xl font-bold">Top 10 Reasons to Use HUMANS in Hiring</h3>
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
                <h3 className="text-2xl font-bold">Top 10 Reasons to Use AI in Hiring</h3>
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
                <CardTitle className="text-2xl">📊 2025 Reality Check</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">Employees familiar with AI</span>
                      <span className="text-2xl font-bold text-accent">94%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">Expect AI to handle 30%+ of work</span>
                      <span className="text-2xl font-bold text-accent">47%</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">Trust employers' AI ethics</span>
                      <span className="text-2xl font-bold text-accent">71%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <span className="font-semibold">Companies using AI for efficiency</span>
                      <span className="text-2xl font-bold text-accent">88%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">⚡ Emerging Trends to Watch</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <div>
                        <span className="font-semibold">GenAI Revolution:</span>
                        <span className="text-muted-foreground ml-2">Creating personalized outreach and job descriptions at scale</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <div>
                        <span className="font-semibold">Skills-Based Hiring:</span>
                        <span className="text-muted-foreground ml-2">AI identifying competencies over credentials</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <div>
                        <span className="font-semibold">Intelligent Assessments:</span>
                        <span className="text-muted-foreground ml-2">Predictive analytics forecasting candidate success</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <div>
                        <span className="font-semibold">Ethical AI:</span>
                        <span className="text-muted-foreground ml-2">Transparent, fair, and compliant hiring practices</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      <div>
                        <span className="font-semibold">Mass Hiring Automation:</span>
                        <span className="text-muted-foreground ml-2">Managing thousands of candidates without losing the human touch</span>
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
                  <CardTitle className="text-2xl">🎯 The Perfect Hybrid Approach for 2025</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-semibold">
                        <Bot className="w-5 h-5 text-green-600" />
                        AI Handles:
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Resume screening at scale
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Initial chatbot engagement
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Automated scheduling
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Skills matching & job recommendations
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          Data analysis & reporting
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-semibold">
                        <Users className="w-5 h-5 text-purple-600" />
                        Humans Handle:
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Final interviews & assessments
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Culture fit evaluation
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Salary negotiation
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Relationship building
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
                          Strategic hiring decisions
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl">🚀 Action Items for Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-accent">1.</span>
                      <span>Use AI to eliminate tedious tasks and free up time for relationship-building</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-accent">2.</span>
                      <span>Implement AI-powered skills assessments to expand your talent pool</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-accent">3.</span>
                      <span>Maintain human oversight for all critical hiring decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-accent">4.</span>
                      <span>Invest in AI training for your recruiting team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-accent">5.</span>
                      <span>Choose platforms that prioritize ethical AI and data privacy</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="text-center">
                <p className="text-lg font-semibold mb-6">
                  Ready to implement the perfect hybrid hiring strategy?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://apply.codes" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center btn-gradient-border px-8 py-4 rounded-lg font-medium"
                  >
                    <span>Try apply.codes Platform →</span>
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Get Expert Consultation
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