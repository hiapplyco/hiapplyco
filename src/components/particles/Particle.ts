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
  radius: number;
  opacity: number;
  color: string;
  settlingFactor: number;
  private lastColorUpdate: number;
  private cachedColor: string;
  
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
    this.radius = this.size;
    this.opacity = 0.8;
    this.color = 'rgba(139, 92, 246, 0.3)';
    this.settlingFactor = 0.05;
    this.lastColorUpdate = 0;
    this.cachedColor = this.color;
  }

  draw() {
    // Batch similar operations
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  update() {
    // Cache distance calculations
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    
    // Early exit if particle is too far from mouse
    if (this.distance > this.effect.mouse.radius * 1.2) {
      // Simple return to origin when far from mouse
      this.x += (this.originX - this.x) * this.ease;
      this.y += (this.originY - this.y) * this.ease;
      this.vx *= 0.9;
      this.vy *= 0.9;
      
      // Reset to default color
      if (this.color !== 'rgba(139, 92, 246, 0.3)') {
        this.color = 'rgba(139, 92, 246, 0.3)';
      }
      
      this.draw();
      return;
    }
    
    this.force = -this.effect.mouse.radius / this.distance * 8;

    if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      
      if (this.effect.mouse.isActive) {
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
        
        // Update color less frequently
        const now = Date.now();
        if (now - this.lastColorUpdate > 50) {
          const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
          this.color = this.getGradientColor(normalizedDistance);
          this.cachedColor = this.color;
          this.lastColorUpdate = now;
        } else {
          this.color = this.cachedColor;
        }
      } else {
        if (this.effect.mouse.isStatic) {
          const staticFactor = 0.3 * Math.max(0, 1 - (Date.now() - this.effect.mouse.lastMoveTime) / 4000);
          this.vx += this.force * Math.cos(this.angle) * staticFactor;
          this.vy += this.force * Math.sin(this.angle) * staticFactor;
          
          // Lazy color update
          const now = Date.now();
          if (now - this.lastColorUpdate > 100) {
            const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
            const timeSinceLastMove = Date.now() - this.effect.mouse.lastMoveTime;
            const colorFadeFactor = Math.max(0, 1 - timeSinceLastMove / 3000);
            this.color = this.getGradientColor(normalizedDistance, colorFadeFactor);
            this.cachedColor = this.color;
            this.lastColorUpdate = now;
          }
        } else {
          this.vx += this.force * Math.cos(this.angle) * 0.3;
          this.vy += this.force * Math.sin(this.angle) * 0.3;
          
          const now = Date.now();
          if (now - this.lastColorUpdate > 100) {
            const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
            this.color = this.getGradientColor(normalizedDistance, 0.7);
            this.cachedColor = this.color;
            this.lastColorUpdate = now;
          }
        }
      }
    } else {
      this.color = 'rgba(139, 92, 246, 0.3)';
    }

    let currentFriction = this.friction;
    if (this.effect.mouse.isStatic) {
      const timeSinceLastMove = Date.now() - this.effect.mouse.lastMoveTime;
      const maxFrictionReduction = 0.05;
      const frictionReduction = Math.min(maxFrictionReduction, timeSinceLastMove / 3000 * maxFrictionReduction);
      currentFriction = this.friction - frictionReduction;
    } else if (!this.effect.mouse.isActive) {
      currentFriction = this.friction * 0.98;
    }
    
    let currentEase = this.ease;
    if (this.effect.mouse.isStatic) {
      const timeSinceLastMove = Date.now() - this.effect.mouse.lastMoveTime;
      const easeIncrease = Math.min(0.3, timeSinceLastMove / 3000 * 0.3);
      currentEase = this.ease + easeIncrease;
    }
    
    // Update position with optimized calculations
    this.vx *= currentFriction;
    this.vy *= currentFriction;
    this.x += this.vx + (this.originX - this.x) * currentEase;
    this.y += this.vy + (this.originY - this.y) * currentEase;
    
    this.draw();
  }

  getGradientColor(normalizedDistance: number, opacityMultiplier: number = 1.0) {
    // Simplified color calculation for better performance
    const colors = [
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 147, g: 51, b: 234 },   // Purple
      { r: 236, g: 72, b: 153 },   // Pink
      { r: 251, g: 146, b: 60 },   // Orange
      { r: 34, g: 197, b: 94 },    // Green
      { r: 239, g: 68, b: 68 },    // Red
      { r: 245, g: 158, b: 11 }    // Amber
    ];
    
    const time = Date.now() * 0.001;
    const colorIndex = Math.floor((this.originX * 0.01 + this.originY * 0.01 + time * 0.5) % colors.length);
    const nextColorIndex = (colorIndex + 1) % colors.length;
    
    const baseColor = colors[colorIndex];
    const nextColor = colors[nextColorIndex];
    
    // Simplified interpolation
    const intensity = 1 - normalizedDistance;
    const blend = 0.5 + Math.sin(time + this.originX * 0.01) * 0.5;
    
    const r = Math.floor(baseColor.r + (nextColor.r - baseColor.r) * blend);
    const g = Math.floor(baseColor.g + (nextColor.g - baseColor.g) * blend);
    const b = Math.floor(baseColor.b + (nextColor.b - baseColor.b) * blend);
    
    const opacity = Math.min(1.0, (0.8 + intensity * 0.2) * opacityMultiplier);
    
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
}