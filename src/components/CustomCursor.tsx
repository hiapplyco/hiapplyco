import { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const updateCursorState = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const isInteractive = 
          hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.getAttribute('role') === 'button' ||
          hoveredElement.tagName === 'INPUT' ||
          hoveredElement.tagName === 'TEXTAREA' ||
          hoveredElement.tagName === 'SELECT' ||
          hoveredElement.closest('a') !== null ||
          hoveredElement.closest('button') !== null ||
          hoveredElement.classList.contains('interactive-element');
        
        setIsPointer(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', updateCursorState);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', updateCursorState);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[10000] transition-all duration-300 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-8 h-8 border-2 rounded-full transition-all duration-300 ${
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
        className={`fixed pointer-events-none z-[10001] transition-all duration-100 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-1 h-1 bg-accent rounded-full transition-all duration-300 ${
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