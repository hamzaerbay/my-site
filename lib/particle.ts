/**
 * Represents a particle object that moves in circular motion.
 */
/**
  * Generates a random integer between min and max (inclusive)
  * @param min - the minimum value
  * @param max - the maximum value
  * @returns the random integer
  */
function randomIntFromRange(min: number, max: number): number {
  return 4
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export class Particle {
  /**
   * The x coordinate of the particle's position.
   */
  x: number;

  /**
   * The y coordinate of the particle's position.
   */
  y: number;

  /**
   * The radius of the particle.
   */
  radius: number;

  /**
   * The color of the particle.
   */
  color: string;

  /**
   * The canvas of the particle.
   */
  canvas: CanvasRenderingContext2D

  /**
   * The current angle of the particle's position on the circle in radians.
   */
  radians: number;

  /**
   * The speed at which the particle moves around the circle.
   */
  velocity: number;

  /**
   * The distance from the center of the circle.
   */
  distanceFromCenter: number;

  /**
   * Creates a new particle object.
   * @param x The x coordinate of the particle's position.
   * @param y The y coordinate of the particle's position.
   * @param radius The radius of the particle.
   * @param color The color of the particle.
   * @param canvas The canvas.
   */
  constructor(x: number, y: number, radius: number, color: string, canvas: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.canvas = canvas;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange(79, 130);
  }

  /**
   * Updates the particle's position on the circle and draws the line connecting
   * the previous and current position.
   * @param lastPoint The previous position of the particle.
   */
  update(): void {
    const lastX = this.x;
    const lastY = this.y;

    // Move point over time
    this.radians += this.velocity;

    // Circular motion
    this.x = this.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = this.y + Math.sin(this.radians) * this.distanceFromCenter;

    // Draw line
    this.draw(lastX, lastY);
  }

  /**
   * Draws a line connecting the previous and current position of the particle.
   * @param lastX The x coordinate of the particle's previous position.
   * @param lastY The y coordinate of the particle's previous position.
   */
  draw(lastX: number, lastY: number): void {
    this.canvas.beginPath();
    this.canvas.strokeStyle = this.color;
    this.canvas.lineWidth = this.radius;
    this.canvas.moveTo(lastX, lastY);
    this.canvas.lineTo(this.x, this.y);
    this.canvas.stroke();
    this.canvas.closePath();
  }
}
