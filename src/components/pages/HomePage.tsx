import React from 'react';
import { HeroSection } from '../organisms/HeroSection';
import { ProductGrid } from '../organisms/ProductGrid';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Zap, Shield, Code, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Product } from '../../types';

interface HomePageProps {
  onNavigateToProducts: () => void;
  onSelectProduct: (product: Product) => void;
}

export function HomePage({ onNavigateToProducts, onSelectProduct }: HomePageProps) {
  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Open Source",
      description: "All projects are open source with MIT licensing",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Modern Stack",
      description: "Built with React, TypeScript, and latest technologies",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Well Tested",
      description: "Comprehensive testing and continuous integration",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Community",
      description: "Active community with regular contributions",
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b812c1c8?w=100&h=100&fit=crop&crop=face",
      content: "The applications here have saved me countless hours. The code quality is exceptional and the documentation is thorough."
    },
    {
      name: "Marcus Rodriguez", 
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "I've integrated several of these tools into our workflow. They're reliable, well-maintained, and user-friendly."
    },
    {
      name: "Emma Thompson",
      role: "Design Lead",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The design tools are intuitive and powerful. Perfect for both beginners and experienced designers."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onExploreProducts={onNavigateToProducts} />
      
      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Why Choose Our Tools</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Built for developers, by developers</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every project is crafted with attention to detail, following best practices and modern development standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ProductGrid onSelectProduct={onSelectProduct} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">What People Say</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by teams worldwide</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <CardContent className="p-12 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Join thousands of developers using our tools to build amazing applications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={onNavigateToProducts} className="group">
                  Browse All Projects
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}