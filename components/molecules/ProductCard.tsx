import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Product } from '../../types';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  variant?: 'default' | 'featured';
}

export function ProductCard({ product, onSelect, variant = 'default' }: ProductCardProps) {
  const isFeatured = variant === 'featured';
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
      isFeatured ? 'border-primary/20 bg-gradient-to-br from-card to-primary/5' : ''
    }`}>
      <div className="relative">
        <ImageWithFallback
          src={product.img}
          alt={product.name}
          className={`w-full object-cover ${isFeatured ? 'h-64' : 'h-48'}`}
        />
        {isFeatured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {product.name}
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(product.repo, '_blank');
              }}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(product);
              }}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </CardTitle>
        <CardDescription className={isFeatured ? 'text-base' : ''}>
          {product.desc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={() => onSelect(product)}
          className="w-full"
          variant={isFeatured ? 'default' : 'outline'}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}