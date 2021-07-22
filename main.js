var $car = document.querySelector('.car>img');
function turnCarUp(car) {
  car.className = 'face-up';
}
function turnCarDown(car) {
  car.className = 'face-down';
}
function turnCarRight(car) {
  car.className = 'face-right';
}
function turnCarLeft(car) {
  car.className = 'face-left';
}

function turnCar(event) {
  if (event.key === 'ArrowUp') {
    turnCarUp($car);
  } else if (event.key === 'ArrowDown') {
    turnCarDown($car);
  } else if (event.key === 'ArrowRight') {
    turnCarRight($car);
  } else if (event.key === 'ArrowLeft') {
    turnCarLeft($car);
  }
}
document.addEventListener('keydown', turnCar);
