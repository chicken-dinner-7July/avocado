import React from 'react';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface HeroSectionProps {
  onExploreProducts: () => void;
}

export function HeroSection({ onExploreProducts }: HeroSectionProps) {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Open Source",
      description: "All projects are open source and community driven"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Modern Tech",
      description: "Built with the latest technologies and best practices"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Community",
      description: "Join our growing community of developers and creators"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to Big Mango Tree
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover innovative software solutions crafted with passion. 
            From creative tools to productivity apps, we build software that makes a difference.
          </p>
          <Button onClick={onExploreProducts} size="lg" className="group">
            Explore Our Products
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}