import React from 'react';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { Button } from '../ui/button';
import { useApp } from '../../context/AppContext';

interface HeaderProps {
  currentPage: 'home' | 'product' | 'support';
  onNavigate: (page: 'home' | 'product' | 'support') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useApp();

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <Logo size="md" />
        </div>
        
        <div className="hidden md:block">
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button 
            size="sm" 
            className="hidden sm:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-6 py-3">
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
}