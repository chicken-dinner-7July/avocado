import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  onExploreProducts: () => void;
}

export function HeroSection({ onExploreProducts }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="relative w-full">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                    We are an independent
                    <br />
                    <span className="text-primary">software development</span>
                    <br />
                    studio for modern
                    <br />
                    <span className="text-primary">digital projects</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                    Crafting exceptional digital experiences with cutting-edge technology. 
                    From web applications to developer tools, we build software that makes a difference.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    onClick={onExploreProducts}
                    className="h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    <span className="mr-3">Explore our work</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Minimal Illustration */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Main Circle */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-primary/10 border-2 border-primary/20"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  
                  <div className="absolute top-16 right-4 w-12 h-12 rounded-lg bg-background border-2 border-border flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-foreground">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-12 left-12 w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-8 right-8 w-10 h-10 rounded-md bg-muted border border-border"></div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                    <path 
                      d="M80 80 L304 160 M304 64 L192 192 M80 304 L192 192" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      strokeDasharray="5,5" 
                      className="text-border opacity-50"
                      fill="none"
                    />
                  </svg>
                </div>
                
                {/* Background Dots */}
                <div className="absolute -top-8 -right-8 w-4 h-4 rounded-full bg-primary/30"></div>
                <div className="absolute -bottom-12 -left-4 w-6 h-6 rounded-full bg-muted border border-border"></div>
                <div className="absolute top-1/3 -left-12 w-3 h-3 rounded-full bg-foreground/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}