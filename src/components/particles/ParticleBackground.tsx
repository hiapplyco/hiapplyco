import React, { useEffect, useRef, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Effect } from './Effect';

interface ParticleBackgroundProps {
  onEffectReady?: (effect: Effect) => void;
}

const ParticleBackground = ({ onEffectReady }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const effectRef = useRef<Effect | null>(null);
  const animationFrameRef = useRef<number>();
  const mouseThrottleRef = useRef<number>(0);
  const resizeTimeoutRef = useRef<number>();
  const isMobile = useIsMobile();

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - mouseThrottleRef.current < 16) return; // ~60fps max
    mouseThrottleRef.current = now;

    if (effectRef.current) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      effectRef.current.mouse.x = x;
      effectRef.current.mouse.y = y;
      effectRef.current.mouse.lastMoveTime = Date.now();
    }
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = window.setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Use devicePixelRatio for sharper rendering
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d', {
        alpha: true,
        desynchronized: true, // Better performance
        willReadFrequently: false
      });

      if (ctx) {
        ctx.scale(dpr, dpr);
        
        if (effectRef.current) {
          effectRef.current = new Effect(width, height, ctx);
          if (onEffectReady) {
            onEffectReady(effectRef.current);
          }
        }
      }
    }, 150);
  }, [onEffectReady]);

  const handleMouseLeave = useCallback(() => {
    if (effectRef.current) {
      effectRef.current.mouse.x = -100;
      effectRef.current.mouse.y = -100;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false
    });
    if (!ctx) return;

    // Initial setup
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    effectRef.current = new Effect(width, height, ctx);
    
    if (onEffectReady && effectRef.current) {
      onEffectReady(effectRef.current);
    }

    let lastTime = 0;
    const animate = (currentTime: number) => {
      // Target 60fps but skip frames if needed
      if (currentTime - lastTime >= 16.67) {
        if (effectRef.current) {
          effectRef.current.update();
        }
        lastTime = currentTime;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);

    // Add event listeners with passive option for better scroll performance
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, onEffectReady, handleResize, handleMouseMove, handleMouseLeave]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
      }}
    />
  );
};

export default ParticleBackground;