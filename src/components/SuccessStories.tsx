
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Building, TrendingUp, DollarSign, Users } from 'lucide-react';

const SuccessStories = () => {
  const stories = [{
    business: "Regional Coffee Chain",
    location: "Midwest, 6 locations",
    challenge: "Struggling to compete with national chains while maintaining local identity",
    solution: "Hyper-local customer preference AI that predicted neighborhood-specific drink trends",
    results: ["47% increase in repeat customers", "32% boost in average transaction value", "Created 5 neighborhood-specific menu items that became local favorites"],
    icon: Building,
    quote: "The AI understood our neighborhoods better than we did after 10 years of business. It's like having a data analyst who's lived on each street.",
    person: "Sarah K., Owner"
  }, {
    business: "Local Hardware Store",
    location: "Rural Pennsylvania",
    challenge: "Inventory management issues causing stockouts of essential items",
    solution: "AI inventory system trained on local seasonal patterns and community projects",
    results: ["89% reduction in high-demand stockouts", "26% decrease in excess seasonal inventory", "Identified 3 new product categories based on local construction trends"],
    icon: TrendingUp,
    quote: "Our AI now knows when the town is gearing up for home projects before they even start buying materials. It's transformed how we stock our store.",
    person: "Michael T., Store Manager"
  }, {
    business: "Community Pharmacy Group",
    location: "Southeast, 4 locations",
    challenge: "Difficulty personalizing care for diverse neighborhood demographics",
    solution: "Hyper-local health trends AI with language and cultural customization",
    results: ["52% improvement in medication adherence", "41% increase in preventative health service utilization", "Expanded multilingual services based on AI neighborhood analysis"],
    icon: Users,
    quote: "The localized AI helped us understand the unique health challenges in each neighborhood we serve. We're now seen as part of the community fabric.",
    person: "Dr. Ramirez, Head Pharmacist"
  }];

  return (
    <section id="success-stories" className="section-spacing px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">SMB Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Real results from small and medium businesses that have implemented our hyper-local AI solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <Card key={index} className="glass glass-hover animate-fade-up hover:scale-[1.02] transition-all duration-300" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{story.business}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{story.location}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-accent">Solution:</h4>
                    <p className="text-sm text-muted-foreground">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">Results:</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t">
                  <div className="w-full">
                    <blockquote className="text-sm italic text-muted-foreground mb-2">
                      "{story.quote}"
                    </blockquote>
                    <cite className="text-xs font-medium text-accent">— {story.person}</cite>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
