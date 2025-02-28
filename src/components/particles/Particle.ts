
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
  sizeOscillation: number;
  oscillationSpeed: number;
  oscillationPhase: number;
  defaultColor: string = '#d1d1d1'; // Default light grey color
  neonColors: string[] = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#1EAEDB', '#0FA0CE']; // Neon color palette
  activeColor: string;
  isNearMouse: boolean = false;

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
    
    // Randomly select a neon color for this particle to use when active
    this.activeColor = this.neonColors[Math.floor(Math.random() * this.neonColors.length)];
    this.color = this.defaultColor; // Initialize with default color
  }

  draw() {
    // Set fillStyle based on whether the particle is near the mouse
    this.ctx.fillStyle = this.isNearMouse ? this.activeColor : this.defaultColor;
    
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
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
      this.isNearMouse = false; // Reset color when mouse is inactive
      
      // Faster return to origin when mouse is inactive
      const returnEase = this.ease * 2;
      this.x += (this.originX - this.x) * returnEase;
      this.y += (this.originY - this.y) * returnEase;
    } else {
      // Calculate distance from particle to mouse
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;
      this.distance = this.dx * this.dx + this.dy * this.dy;
      
      // Get the dynamic radius based on mouse speed
      const dynamicRadius = this.effect.getMouseSpeedRadius();
      
      // Determine if particle is within the mouse radius
      const isWithinRadius = this.distance <= dynamicRadius;
      this.isNearMouse = isWithinRadius; // Update color state based on proximity
      
      if (isWithinRadius) {
        // Only apply force for particles within the radius
        this.force = -dynamicRadius / this.distance * 8;
        this.angle = Math.atan2(this.dy, this.dx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
      } else {
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
    }

    // Update position - return to origin with easing
    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    
    this.draw();
  }
}
