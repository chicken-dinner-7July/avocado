import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
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
  
  const gradientColors = [
    'from-green-500/20 to-emerald-500/20',
    'from-purple-500/20 to-violet-500/20',
    'from-blue-500/20 to-cyan-500/20',
    'from-orange-500/20 to-red-500/20'
  ];
  
  const gradientIndex = parseInt(product.id) % gradientColors.length;
  
  return (
    <Card 
      className={`group overflow-hidden border-0 shadow-sm bg-card card-hover cursor-pointer ${
        isFeatured ? 'ring-2 ring-primary/10 shadow-lg' : ''
      }`}
      onClick={() => onSelect(product)}
    >
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[gradientIndex]} opacity-50`} />
        <ImageWithFallback
          src={product.img}
          alt={product.name}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            isFeatured ? 'h-48' : 'h-40'
          }`}
        />
        
        <div className="absolute top-4 left-4 flex gap-2">
          {isFeatured && (
            <Badge className="bg-primary text-primary-foreground shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          <Badge variant="secondary" className="bg-white/90 text-gray-700 shadow-lg">
            Open Source
          </Badge>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 bg-white/90 hover:bg-white shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                window.open(product.repo, '_blank');
              }}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 bg-white/90 hover:bg-white shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                window.open(product.repo, '_blank');
              }}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className={`group-hover:text-primary transition-colors ${
          isFeatured ? 'text-lg' : 'text-base'
        }`}>
          {product.name}
        </CardTitle>
        <CardDescription className={`line-clamp-2 ${
          isFeatured ? 'text-base' : 'text-sm'
        }`}>
          {product.desc}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span>4.8</span>
            </div>
            <div>
              <span>1.2k downloads</span>
            </div>
          </div>
          
          <Button 
            size="sm"
            variant={isFeatured ? 'default' : 'outline'}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View Project
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}