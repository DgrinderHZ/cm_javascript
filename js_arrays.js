let cars = ["BMW", "Volvo", "Mini"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let item of cars) {
  console.log("---------------------------");
}

for (let item of cars) {
  console.log(item);
}

for (let i in cars) {
  console.log(cars[i]);
}
