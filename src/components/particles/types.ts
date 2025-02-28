
// Common types used across particle system components
export type MouseState = {
  radius: number;
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  speedX: number;
  speedY: number;
  speed: number;
};

export type ElementBounds = {
  id: string;
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};
