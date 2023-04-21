import { Particle } from './types'
import * as utils from './utils'

const createParticle = (x: number, y: number, colors: string[]): Particle => {
  const radius = Math.random() * 2 + 1;
  const canvas = document.querySelector('canvas')!
  return {
    x,
    y,
    radius,
    color: utils.randomColor(colors),
    radians: Math.random() * Math.PI * 2,
    velocity: 0.05,
    distanceFromCenter: utils.randomIntFromRange(79, 130),
    draw(lastPoint: { x: number; y: number }): void {
      const { x: lastX, y: lastY } = lastPoint;
      const { color, radius, x: currentX, y: currentY } = this;

      const context = canvas.getContext('2d')!;
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = radius;
      context.moveTo(lastX, lastY);
      context.lineTo(currentX, currentY);
      context.stroke();
      context.closePath();
    },
    update(): void {
      const lastPoint = { x: this.x, y: this.y };
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
      this.draw(lastPoint);
    },
  };
};

const init = (canvas: HTMLCanvasElement, colors: string[]) => {
  const particles: Particle[] = [];
  for (let i = 0; i <6; i++) {
    particles.push(createParticle(canvas.width / 2, canvas.height / 2 - 106, colors));
  }
  return particles;
};

const animate = (canvas: HTMLCanvasElement, particles: Particle[]) => {
  const context = canvas.getContext('2d')!;
  context.fillStyle = 'rgba(255,255,255, 0.06)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
  });

  requestAnimationFrame(() => animate(canvas, particles));
};

const runCanvas = (): void => {
  const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ff6e61', '#ffc45b', '#f64d75'];
  const particles = init(canvas, colors);
  animate(canvas, particles);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0;
    particles.push(...init(canvas, colors));
  });
};

export default runCanvas;