
import { ArrowLeft, Github, ExternalLink, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../context/AppContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductPageProps {
  onBack: () => void;
  onNavigateToSupport: () => void;
}

export function ProductPage({ onBack, onNavigateToSupport }: ProductPageProps) {
  const { selectedProduct } = useApp();

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No product selected</p>
          <Button onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ImageWithFallback
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold">{selectedProduct.name}</h1>
                <Badge variant="secondary">Open Source</Badge>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedProduct.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => window.open(selectedProduct.repo, '_blank')}
                className="flex-1 sm:flex-none"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(selectedProduct.repo, '_blank')}
                className="flex-1 sm:flex-none"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button 
                variant="outline"
                onClick={onNavigateToSupport}
                className="flex-1 sm:flex-none"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Support
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Repository:</span>
                    <a 
                      href={selectedProduct.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support:</span>
                    <a 
                      href={selectedProduct.support} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Issues
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>MIT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Modern React architecture",
              "TypeScript support",
              "Responsive design",
              "Open source",
              "Active community",
              "Regular updates"
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <p>{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}