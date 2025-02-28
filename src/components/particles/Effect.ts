
import { Particle } from './Particle';

export class Effect {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  particlesArray: Particle[];
  gap: number;
  mouse: {
    radius: number;
    x: number;
    y: number;
  };
  lastTime: number;
  fps: number;
  nextFrame: number;
  isLowPerformance: boolean;
  time: number; // Time counter for animations
  isMouseActive: boolean; // Flag to track if mouse is active

  constructor(width: number, height: number, context: CanvasRenderingContext2D) {
    this.width = width;
    this.height = height;
    this.ctx = context;
    this.particlesArray = [];
    this.gap = 30; // Default gap
    this.mouse = {
      radius: 3000, // Increased radius for wider effect area
      x: 0,
      y: 0
    };
    this.lastTime = 0;
    this.fps = 60;
    this.nextFrame = 0;
    this.isLowPerformance = false;
    this.time = 0; // Initialize time counter
    this.isMouseActive = false; // Initialize mouse activity state
    
    // Determine if device is low performance based on initial render time
    this.detectPerformance();
    this.init();
  }

  detectPerformance() {
    const start = performance.now();
    
    // Create a small batch of test particles
    const testParticles = [];
    for (let i = 0; i < 100; i++) {
      testParticles.push(new Particle(0, 0, this));
    }
    
    // Render test batch
    for (let i = 0; i < testParticles.length; i++) {
      testParticles[i].draw();
    }
    
    const end = performance.now();
    const renderTime = end - start;
    
    // If rendering takes more than 10ms for 100 particles, consider it a low-performance device
    if (renderTime > 10) {
      this.isLowPerformance = true;
      this.gap = 50; // Increase gap (fewer particles) for low-performance devices
      this.fps = 30; // Lower target FPS
    }
  }

  init() {
    this.particlesArray = [];
    
    // Skip every other row and column on low-performance devices
    const skipFactor = this.isLowPerformance ? 2 : 1;
    
    for (let y = 0; y < this.height; y += this.gap * skipFactor) {
      for (let x = 0; x < this.width; x += this.gap * skipFactor) {
        this.particlesArray.push(new Particle(x, y, this));
      }
    }
    
    console.log(`Created ${this.particlesArray.length} particles. Low performance mode: ${this.isLowPerformance}`);
  }

  update(timestamp: number) {
    // Update global time counter for animations
    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.time += deltaTime * 0.001; // Convert to seconds
    
    // Skip frames on low-performance devices
    if (this.isLowPerformance) {
      if (timestamp < this.nextFrame) {
        return;
      }
      this.nextFrame = timestamp + (1000 / this.fps);
    }
    
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Use a smaller portion of the array on low-performance devices
    const limit = this.isLowPerformance ? 
      Math.min(400, this.particlesArray.length) : 
      this.particlesArray.length;
    
    // Only update particles that are likely to be visible (near the viewport)
    for (let i = 0; i < limit; i++) {
      const particle = this.particlesArray[i];
      
      // Skip particles that are far from both the mouse and their origin
      if (this.isLowPerformance) {
        const distToMouse = Math.pow(particle.x - this.mouse.x, 2) + Math.pow(particle.y - this.mouse.y, 2);
        const distToOrigin = Math.pow(particle.x - particle.originX, 2) + Math.pow(particle.y - particle.originY, 2);
        
        if (distToMouse > this.mouse.radius * 2 && distToOrigin < 5) {
          continue;
        }
      }
      
      // Pass deltaTime and mouse active state to the particle update
      particle.update(deltaTime, this.isMouseActive);
    }
  }
}
