
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
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold">Our Products</h2>
          <p className="text-muted-foreground mt-2">
            {filteredProducts.length} project{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>
        <div className="w-full sm:w-80">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search projects..."
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found matching your search.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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