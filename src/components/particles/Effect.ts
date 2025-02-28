
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
    prevX: number;
    prevY: number;
    speedX: number;
    speedY: number;
    speed: number;
  };
  lastTime: number;
  fps: number;
  nextFrame: number;
  isLowPerformance: boolean;
  time: number; // Time counter for animations
  isMouseActive: boolean; // Flag to track if mouse is active
  baseRadius: number; // Base radius for cursor effect
  maxRadius: number; // Maximum radius for fast cursor movements
  mouseInactivityTimer: number; // Time since last mouse activity

  constructor(width: number, height: number, context: CanvasRenderingContext2D) {
    this.width = width;
    this.height = height;
    this.ctx = context;
    this.particlesArray = [];
    this.gap = 30; // Default gap
    
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
    this.fps = 60;
    this.nextFrame = 0;
    this.isLowPerformance = false;
    this.time = 0; // Initialize time counter
    this.isMouseActive = false; // Initialize mouse activity state
    this.mouseInactivityTimer = 0; // Initialize mouse inactivity timer
    
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
    
    console.log(`Performance test: ${renderTime.toFixed(2)}ms for 100 particles. Low performance mode: ${this.isLowPerformance}`);
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

  // Calculate dynamic radius based on mouse speed
  getMouseSpeedRadius() {
    // Scale radius based on mouse speed
    // When speed is 0, use baseRadius
    // When speed is high (>20), use maxRadius
    const speedFactor = Math.min(this.mouse.speed / 20, 1);
    return this.baseRadius + (this.maxRadius - this.baseRadius) * speedFactor;
  }

  // Update mouse position and calculate speed
  updateMouseSpeed(x: number, y: number) {
    // Store previous position
    this.mouse.prevX = this.mouse.x;
    this.mouse.prevY = this.mouse.y;
    
    // Update current position
    this.mouse.x = x;
    this.mouse.y = y;
    
    // Calculate speed (distance moved since last frame)
    this.mouse.speedX = Math.abs(this.mouse.x - this.mouse.prevX);
    this.mouse.speedY = Math.abs(this.mouse.y - this.mouse.prevY);
    
    // Calculate total speed (Euclidean distance)
    this.mouse.speed = Math.sqrt(
      Math.pow(this.mouse.speedX, 2) + 
      Math.pow(this.mouse.speedY, 2)
    );
    
    // Reset inactivity timer
    this.mouseInactivityTimer = 0;
    
    // Update mouse activity state
    this.isMouseActive = true;
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
    
    // Gradually decay mouse speed when not moving
    if (this.mouse.speed > 0) {
      this.mouse.speed *= 0.95;
    }
    
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Determine particles to update based on viewport and mouse position
    const viewportParticles = this.getVisibleParticles();
    
    // Update particles that are visible or influenced by mouse
    for (let i = 0; i < viewportParticles.length; i++) {
      viewportParticles[i].update(deltaTime, this.isMouseActive);
    }
  }
  
  // Get particles that are visible or influenced by mouse
  getVisibleParticles() {
    if (!this.isLowPerformance) {
      return this.particlesArray;
    }
    
    const result = [];
    const mouseRadius = this.getMouseSpeedRadius();
    
    // For low performance mode, only update particles near the mouse or that have moved from origin
    for (let i = 0; i < this.particlesArray.length; i++) {
      const particle = this.particlesArray[i];
      
      // Calculate distance to mouse
      const dx = particle.x - this.mouse.x;
      const dy = particle.y - this.mouse.y;
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
  }
}
