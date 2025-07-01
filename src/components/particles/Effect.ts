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
    isActive: boolean;
    lastMoveTime: number;
    isStatic: boolean;
  };
  private frameCount: number;
  private lastFrameTime: number;
  private visibleParticles: Set<number>;

  constructor(width: number, height: number, context: CanvasRenderingContext2D) {
    this.width = width;
    this.height = height;
    this.ctx = context;
    this.particlesArray = [];
    this.gap = 40; // Increased gap to reduce particle count
    this.mouse = {
      radius: 3000,
      x: -100,
      y: -100,
      isActive: false,
      lastMoveTime: 0,
      isStatic: false
    };
    this.frameCount = 0;
    this.lastFrameTime = 0;
    this.visibleParticles = new Set();
    
    // Enable GPU acceleration hints
    this.ctx.imageSmoothingEnabled = false;
    
    this.init();
  }

  init() {
    this.particlesArray = [];
    
    // Calculate visible area with padding
    const padding = 100;
    const startX = Math.max(0, -padding);
    const endX = Math.min(this.width + padding, this.width);
    const startY = Math.max(0, -padding);
    const endY = Math.min(this.height + padding, this.height);
    
    for (let y = startY; y < endY; y += this.gap) {
      for (let x = startX; x < endX; x += this.gap) {
        this.particlesArray.push(new Particle(x, y, this));
      }
    }
  }

  update() {
    this.frameCount++;
    const currentTime = performance.now();
    
    // Skip frames if running slow (target 30fps minimum)
    if (currentTime - this.lastFrameTime < 33) {
      return;
    }
    this.lastFrameTime = currentTime;
    
    // Clear canvas more efficiently
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Check mouse activity state
    const now = Date.now();
    const timeSinceLastMove = now - this.mouse.lastMoveTime;
    this.mouse.isStatic = timeSinceLastMove > 1000;
    this.mouse.isActive = !this.mouse.isStatic && this.mouse.x > 0;
    
    // Batch rendering for better performance
    this.ctx.save();
    
    // Update visible particles only
    this.visibleParticles.clear();
    
    for (let i = 0; i < this.particlesArray.length; i++) {
      const particle = this.particlesArray[i];
      
      // Frustum culling - skip particles outside viewport
      if (particle.x < -50 || particle.x > this.width + 50 || 
          particle.y < -50 || particle.y > this.height + 50) {
        continue;
      }
      
      // Skip update for distant particles when mouse is inactive
      if (!this.mouse.isActive && particle.distance > this.mouse.radius * 1.5) {
        // Update less frequently
        if (this.frameCount % 3 === i % 3) {
          particle.update();
        }
      } else {
        particle.update();
      }
      
      this.visibleParticles.add(i);
    }
    
    this.ctx.restore();
  }

  pulse() {
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    
    // Optimize pulse effect with requestAnimationFrame
    const startTime = performance.now();
    
    this.particlesArray.forEach((particle, index) => {
      const dx = particle.x - centerX;
      const dy = particle.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const delay = distance * 2;
      
      // Use RAF instead of setTimeout for better performance
      const animatePulse = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        
        if (elapsed >= delay) {
          const originalRadius = particle.radius;
          const originalOpacity = particle.opacity;
          
          particle.radius = 8;
          particle.opacity = 1;
          
          // Reset after pulse
          requestAnimationFrame(() => {
            setTimeout(() => {
              particle.radius = originalRadius;
              particle.opacity = originalOpacity;
            }, 600);
          });
        } else {
          requestAnimationFrame(animatePulse);
        }
      };
      
      requestAnimationFrame(animatePulse);
    });
  }
}