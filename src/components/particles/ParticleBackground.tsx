
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
      // Set canvas dimensions to match window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset animation when window is resized
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      // Create new effect with updated dimensions
      effectRef.current = new Effect(canvas.width, canvas.height, ctx);
      
      // Restart animation
      animationFrameRef.current = requestAnimationFrame(animate);
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
        
        // Update mouse position and calculate speed
        effectRef.current.updateMouseSpeed(x, y);
        
        if (!hasInteracted) {
          setHasInteracted(true);
        }
      }
    };

    const handleMouseLeave = () => {
      if (effectRef.current) {
        effectRef.current.isMouseActive = false;
      }
    };

    const animate = (timestamp: number) => {
      if (effectRef.current) {
        effectRef.current.update(timestamp);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize canvas size and effect
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effectRef.current = new Effect(canvas.width, canvas.height, ctx);
    
    // Start animation
    animate(0);

    // Add event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Track visibility changes to pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      } else if (!document.hidden && !animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMobile, hasInteracted]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full fixed inset-0 z-0 pointer-events-auto"
      style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
};

export default ParticleBackground;
