import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'slide-left' | 'slide-right' | 'slide-up' | 'scale' | 'fade';
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimationWrapper = ({
  children,
  animation = 'slide-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}: ScrollAnimationWrapperProps) => {
  const { ref, isInView } = useScrollAnimation({ threshold, triggerOnce: true });

  const getAnimationClass = () => {
    if (!isInView) return 'opacity-0';
    
    switch (animation) {
      case 'slide-left':
        return 'animate-slide-in-left';
      case 'slide-right':
        return 'animate-slide-in-right';
      case 'slide-up':
        return 'animate-slide-in-up';
      case 'scale':
        return 'animate-scale-in-scroll';
      case 'fade':
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={ref as any}
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;