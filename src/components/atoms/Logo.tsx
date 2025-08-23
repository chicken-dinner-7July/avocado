import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} bg-primary rounded-full flex items-center justify-center`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5 text-black"
        >
          <circle cx="12" cy="8" r="3" fill="currentColor"/>
          <path d="M12 14L8 18H16L12 14Z" fill="currentColor"/>
        </svg>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-semibold text-foreground tracking-tight`}>
          movafi
        </span>
      )}
    </div>
  );
}