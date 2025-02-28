
import { Particle } from '../Particle';

export const detectPerformance = (ctx: CanvasRenderingContext2D): { 
  isLowPerformance: boolean; 
  gap: number; 
  fps: number;
} => {
  const start = performance.now();
  
  // Create a small batch of test particles
  const testParticles = [];
  for (let i = 0; i < 100; i++) {
    // Create a minimal effect-like object for the test
    const dummyEffect = {
      ctx,
      isLowPerformance: false
    };
    
    testParticles.push(new Particle(0, 0, dummyEffect as any));
  }
  
  // Render test batch
  for (let i = 0; i < testParticles.length; i++) {
    testParticles[i].draw();
  }
  
  const end = performance.now();
  const renderTime = end - start;
  
  // If rendering takes more than 10ms for 100 particles, consider it a low-performance device
  const isLowPerformance = renderTime > 10;
  const gap = isLowPerformance ? 50 : 30; // Increase gap (fewer particles) for low-performance devices
  const fps = isLowPerformance ? 30 : 60; // Lower target FPS
  
  console.log(`Performance test: ${renderTime.toFixed(2)}ms for 100 particles. Low performance mode: ${isLowPerformance}`);
  
  return { isLowPerformance, gap, fps };
};
