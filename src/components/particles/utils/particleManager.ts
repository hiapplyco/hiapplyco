
import { Particle } from '../Particle';
import { MouseState } from '../types';

export const createParticleGrid = (
  width: number, 
  height: number, 
  gap: number, 
  isLowPerformance: boolean, 
  effect: any
): Particle[] => {
  const particles: Particle[] = [];
  
  // Skip every other row and column on low-performance devices
  const skipFactor = isLowPerformance ? 2 : 1;
  
  for (let y = 0; y < height; y += gap * skipFactor) {
    for (let x = 0; x < width; x += gap * skipFactor) {
      particles.push(new Particle(x, y, effect));
    }
  }
  
  console.log(`Created ${particles.length} particles. Low performance mode: ${isLowPerformance}`);
  
  return particles;
};

export const getVisibleParticles = (
  particlesArray: Particle[], 
  isLowPerformance: boolean,
  mouse: MouseState,
  mouseRadius: number
): Particle[] => {
  if (!isLowPerformance) {
    return particlesArray;
  }
  
  const result = [];
  
  // For low performance mode, only update particles near the mouse or that have moved from origin
  for (let i = 0; i < particlesArray.length; i++) {
    const particle = particlesArray[i];
    
    // Calculate distance to mouse
    const dx = particle.x - mouse.x;
    const dy = particle.y - mouse.y;
    const distToMouse = dx * dx + dy * dy;
    
    // Calculate distance to origin
    const dxOrigin = particle.x - particle.originX;
    const dyOrigin = particle.y - particle.originY;
    const distToOrigin = dxOrigin * dxOrigin + dyOrigin * dyOrigin;
    
    // Include particle if it's near mouse or has moved from its origin
    if (distToMouse < mouseRadius * 1.5 || distToOrigin > 1) {
      result.push(particle);
    }
  }
  
  return result;
};
