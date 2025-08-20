
import { ProductCard } from '../molecules/ProductCard';
import { SearchInput } from '../atoms/SearchInput';
import { Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export function ProductGrid({ onSelectProduct }: ProductGridProps) {
  const { products, search, setSearch } = useApp();
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.desc.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ['All', 'Tools', 'Apps', 'Libraries', 'Templates'];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="mb-2">
          Explore Projects
        </Badge>
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Our Project Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our collection of open-source projects, from development tools to creative applications.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="flex-1 lg:w-80">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search projects..."
            />
          </div>
          
          <div className="flex items-center border border-border rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="w-8 h-8 p-0"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="w-8 h-8 p-0"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length} project{filteredProducts.length !== 1 ? 's' : ''} found
        </p>
        <Button variant="ghost" size="sm" className="gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Grid3X3 className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 xl:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
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