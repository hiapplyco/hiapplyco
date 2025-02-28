
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
  defaultColor: string = '#d1d1d1'; // Default light grey color
  targetColor: string = this.defaultColor;
  colorTransitionSpeed: number = 0.1; // Speed of color transition

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
    
    this.color = this.defaultColor; // Initialize with default color
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

  // Helper function to interpolate between two colors
  lerpColor(startColor: string, endColor: string, t: number): string {
    // Parse the hex colors to RGB components
    const parseColor = (hex: string) => {
      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5, 7), 16);
      return { r, g, b };
    };
    
    // For performance, hardcoded color parsing for known colors
    let start, end;
    
    if (startColor === this.defaultColor) {
      start = { r: 209, g: 209, b: 209 }; // #d1d1d1
    } else {
      start = parseColor(startColor);
    }
    
    if (endColor.startsWith('#')) {
      end = parseColor(endColor);
    } else if (endColor === 'purple') {
      end = { r: 128, g: 0, b: 255 }; // #8000ff
    } else if (endColor === 'pink') {
      end = { r: 255, g: 0, b: 128 }; // #ff0080
    } else {
      // Default to purple if unknown
      end = { r: 128, g: 0, b: 255 };
    }
    
    // Clamp t between 0 and 1
    t = Math.max(0, Math.min(1, t));
    
    // Linear interpolation of RGB values
    const r = Math.round(start.r + (end.r - start.r) * t);
    const g = Math.round(start.g + (end.g - start.g) * t);
    const b = Math.round(start.b + (end.b - start.b) * t);
    
    return `rgb(${r}, ${g}, ${b})`;
  }

  update(deltaTime: number = 16.67, isMouseActive: boolean = true) {
    // Animate size - subtle breathing effect always happens
    if (!this.effect.isLowPerformance) {
      this.size = this.baseSize + Math.sin(this.oscillationPhase + this.effect.time * this.oscillationSpeed) * this.sizeOscillation;
    }
    
    // If mouse is not active, gradually return to original position
    if (!isMouseActive) {
      this.dx = 0;
      this.dy = 0;
      this.vx *= 0.9; // Decelerate gradually
      this.vy *= 0.9; // Decelerate gradually
      
      // Faster return to origin when mouse is inactive
      const returnEase = this.ease * 2;
      this.x += (this.originX - this.x) * returnEase;
      this.y += (this.originY - this.y) * returnEase;
      
      // Set target color to default
      this.targetColor = this.defaultColor;
    } else {
      // Calculate distance from particle to mouse
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;
      this.distance = this.dx * this.dx + this.dy * this.dy;
      
      // Get the dynamic radius based on mouse speed
      const dynamicRadius = this.effect.getMouseSpeedRadius();
      
      // Determine if particle is within the mouse radius
      if (this.distance <= dynamicRadius) {
        // Only apply force and set target color for particles within the radius
        this.force = -dynamicRadius / this.distance * 8;
        this.angle = Math.atan2(this.dy, this.dx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
        
        // Apply color gradient based on distance from cursor
        const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(dynamicRadius);
        
        // Set target color based on normalized distance
        if (normalizedDistance < 0.5) {
          this.targetColor = '#8000ff'; // Purple for closer particles
        } else {
          this.targetColor = '#ff0080'; // Pink for particles at the edge
        }
      } else {
        // For particles outside the radius, target is default color
        this.targetColor = this.defaultColor;
        
        // If particle is very close to its origin and not being influenced, skip further calculations
        const distToOrigin = Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2);
        if (distToOrigin < 1 && Math.abs(this.vx) < 0.01 && Math.abs(this.vy) < 0.01) {
          this.x = this.originX;
          this.y = this.originY;
          this.vx = 0;
          this.vy = 0;
          this.color = this.defaultColor; // Set color immediately to default
          this.targetColor = this.defaultColor;
          this.draw();
          return;
        }
      }
    }

    // Update position - return to origin with easing
    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    
    // Gradually change color towards target color
    if (this.color !== this.targetColor) {
      // Use color lerping for smooth transition
      this.color = this.lerpColor(this.color, this.targetColor, this.colorTransitionSpeed);
    }
    
    this.draw();
  }
}
