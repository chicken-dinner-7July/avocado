import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { SearchInput } from '../atoms/SearchInput';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export function ProductGrid({ onSelectProduct }: ProductGridProps) {
  const { products, search, setSearch } = useApp();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12">
      {/* Search */}
      <div className="max-w-md mx-auto">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search projects..."
        />
      </div>

      {/* Results */}
      <div className="text-center">
        <p className="text-muted-foreground">
          {filteredProducts.length} project{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-muted rounded-2xl mx-auto flex items-center justify-center border border-border">
              <div className="w-6 h-6 bg-foreground/20 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              variant={index === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>
      )}
    </div>
  );
}