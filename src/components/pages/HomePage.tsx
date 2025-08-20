
import { HeroSection } from '../organisms/HeroSection';
import { ProductGrid } from '../organisms/ProductGrid';
import { Product } from '../../types';

interface HomePageProps {
  onNavigateToProducts: () => void;
  onSelectProduct: (product: Product) => void;
}

export function HomePage({ onNavigateToProducts, onSelectProduct }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection onExploreProducts={onNavigateToProducts} />
      
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <ProductGrid onSelectProduct={onSelectProduct} />
        </div>
      </section>
    </div>
  );
}