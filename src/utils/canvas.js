export default function runCanvas(){
// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const colors = [
	'#ff6e61',
	'#ffc45b',
	'#f64d75'
];

addEventListener('resize', () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Particle(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	this.radians = Math.random() * Math.PI * 2;
	this.velocity = 0.05;
	// this.distanceFromCenter = {x: randomIntFromRange(79 ,120),
	// y: randomIntFromRange(79 ,120)}
	this.distanceFromCenter = randomIntFromRange(79, 130);

	this.update = () => {
		const lastPoint = {x: this.x, y:this.y};
		//move points over time
		this.radians += this.velocity;
		//circular Motion
		this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
		this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
		this.draw(lastPoint);
	};

	this.draw = lastPoint => {
		c.beginPath();
		c.strokeStyle = this.color;
		c.lineWidth = this.radius;
		c.moveTo(lastPoint.x, lastPoint.y);
		c.lineTo(this.x, this.y);
		c.stroke();
		c.closePath();
	};
}


// Implementation
let particles;
function init() {
	particles = [];

	for (let i = 0; i < 10; i++) {
		const radius = (Math.random() * 2) + 1;
		particles.push(new Particle(canvas.width/ 2,
			canvas.height / 2 - 106, radius, randomColor(colors)));
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	// c.clearRect(0, 0, canvas.width, canvas.height);
	c.fillStyle = 'rgba(255,255,255, 0.06)';
	c.fillRect(0, 0, canvas.width, canvas.height);

	particles.forEach(particle => {
		particle.update();
	});
}


    init();
    animate();
}
