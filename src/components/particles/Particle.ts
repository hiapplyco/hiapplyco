
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
  baseSize: number;
  color: string;
  lastColor: string;
  sizeOscillation: number;
  oscillationSpeed: number;
  oscillationPhase: number;
  defaultColor: string = '#d1d1d1'; // Store default color as a constant

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
    
    // Size variation - base size is now random within a range
    this.baseSize = this.effect.isLowPerformance ? 2 : (Math.random() * 3 + 1.5);
    this.size = this.baseSize;
    
    // Animation properties
    this.sizeOscillation = Math.random() * 0.5 + 0.3; // Variation in size during animation
    this.oscillationSpeed = Math.random() * 0.05 + 0.01; // Different speeds for different particles
    this.oscillationPhase = Math.random() * Math.PI * 2; // Random starting phase
    
    this.color = this.defaultColor; // Default light grey color
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

  update(deltaTime: number = 16.67, isMouseActive: boolean = true) { // Default to ~60fps timing if not provided
    // Animate size - subtle breathing effect always happens
    if (!this.effect.isLowPerformance) {
      this.size = this.baseSize + Math.sin(this.oscillationPhase + this.effect.time * this.oscillationSpeed) * this.sizeOscillation;
    }
    
    // If mouse is not active, gradually return to original position
    if (!isMouseActive) {
      this.vx = 0;
      this.vy = 0;
      // Faster return to origin when mouse is inactive
      const returnEase = this.ease * 2;
      this.x += (this.originX - this.x) * returnEase;
      this.y += (this.originY - this.y) * returnEase;
      
      // Reset to default color
      this.color = this.defaultColor;
      
      this.draw();
      return;
    }
    
    // Calculate distance from particle to mouse
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    
    // Get the dynamic radius based on mouse speed
    const dynamicRadius = this.effect.getMouseSpeedRadius();
    
    // Determine if particle is within the mouse radius
    if (this.distance <= dynamicRadius) {
      // Only apply force and color changes to particles within the radius
      this.force = -dynamicRadius / this.distance * 8;
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
      
      // Apply color gradient based on distance from cursor
      const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(dynamicRadius);
      this.color = this.getGradientColor(normalizedDistance);
    } else {
      // For particles outside the radius, always use default color
      this.color = this.defaultColor;
      
      // If particle is very close to its origin and not being influenced, skip further calculations
      const distToOrigin = Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2);
      if (distToOrigin < 1 && Math.abs(this.vx) < 0.01 && Math.abs(this.vy) < 0.01) {
        this.x = this.originX;
        this.y = this.originY;
        this.vx = 0;
        this.vy = 0;
        this.draw();
        return;
      }
    }

    // Update position - return to origin with easing
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
