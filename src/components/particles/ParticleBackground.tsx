
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Effect } from './Effect';

interface ParticleBackgroundProps {
  targetElementIds?: string[]; // IDs of elements to apply the effect to
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ targetElementIds = [] }) => {
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
      
      // Update element bounds after resize
      updateElementBounds();
      
      // Restart animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const updateElementBounds = () => {
      if (!effectRef.current) return;
      
      // If targetElementIds is provided, use those elements
      if (targetElementIds.length > 0) {
        const elements = targetElementIds
          .map(id => document.getElementById(id))
          .filter(el => el !== null) as HTMLElement[];
        
        if (elements.length > 0) {
          effectRef.current.setElementBounds(elements);
        }
      } else {
        // If no specific elements provided, use sections with the 'glass' class
        const glassElements = Array.from(document.querySelectorAll('.glass')) as HTMLElement[];
        if (glassElements.length > 0) {
          effectRef.current.setElementBounds(glassElements);
        } else {
          // Fallback to main sections if no glass elements
          const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
          if (sections.length > 0) {
            effectRef.current.setElementBounds(sections);
          }
        }
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
    
    // Set initial element bounds
    updateElementBounds();
    
    // Start animation
    animate(0);

    // Add event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Track element changes and update bounds periodically
    const elementObserver = new ResizeObserver(() => {
      updateElementBounds();
    });
    
    // Observe target elements for changes
    if (targetElementIds.length > 0) {
      targetElementIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) elementObserver.observe(el);
      });
    } else {
      // Observe glass elements or sections if no specific targets
      document.querySelectorAll('.glass, section').forEach(el => {
        elementObserver.observe(el);
      });
    }

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
      elementObserver.disconnect();
    };
  }, [isMobile, hasInteracted, targetElementIds]);

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
