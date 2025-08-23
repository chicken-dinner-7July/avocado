import React from 'react';
import { HeroSection } from '../organisms/HeroSection';
import { ProductGrid } from '../organisms/ProductGrid';
import { Card, CardContent } from '../ui/card';
import { Code, Zap, Shield, Users } from 'lucide-react';
import { Product } from '../../types';

interface HomePageProps {
  onNavigateToProducts: () => void;
  onSelectProduct: (product: Product) => void;
}

export function HomePage({ onNavigateToProducts, onSelectProduct }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onExploreProducts={onNavigateToProducts} />
      
      {/* Projects Section */}
      <section className="section-padding-lg bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">Projects</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We pick the technologies we support meticulously, jump in early and know them inside-out.
              </p>
            </div>
            
            <ProductGrid onSelectProduct={onSelectProduct} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding-lg bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  We pick the networks we{' '}
                  <span className="text-primary">support</span>{' '}
                  meticulously, jump in early and know them inside-out.
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-background border-border minimal-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-black" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Development</h3>
                      <p className="text-sm text-muted-foreground">Modern web applications</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-background border-border minimal-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center border border-border">
                      <Zap className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Performance</h3>
                      <p className="text-sm text-muted-foreground">Optimized solutions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              {/* Minimal Illustration */}
              <div className="relative w-full h-96 bg-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Secure & Reliable</h4>
                    <p className="text-sm text-muted-foreground">Built with security in mind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section className="section-padding-lg bg-background">
        <div className="container mx-auto px-6 lg:lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">Reliability</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our tools are built to last with comprehensive testing and continuous monitoring.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-muted rounded-2xl mx-auto flex items-center justify-center border border-border">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">99.9% Uptime</h4>
                  <p className="text-sm text-muted-foreground">Reliable infrastructure</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-muted rounded-2xl mx-auto flex items-center justify-center border border-border">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Community Driven</h4>
                  <p className="text-sm text-muted-foreground">Open source collaboration</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-muted rounded-2xl mx-auto flex items-center justify-center border border-border">
                  <Zap className="w-8 h-8 text-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Fast Performance</h4>
                  <p className="text-sm text-muted-foreground">Optimized for speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black">Giving back</h2>
              <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                We believe in supporting the open source community and sharing knowledge through our projects and contributions.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="inline-flex items-center gap-4 text-black">
                <span className="text-lg">Join our community</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}