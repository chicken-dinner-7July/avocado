import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
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
    <Card 
      className={`group overflow-hidden bg-card border border-border card-minimal cursor-pointer ${
        isFeatured ? 'border-primary/20' : ''
      }`}
      onClick={() => onSelect(product)}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={product.img}
          alt={product.name}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] ${
            isFeatured ? 'h-56' : 'h-48'
          }`}
        />
        
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="secondary"
            className="w-10 h-10 p-0 rounded-full bg-background/90 hover:bg-background shadow-lg border border-border"
            onClick={(e) => {
              e.stopPropagation();
              window.open(product.repo, '_blank');
            }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-8">
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className={`font-semibold group-hover:text-primary transition-colors ${
              isFeatured ? 'text-xl' : 'text-lg'
            }`}>
              {product.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.desc}
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 px-0 text-muted-foreground hover:text-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(product.repo, '_blank');
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                Source
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 px-0 text-muted-foreground hover:text-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(product.repo, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}