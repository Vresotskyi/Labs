class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
Car1 = Object.create(Car);
Car1.brand = 'Toyota';
Car1.model = "Camry";
Car1.year = 2020;
console.log(Car1);

Car2 = Object.create(Car);
Car2.brand = "Honda";
Car2.model = "Accord";
Car2.year = 2023;
console.log(Car2);
