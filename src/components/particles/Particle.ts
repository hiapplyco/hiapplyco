
import { Effect } from './Effect';

export class Particle {
  originX: number;
  originY: number;
  effect: Effect;
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  vx: number;
  vy: number;
  ease: number;
  friction: number;
  dx: number;
  dy: number;
  distance: number;
  force: number;
  angle: number;
  size: number;
  color: string;
  lastColor: string;

  constructor(x: number, y: number, effect: Effect) {
    this.originX = x;
    this.originY = y;
    this.effect = effect;
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.ctx = this.effect.ctx;
    this.vx = 0;
    this.vy = 0;
    this.ease = 0.2;
    this.friction = 0.95;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.force = 0;
    this.angle = 0;
    this.size = this.effect.isLowPerformance ? 2 : (Math.floor(Math.random() * 3) + 2);
    this.color = '#d1d1d1'; // Default light grey color
    this.lastColor = this.color; // Cache the last color to avoid unnecessary string operations
  }

  draw() {
    // Only change fillStyle if the color has changed
    if (this.color !== this.lastColor) {
      this.ctx.fillStyle = this.color;
      this.lastColor = this.color;
    }
    
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    
    // Early exit if too far from mouse (optimization)
    if (this.distance > this.effect.mouse.radius) {
      if (this.color !== '#d1d1d1') {
        this.color = '#d1d1d1'; // Light grey
      }
      
      // If particle is close to its origin, skip further calculations
      const distToOrigin = Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2);
      if (distToOrigin < 1) {
        this.x = this.originX;
        this.y = this.originY;
        this.draw();
        return;
      }
    } else {
      // Calculate force only when within mouse radius
      this.force = -this.effect.mouse.radius / this.distance * 8;
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
      
      // Apply color gradient based on distance
      const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
      this.color = this.getGradientColor(normalizedDistance);
    }

    // Simplified position update for better performance
    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    
    this.draw();
  }

  getGradientColor(normalizedDistance: number) {
    // Create more vibrant gradient colors
    const purple = { r: 128, g: 0, b: 255 }; // Bright purple #8000ff
    const pink = { r: 255, g: 0, b: 128 }; // Vibrant pink #ff0080
    
    // Use optimized color calculation
    if (this.effect.isLowPerformance) {
      // Simplified color calculation for low-performance devices
      return normalizedDistance < 0.5 ? 'rgba(128, 0, 255, 1.0)' : 'rgba(255, 0, 128, 1.0)';
    }
    
    // Regular interpolation for normal devices
    const r = Math.floor(purple.r + (pink.r - purple.r) * normalizedDistance);
    const g = Math.floor(purple.g + (pink.g - purple.g) * normalizedDistance);
    const b = Math.floor(purple.b + (pink.b - purple.b) * normalizedDistance);
    
    return `rgba(${r}, ${g}, ${b}, 1.0)`;
  }
}
