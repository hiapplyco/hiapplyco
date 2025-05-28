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
  return;
};
export default SuccessStories;