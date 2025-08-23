
import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/organisms/Header';
import { HomePage } from './components/pages/HomePage';
import { ProductPage } from './components/pages/ProductPage';
import { SupportPage } from './components/pages/SupportPage';
import { Product } from './types';

type Page = 'home' | 'product' | 'support';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { setSelectedProduct } = useApp();

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedProduct(null);
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigateToProducts={() => handleNavigate('product')}
            onSelectProduct={handleSelectProduct}
          />
        );
      case 'product':
        return (
          <ProductPage
            onBack={() => handleNavigate('home')}
            onNavigateToSupport={() => handleNavigate('support')}
          />
        );
      case 'support':
        return (
          <SupportPage
            onBack={() => {
              const previousPage = currentPage === 'support' ? 'product' : 'home';
              handleNavigate(previousPage);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}