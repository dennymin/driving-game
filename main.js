// data portion
var data = {
  x: 0,
  y: 0,
  direction: 'ArrowRight'
};

var $car = document.querySelector('.car');
function turnCarDirection(car, className) {
  car.className = className + ' car';
  data.direction = event.code;
}

function moveForward() {
  $car.style.left = data.x + 'px';
  data.x++;
}

function turnCar(event) {
  if (event.code === 'ArrowUp') {
    turnCarDirection($car, 'face-up');
  } else if (event.code === 'ArrowDown') {
    turnCarDirection($car, 'face-down');
  } else if (event.code === 'ArrowRight') {
    turnCarDirection($car, 'face-right');
  } else if (event.code === 'ArrowLeft') {
    turnCarDirection($car, 'face-left');
  } else if (event.code === 'Space') {
    setInterval(moveForward);
  }
}
document.addEventListener('keydown', turnCar);
