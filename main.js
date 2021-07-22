// data portion
var data = {
  x: 0,
  y: 0,
  direction: 'ArrowRight',
  moving: false
};

var $car = document.querySelector('.car');
function turnCarDirection(car, className) {
  car.className = className + ' car';
  data.direction = event.code;
}

function moveForward() {
  if (data.direction === 'ArrowDown') {
    $car.style.top = data.y + 'px';
    data.y++;
  } else if (data.direction === 'ArrowUp') {
    $car.style.top = data.y + 'px';
    data.y--;
  } else if (data.direction === 'ArrowRight') {
    $car.style.left = data.x + 'px';
    data.x++;
  } else if (data.direction === 'ArrowLeft') {
    $car.style.left = data.x + 'px';
    data.x--;
  }
}

var driving = null;
function turnCarOnOrOff() {
  if (data.moving === false) {
    data.moving = true;
    driving = setInterval(moveForward, 0);
  } else {
    data.moving = false;
    clearInterval(driving);
  }
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
    turnCarOnOrOff();
  }
}
document.addEventListener('keydown', turnCar);
