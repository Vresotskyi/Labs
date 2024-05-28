function Car(owner, model, engineVolume) {
    this.owner = owner;
    this.model = model;
    this.engineVolume = engineVolume;
}

let cars = [
    new Car('Іван Іванов', 'Toyota Corolla', 1.8),
    new Car('Петро Петренко', 'Honda Civic', 1.6),
    new Car('Олександр Олександров', 'Ford Focus', 2.0),
    new Car('Марія Марієнко', 'Mazda 3', 1.5)
];

let carWithMinEngineVolume = cars.reduce((minCar, currentCar) => {
    return (currentCar.engineVolume < minCar.engineVolume) ? currentCar : minCar;
}, cars[0]);

console.log("Машина з мінімальним об'ємом двигуна:");
console.log(`Власник: ${carWithMinEngineVolume.owner}`);
console.log(`Модель: ${carWithMinEngineVolume.model}`);
console.log(`Об'єм двигуна: ${carWithMinEngineVolume.engineVolume}`);
