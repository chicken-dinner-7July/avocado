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
    <nav className="flex gap-1 p-1 bg-muted rounded-lg">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={currentPage === item.id ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => onNavigate(item.id)}
          className={`px-4 py-2 rounded-md transition-all ${
            currentPage === item.id 
              ? 'bg-background shadow-sm text-foreground' 
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}