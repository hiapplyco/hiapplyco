import { useEffect, useState, useRef, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current && dotRef.current) {
      const transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      cursorRef.current.style.transform = transform;
      dotRef.current.style.transform = transform;
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setIsHidden(false);
      
      // Use RAF for smooth animation
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateCursorPosition);
      
      // Check for interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('interactive-element');
      
      setIsPointer(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, updateCursorPosition]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[10000] will-change-transform ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: 0,
          top: 0,
        }}
      >
        <div
          className={`w-8 h-8 border-2 rounded-full transition-all duration-200 ${
            isPointer 
              ? 'w-12 h-12 border-accent bg-accent/10' 
              : 'border-accent/50'
          } ${
            isClicking ? 'scale-75' : 'scale-100'
          }`}
        />
      </div>

      {/* Center dot */}
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[10001] will-change-transform ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: 0,
          top: 0,
        }}
      >
        <div
          className={`w-1 h-1 bg-accent rounded-full transition-all duration-200 ${
            isPointer ? 'w-2 h-2' : ''
          } ${
            isClicking ? 'scale-50' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;