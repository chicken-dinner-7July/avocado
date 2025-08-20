import { createContext, useContext, useState, ReactNode } from 'react';
import { Product, AppState } from '../types';

interface AppContextType extends AppState {
  setProducts: (products: Product[]) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setSearch: (search: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Mock data for products
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Green Canvas',
    desc: 'A beautiful drawing application built with React and Canvas API. Create digital art with intuitive tools and export in multiple formats.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    repo: 'https://github.com/bigmangotree/green-canvas',
    support: 'https://github.com/bigmangotree/green-canvas/issues'
  },
  {
    id: '2',
    name: 'Task Garden',
    desc: 'A productivity app that gamifies your daily tasks. Plant virtual trees as you complete tasks and watch your productivity forest grow.',
    img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    repo: 'https://github.com/bigmangotree/task-garden',
    support: 'https://github.com/bigmangotree/task-garden/issues'
  },
  {
    id: '3',
    name: 'Code Compass',
    desc: 'Navigate your codebase with ease. This VS Code extension provides intelligent code navigation and project insights.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    repo: 'https://github.com/bigmangotree/code-compass',
    support: 'https://github.com/bigmangotree/code-compass/issues'
  },
  {
    id: '4',
    name: 'Mango Chat',
    desc: 'Real-time chat application with end-to-end encryption. Built with modern web technologies for secure communication.',
    img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop',
    repo: 'https://github.com/bigmangotree/mango-chat',
    support: 'https://github.com/bigmangotree/mango-chat/issues'
  }
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <AppContext.Provider value={{
      products,
      theme,
      search,
      selectedProduct,
      setProducts,
      setTheme,
      setSearch,
      setSelectedProduct,
      toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}