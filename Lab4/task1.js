  //функція
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  const myCar = new Car("Toyota", "Camry", 2022);
  
  myCar.brand = "Toyota";
  myCar.model = "Camry";
  myCar.year = 2022;
  
  console.log(myCar);
  
 //конструктор класу
class Car1 {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  }
  
  const myCar1 = new Car1("Toyota", "Camry", 2022);

  myCar1.brand = "Toyota";
  myCar1.model = "Camry";
  myCar1.year = 2022;
  
  console.log(myCar1);
  