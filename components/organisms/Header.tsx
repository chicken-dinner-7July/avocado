import React from 'react';
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { useApp } from '../../context/AppContext';

interface HeaderProps {
  currentPage: 'home' | 'product' | 'support';
  onNavigate: (page: 'home' | 'product' | 'support') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useApp();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}