export interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  radians: number;
  velocity: number;
  distanceFromCenter: number;
  draw(lastPoint: { x: number; y: number }): void;
  update(): void;
}
