
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <Logo size="md" />
        </div>
        
        <div className="hidden md:block">
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
        </div>
        
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-2">
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
}