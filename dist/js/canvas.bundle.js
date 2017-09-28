/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var colors = ['#00bdff', '#4d39ce', '#088eff'];

addEventListener('resize', function () {
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	init();
});

// Utility Functions
function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

// Objects
function Particle(x, y, radius, color) {
	var _this = this;

	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	this.radians = Math.random() * Math.PI * 2;
	this.velocity = 0.05;
	// this.distanceFromCenter = {x: randomIntFromRange(79 ,120),
	// y: randomIntFromRange(79 ,120)}
	this.distanceFromCenter = randomIntFromRange(79, 130);

	this.update = function () {
		var lastPoint = { x: _this.x, y: _this.y };
		//move points over time
		_this.radians += _this.velocity;
		//circular Motion
		_this.x = x + Math.cos(_this.radians) * _this.distanceFromCenter;
		_this.y = y + Math.sin(_this.radians) * _this.distanceFromCenter;
		_this.draw(lastPoint);
	};

	this.draw = function (lastPoint) {
		c.beginPath();
		c.strokeStyle = _this.color;
		c.lineWidth = _this.radius;
		c.moveTo(lastPoint.x, lastPoint.y);
		c.lineTo(_this.x, _this.y);
		c.stroke();
		c.closePath();
	};
}

// Implementation
var particles = void 0;
function init() {
	particles = [];

	for (var i = 0; i < 10; i++) {
		var radius = Math.random() * 2 + 1;
		particles.push(new Particle(canvas.width / 2, canvas.height / 2 - 102, radius, randomColor(colors)));
	}
	console.log(particles);
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	// c.clearRect(0, 0, canvas.width, canvas.height);
	c.fillStyle = 'rgba(255,255,255, 0.06)';
	c.fillRect(0, 0, canvas.width, canvas.height);

	particles.forEach(function (particle) {
		particle.update();
	});
}

init();
animate();

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map