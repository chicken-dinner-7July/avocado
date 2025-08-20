
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
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4 text-white"
        >
          <path
            d="M12 2L13.09 8.26L22 9L13.09 9.74L12 22L10.91 9.74L2 9L10.91 8.26L12 2Z"
            fill="currentColor"
          />
          <circle cx="12" cy="15" r="2" fill="currentColor" opacity="0.7" />
        </svg>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-semibold text-foreground`}>
          Big Mango Tree
        </span>
      )}
    </div>
  );
}