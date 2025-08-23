import React from 'react';
import { Button } from '../ui/button';

interface NavigationProps {
  currentPage: 'home' | 'product' | 'support';
  onNavigate: (page: 'home' | 'product' | 'support') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'product' as const, label: 'Projects' },
    { id: 'support' as const, label: 'Support' }
  ];

  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          size="sm"
          onClick={() => onNavigate(item.id)}
          className={`px-0 py-0 h-auto rounded-none border-b-2 transition-colors ${
            currentPage === item.id 
              ? 'border-primary text-foreground bg-transparent hover:bg-transparent' 
              : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-transparent'
          }`}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}