interface Particle {
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

function runCanvas(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
  const c = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#ff6e61', '#ffc45b', '#f64d75'];

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });
  function randomIntFromRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomColor(colors: string[]): string {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createParticle(x: number, y: number, colors: string[]): Particle {
    const radius = Math.random() * 2 + 1;

    return {
      x,
      y,
      radius,
      color: randomColor(colors),
      radians: Math.random() * Math.PI * 2,
      velocity: 0.05,
      distanceFromCenter: randomIntFromRange(79, 130),
      draw(lastPoint: { x: number; y: number }): void {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
      },
      update(): void {
        const lastPoint = { x: this.x, y: this.y };
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint);
      },
    };
  }
  let particles: Particle[];

  function init(): void {
    particles = [];
    for (let i = 0; i < 6; i++) {
      particles.push(
        createParticle(
          canvas.width / 2,
          canvas.height / 2 - 106,
          colors
        )
      );
    }
  }

  function animate(): void {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255, 0.06)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
    });
  }

  init();
  animate();
}

export default runCanvas;
