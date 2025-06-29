
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
  logoPosition: {
    x: number;
    y: number;
    radius: number;
  };

  constructor(width: number, height: number, context: CanvasRenderingContext2D) {
    this.width = width;
    this.height = height;
    this.ctx = context;
    this.particlesArray = [];
    this.gap = 30; // Increased gap to reduce particle density
    this.mouse = {
      radius: 3000, // Increased radius for wider effect area
      x: 0,
      y: 0,
      isActive: false,
      lastMoveTime: 0,
      isStatic: false
    };
    this.logoPosition = {
      x: this.width / 2,
      y: this.height / 2,
      radius: 200
    };
    this.init();
  }

  updateLogoPosition(scrollProgress: number) {
    // Update logo position based on scroll progress
    const startY = this.height / 2;
    const endY = 50; // Header height
    this.logoPosition.y = startY + (endY - startY) * scrollProgress;
    this.logoPosition.radius = 200 * (1 - scrollProgress * 0.7); // Shrink radius as logo moves
  }

  init() {
    this.particlesArray = [];
    
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        this.particlesArray.push(new Particle(x, y, this));
      }
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Check if mouse has been inactive for more than 2 seconds
    const now = Date.now();
    const timeSinceLastMove = now - this.mouse.lastMoveTime;
    this.mouse.isStatic = timeSinceLastMove > 1000; // Mark as static after 1 second
    
    // Set isActive based on mouse movement and presence on page
    this.mouse.isActive = !this.mouse.isStatic && this.mouse.x > 0;
    
    for (let i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].update();
    }
  }

  pulse() {
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    
    this.particlesArray.forEach((particle, index) => {
      const dx = particle.x - centerX;
      const dy = particle.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const delay = distance * 2; // Increased delay for slower ripple
      
      setTimeout(() => {
        // Store original values
        const originalRadius = particle.radius;
        const originalOpacity = particle.opacity;
        
        // Create pulse effect
        particle.radius = 8; // Increased size during pulse
        particle.opacity = 1;
        
        // Reset after pulse
        setTimeout(() => {
          particle.radius = originalRadius;
          particle.opacity = originalOpacity;
        }, 600);
      }, delay);
    });
  }
}
