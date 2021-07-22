var $car = document.querySelector('.car>img');
function turnCarDirection(car, className) {
  car.className = className;
}

function turnCar(event) {
  if (event.key === 'ArrowUp') {
    turnCarDirection($car, 'face-up');
  } else if (event.key === 'ArrowDown') {
    turnCarDirection($car, 'face-down');
  } else if (event.key === 'ArrowRight') {
    turnCarDirection($car, 'face-right');
  } else if (event.key === 'ArrowLeft') {
    turnCarDirection($car, 'face-left');
  }
}
document.addEventListener('keydown', turnCar);
