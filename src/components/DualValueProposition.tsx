import React from 'react';
import { Users, Bot, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DualValueProposition = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Two Powerful Solutions. One Strategic Partner.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether your industry needs human expertise or artificial intelligence—or both—we deliver 
            transformative solutions tailored to your specific challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Expert Talent Side */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Industry Experts On-Demand</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Access top-tier professionals who understand your industry's unique dynamics. 
                From strategic advisors to technical specialists, we connect you with experts 
                who deliver immediate value.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <span className="text-sm">Healthcare compliance specialists</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <span className="text-sm">Financial risk analysts</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <span className="text-sm">Manufacturing process engineers</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <span className="text-sm">Legal technology consultants</span>
                </div>
              </div>

              <a 
                href="#recruitment" 
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group"
              >
                Explore Expert Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>

          {/* AI Solutions Side */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Bot className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">Custom AI Agents</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Deploy intelligent automation tailored to your workflows. Our AI agents 
                understand your industry's requirements and integrate seamlessly with 
                existing systems.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span className="text-sm">Patient intake automation</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span className="text-sm">Contract analysis systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span className="text-sm">Inventory optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span className="text-sm">Risk assessment models</span>
                </div>
              </div>

              <a 
                href="#ai-development" 
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium group"
              >
                Explore AI Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <span className="text-sm font-medium">
              Combine both for maximum impact across any industry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualValueProposition;