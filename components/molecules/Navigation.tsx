import React from 'react';
import { Button } from '../ui/button';

interface NavigationProps {
  currentPage: 'home' | 'product' | 'support';
  onNavigate: (page: 'home' | 'product' | 'support') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'product' as const, label: 'Products' },
    { id: 'support' as const, label: 'Support' }
  ];

  return (
    <nav className="flex gap-1">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={currentPage === item.id ? 'default' : 'ghost'}
          onClick={() => onNavigate(item.id)}
          className="px-4"
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}