
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Building, TrendingUp, DollarSign, Users } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      business: "Regional Coffee Chain",
      location: "Midwest, 6 locations",
      challenge: "Struggling to compete with national chains while maintaining local identity",
      solution: "Hyper-local customer preference AI that predicted neighborhood-specific drink trends",
      results: [
        "47% increase in repeat customers",
        "32% boost in average transaction value",
        "Created 5 neighborhood-specific menu items that became local favorites"
      ],
      icon: Building,
      quote: "The AI understood our neighborhoods better than we did after 10 years of business. It's like having a data analyst who's lived on each street.",
      person: "Sarah K., Owner"
    },
    {
      business: "Local Hardware Store",
      location: "Rural Pennsylvania",
      challenge: "Inventory management issues causing stockouts of essential items",
      solution: "AI inventory system trained on local seasonal patterns and community projects",
      results: [
        "89% reduction in high-demand stockouts",
        "26% decrease in excess seasonal inventory",
        "Identified 3 new product categories based on local construction trends"
      ],
      icon: TrendingUp,
      quote: "Our AI now knows when the town is gearing up for home projects before they even start buying materials. It's transformed how we stock our store.",
      person: "Michael T., Store Manager"
    },
    {
      business: "Community Pharmacy Group",
      location: "Southeast, 4 locations",
      challenge: "Difficulty personalizing care for diverse neighborhood demographics",
      solution: "Hyper-local health trends AI with language and cultural customization",
      results: [
        "52% improvement in medication adherence",
        "41% increase in preventative health service utilization",
        "Expanded multilingual services based on AI neighborhood analysis"
      ],
      icon: Users,
      quote: "The localized AI helped us understand the unique health challenges in each neighborhood we serve. We're now seen as part of the community fabric.",
      person: "Dr. Ramirez, Head Pharmacist"
    }
  ];

  return (
    <section id="success-stories" className="section-spacing px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">SMB Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Real small businesses achieving remarkable results with hyper-local AI implementations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <Card key={index} className="animate-fade-up glass glass-hover" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-accent/10 text-accent p-2 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{story.business}</CardTitle>
                      <CardDescription>{story.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Challenge</h4>
                    <p className="text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Hyper-Local Solution</h4>
                    <p className="text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Results</h4>
                    <ul className="text-sm space-y-1 pl-4">
                      {story.results.map((result, i) => (
                        <li key={i} className="list-disc list-outside ml-2">{result}</li>
                      ))}
                    </ul>
                  </div>
                  <blockquote className="border-l-2 border-accent/30 pl-4 italic text-sm mt-4">
                    "{story.quote}"
                    <footer className="text-xs text-muted-foreground mt-1 not-italic">— {story.person}</footer>
                  </blockquote>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 max-w-xl animate-fade-up animation-delay-300">
            <DollarSign className="h-8 w-8 text-accent flex-shrink-0" />
            <p className="text-sm font-medium">
              SMBs using our hyper-local AI solutions see an average of 39% ROI within the first 6 months of implementation, with minimal disruption to existing operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
