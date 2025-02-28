
import { MouseState } from '../types';

// Calculate dynamic radius based on mouse speed
export const getMouseSpeedRadius = (mouse: MouseState, baseRadius: number, maxRadius: number): number => {
  // Scale radius based on mouse speed
  // When speed is 0, use baseRadius
  // When speed is high (>20), use maxRadius
  const speedFactor = Math.min(mouse.speed / 20, 1);
  return baseRadius + (maxRadius - baseRadius) * speedFactor;
};

// Update mouse position and calculate speed
export const updateMouseSpeed = (
  mouse: MouseState, 
  x: number, 
  y: number, 
  mouseInactivityTimer: number
): { updatedMouse: MouseState; mouseInactivityTimer: number; isMouseActive: boolean } => {
  // Store previous position
  const prevX = mouse.x;
  const prevY = mouse.y;
  
  // Update current position
  const updatedMouse = {
    ...mouse,
    prevX,
    prevY,
    x,
    y,
    speedX: Math.abs(x - prevX),
    speedY: Math.abs(y - prevY)
  };
  
  // Calculate total speed (Euclidean distance)
  updatedMouse.speed = Math.sqrt(
    Math.pow(updatedMouse.speedX, 2) + 
    Math.pow(updatedMouse.speedY, 2)
  );
  
  // Reset inactivity timer
  const updatedInactivityTimer = 0;
  
  return { 
    updatedMouse, 
    mouseInactivityTimer: updatedInactivityTimer, 
    isMouseActive: true 
  };
};
