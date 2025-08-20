import React from 'react';
import { ArrowRight, Code2, Sparkles, Users, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

interface HeroSectionProps {
  onExploreProducts: () => void;
}

export function HeroSection({ onExploreProducts }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="relative section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Star className="w-3 h-3 mr-1" />
                  Trusted by developers
                </Badge>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Build.
                    <br />
                    <span className="text-gradient">Learn.</span>
                    <br />
                    Grow.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                    Discover innovative software solutions crafted with passion. 
                    From creative tools to productivity apps, we build software that empowers creators.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={onExploreProducts}
                    className="group text-base h-12 px-8"
                  >
                    <span className="mr-2">Find your solution</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="h-12 px-8 text-base"
                  >
                    View on GitHub
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">250k+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Writing Course Card */}
                <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900 dark:text-green-100">Development Tools</h3>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Modern development utilities
                      </p>
                    </div>
                    <Badge className="bg-green-500 text-white">New</Badge>
                  </CardContent>
                </Card>

                {/* Business Card */}
                <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 translate-y-8">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100">Creative Apps</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        Design & creativity tools
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Writing Card */}
                <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100">Collaboration</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Team productivity solutions
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics Card */}
                <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 translate-y-8">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-900 dark:text-orange-100">Analytics</h3>
                      <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                        Data visualization tools
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}