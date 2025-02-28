
import { Particle } from './Particle';
import { MouseState, ElementBounds } from './types';
import { detectPerformance } from './utils/performance';
import { createParticleGrid, getVisibleParticles } from './utils/particleManager';
import { getMouseSpeedRadius, updateMouseSpeed } from './utils/mouseUtils';

export class Effect {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  particlesArray: Particle[];
  gap: number;
  mouse: MouseState;
  lastTime: number;
  fps: number;
  nextFrame: number;
  isLowPerformance: boolean;
  time: number; // Time counter for animations
  isMouseActive: boolean; // Flag to track if mouse is active
  baseRadius: number; // Base radius for cursor effect
  maxRadius: number; // Maximum radius for fast cursor movements
  mouseInactivityTimer: number; // Time since last mouse activity
  elementBounds: ElementBounds[] = []; // Bounds of elements to apply effect to
  shouldDrawAllParticles: boolean = true; // By default, draw all particles

  constructor(width: number, height: number, context: CanvasRenderingContext2D) {
    this.width = width;
    this.height = height;
    this.ctx = context;
    
    // Base radius and max radius for cursor effect
    this.baseRadius = 1500;
    this.maxRadius = 3000;
    
    this.mouse = {
      radius: this.baseRadius, // Start with base radius
      x: -1000, // Start offscreen to avoid initial animation
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      speedX: 0,
      speedY: 0,
      speed: 0
    };
    
    this.lastTime = 0;
    this.time = 0; // Initialize time counter
    this.isMouseActive = false; // Initialize mouse activity state
    this.mouseInactivityTimer = 0; // Initialize mouse inactivity timer
    
    // Determine performance and set appropriate values
    const perfResult = detectPerformance(this.ctx);
    this.isLowPerformance = perfResult.isLowPerformance;
    this.gap = perfResult.gap;
    this.fps = perfResult.fps;
    this.nextFrame = 0;
    
    // Initialize particle array
    this.particlesArray = [];
    this.init();
  }

  init() {
    this.particlesArray = createParticleGrid(
      this.width, 
      this.height, 
      this.gap, 
      this.isLowPerformance, 
      this
    );
  }

  // Set the boundaries of elements that should have the effect
  setElementBounds(elements: HTMLElement[]) {
    this.elementBounds = elements.map(el => {
      const rect = el.getBoundingClientRect();
      return {
        id: el.id || 'unnamed-element',
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height
      };
    });

    console.log('Set element bounds:', this.elementBounds);
  }

  // Make the dynamic radius calculation method available for particles
  getMouseSpeedRadius(): number {
    return getMouseSpeedRadius(this.mouse, this.baseRadius, this.maxRadius);
  }

  // Check if a point is within any of the tracked element bounds
  isPointInElements(x: number, y: number): boolean {
    if (this.elementBounds.length === 0) return true; // If no elements specified, affect the whole canvas
    
    // Check if the point is within any of the elements or in a small gap between elements
    return this.elementBounds.some(bounds => 
      x >= bounds.left && x <= bounds.right && 
      (y >= bounds.top - 100 && y <= bounds.bottom + 100) // Add a 100px buffer above and below each element
    );
  }

  // Update mouse position and calculate speed
  updateMouseSpeed(x: number, y: number) {
    // Always update mouse position regardless of whether it's in an element
    const result = updateMouseSpeed(this.mouse, x, y, this.mouseInactivityTimer);
    
    this.mouse = result.updatedMouse;
    this.mouseInactivityTimer = result.mouseInactivityTimer;
    this.isMouseActive = result.isMouseActive;
  }

  update(timestamp: number) {
    // Update global time counter for animations
    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.time += deltaTime * 0.001; // Convert to seconds
    
    // Update mouse inactivity timer
    this.mouseInactivityTimer += deltaTime;
    
    // If mouse hasn't moved for 1 second, consider it inactive
    if (this.mouseInactivityTimer > 1000) {
      this.isMouseActive = false;
    }
    
    // Skip frames on low-performance devices
    if (this.isLowPerformance) {
      if (timestamp < this.nextFrame) {
        return;
      }
      this.nextFrame = timestamp + (1000 / this.fps);
    }
    
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Get particles that are visible or influenced by mouse
    const viewportParticles = getVisibleParticles(
      this.particlesArray, 
      this.isLowPerformance, 
      this.mouse, 
      this.getMouseSpeedRadius()
    );
    
    // Update all particles to ensure they appear throughout the page
    for (let i = 0; i < viewportParticles.length; i++) {
      const particle = viewportParticles[i];
      
      // Always draw and animate the particle
      particle.update(deltaTime, this.isMouseActive);
    }
  }
}
