import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const EnhancedButton = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText = 'Loading...',
  icon,
  iconPosition = 'right',
  className,
  disabled,
  ...props
}: EnhancedButtonProps) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 interactive-element overflow-hidden group btn-gradient-border';
  
  const variantClasses = {
    primary: '',
    secondary: '',
    accent: '',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isLoading && 'cursor-not-allowed opacity-80',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Hover effect overlay */}
      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        {isLoading ? (
          <>
            <Loader2 className={cn('animate-spin', iconSizeClasses[size])} />
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className={cn('transition-transform duration-300 group-hover:-translate-x-1', iconSizeClasses[size])}>
                {icon}
              </span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <span className={cn('transition-transform duration-300 group-hover:translate-x-1', iconSizeClasses[size])}>
                {icon}
              </span>
            )}
          </>
        )}
      </span>
      
      {/* Click ripple effect */}
      <span className="absolute inset-0 pointer-events-none">
        <span className="absolute inset-0 rounded-lg ring-2 ring-current opacity-0 group-active:opacity-20 transition-opacity duration-300" />
      </span>
    </button>
  );
};

export default EnhancedButton;