
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
    this.size = Math.floor(Math.random() * 3) + 2;
    this.color = '#d1d1d1'; // Default light grey color
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    this.force = -this.effect.mouse.radius / this.distance * 8;

    // Calculate normalized distance for gradient effect
    if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      
      // Adjust force based on mouse activity
      if (this.effect.mouse.isActive) {
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
        
        // Apply color gradient based on distance - with higher color intensity
        const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
        this.color = this.getGradientColor(normalizedDistance);
      } else {
        // Reduce force when mouse is static or off-page
        this.vx += this.force * Math.cos(this.angle) * 0.3;
        this.vy += this.force * Math.sin(this.angle) * 0.3;
        
        // Still show some color, but less intense
        const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
        this.color = this.getGradientColor(normalizedDistance, 0.7);
      }
    } else {
      // Default color when outside radius
      this.color = '#d1d1d1'; // Light grey
    }

    // Apply more friction when mouse is inactive
    const currentFriction = this.effect.mouse.isActive ? this.friction : this.friction * 0.98;
    
    this.x += (this.vx *= currentFriction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= currentFriction) + (this.originY - this.y) * this.ease;
    this.draw();
  }

  getGradientColor(normalizedDistance: number, opacityMultiplier: number = 1.0) {
    // Create more vibrant gradient colors
    const purple = { r: 128, g: 0, b: 255 }; // Bright purple #8000ff
    const pink = { r: 255, g: 0, b: 128 }; // Vibrant pink #ff0080
    
    // Interpolate between the colors based on distance
    const r = Math.floor(purple.r + (pink.r - purple.r) * normalizedDistance);
    const g = Math.floor(purple.g + (pink.g - purple.g) * normalizedDistance);
    const b = Math.floor(purple.b + (pink.b - purple.b) * normalizedDistance);
    
    // Adjust opacity based on mouse activity
    const opacity = 1.0 * opacityMultiplier;
    
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
}
