
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
    this.radius = this.size; // Initialize radius same as size
    this.opacity = 0.8; // Default opacity
    this.color = '#d1d1d1'; // Default light grey color
    this.settlingFactor = 0.05; // Controls how quickly particles settle
  }

  draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  update() {
    // Calculate distance from both mouse and logo
    const mouseDx = this.effect.mouse.x - this.x;
    const mouseDy = this.effect.mouse.y - this.y;
    const mouseDistance = mouseDx * mouseDx + mouseDy * mouseDy;
    
    const logoDx = this.effect.logoPosition.x - this.x;
    const logoDy = this.effect.logoPosition.y - this.y;
    const logoDistance = logoDx * logoDx + logoDy * logoDy;
    
    // Use the closer interaction point
    if (logoDistance < mouseDistance && logoDistance < this.effect.logoPosition.radius * this.effect.logoPosition.radius) {
      this.dx = logoDx;
      this.dy = logoDy;
      this.distance = logoDistance;
      this.force = -this.effect.logoPosition.radius / this.distance * 12; // Stronger force for logo
    } else {
      this.dx = mouseDx;
      this.dy = mouseDy;
      this.distance = mouseDistance;
      this.force = -this.effect.mouse.radius / this.distance * 8;
    }

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
        // When mouse is static, gradually return to origin with decreasing force
        if (this.effect.mouse.isStatic) {
          // Gradually reduce the force as particles settle
          const staticFactor = 0.3 * Math.max(0, 1 - (Date.now() - this.effect.mouse.lastMoveTime) / 4000);
          this.vx += this.force * Math.cos(this.angle) * staticFactor;
          this.vy += this.force * Math.sin(this.angle) * staticFactor;
          
          // Fade color back to default as particles settle
          const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
          const timeSinceLastMove = Date.now() - this.effect.mouse.lastMoveTime;
          const colorFadeFactor = Math.max(0, 1 - timeSinceLastMove / 3000);
          this.color = this.getGradientColor(normalizedDistance, colorFadeFactor);
        } else {
          // Reduced force when mouse is static or off-page
          this.vx += this.force * Math.cos(this.angle) * 0.3;
          this.vy += this.force * Math.sin(this.angle) * 0.3;
          
          // Still show some color, but less intense
          const normalizedDistance = Math.sqrt(this.distance) / Math.sqrt(this.effect.mouse.radius);
          this.color = this.getGradientColor(normalizedDistance, 0.7);
        }
      }
    } else {
      // Default color when outside radius
      this.color = '#d1d1d1'; // Light grey
    }

    // Apply more friction when mouse is inactive
    let currentFriction = this.friction;
    if (this.effect.mouse.isStatic) {
      // Increase friction as time passes when static
      const timeSinceLastMove = Date.now() - this.effect.mouse.lastMoveTime;
      const maxFrictionReduction = 0.05;
      const frictionReduction = Math.min(maxFrictionReduction, timeSinceLastMove / 3000 * maxFrictionReduction);
      currentFriction = this.friction - frictionReduction;
    } else if (!this.effect.mouse.isActive) {
      currentFriction = this.friction * 0.98;
    }
    
    // Gradually return to origin position with increased ease factor when static
    let currentEase = this.ease;
    if (this.effect.mouse.isStatic) {
      const timeSinceLastMove = Date.now() - this.effect.mouse.lastMoveTime;
      const easeIncrease = Math.min(0.3, timeSinceLastMove / 3000 * 0.3);
      currentEase = this.ease + easeIncrease;
    }
    
    this.x += (this.vx *= currentFriction) + (this.originX - this.x) * currentEase;
    this.y += (this.vy *= currentFriction) + (this.originY - this.y) * currentEase;
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
