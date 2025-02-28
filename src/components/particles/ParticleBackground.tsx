
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Effect } from './Effect';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const effectRef = useRef<Effect | null>(null);
  const animationFrameRef = useRef<number>();
  const lastMouseMoveRef = useRef<number>(0);
  const isMobile = useIsMobile();
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const handleResize = () => {
      // Debounce resize for performance
      if (effectRef.current) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Recreate effect after a short delay to avoid multiple recreations during resize
        clearTimeout(window.resizeTimer);
        window.resizeTimer = setTimeout(() => {
          effectRef.current = new Effect(canvas.width, canvas.height, ctx);
        }, 200);
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        effectRef.current = new Effect(canvas.width, canvas.height, ctx);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse move events to avoid excessive calculations
      const now = performance.now();
      if (now - lastMouseMoveRef.current < 16) { // limit to ~60 updates per second
        return;
      }
      lastMouseMoveRef.current = now;
      
      if (effectRef.current) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        effectRef.current.mouse.x = x;
        effectRef.current.mouse.y = y;
        
        if (!hasInteracted) {
          setHasInteracted(true);
        }
      }
    };

    handleResize();
    effectRef.current = new Effect(canvas.width, canvas.height, ctx);

    const animate = (timestamp: number) => {
      if (effectRef.current) {
        effectRef.current.update(timestamp);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate(0);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Track visibility changes to pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      } else {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMobile, hasInteracted]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
};

export default ParticleBackground;
