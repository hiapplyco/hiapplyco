
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
      lastMoveTime: 0
    };
    this.init();
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
    const isMouseStatic = now - this.mouse.lastMoveTime > 2000;
    
    // Set isActive based on mouse movement and presence on page
    this.mouse.isActive = !isMouseStatic && this.mouse.x > 0;
    
    for (let i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].update();
    }
  }
}
