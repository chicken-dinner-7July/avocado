export interface Product {
  id: string;
  name: string;
  desc: string;
  img: string;
  repo: string;
  support: string;
}

export interface AppState {
  products: Product[];
  theme: 'light' | 'dark';
  search: string;
  selectedProduct: Product | null;
}