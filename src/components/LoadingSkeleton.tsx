import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'image' | 'button';
  lines?: number;
}

const LoadingSkeleton = ({ 
  className = '', 
  variant = 'text',
  lines = 1 
}: LoadingSkeletonProps) => {
  const baseClasses = 'shimmer-effect bg-muted rounded animate-pulse';
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4 w-full';
      case 'card':
        return 'h-32 w-full';
      case 'image':
        return 'h-48 w-full';
      case 'button':
        return 'h-10 w-24';
      default:
        return 'h-4 w-full';
    }
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              baseClasses,
              getVariantClasses(),
              index === lines - 1 && 'w-3/4' // Last line is shorter
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn(baseClasses, getVariantClasses(), className)} />
  );
};

export default LoadingSkeleton;