function checkObjectClass(obj1, obj2) {
    // Перевірка, чи є об'єкти екземплярами одного класу
    const class1 = obj1.constructor.name;
    const class2 = obj2.constructor.name;
  
    if (class1 === class2) {
      console.log(`Об'єкти ${class1} та ${class2} належать до одного класу.`);
    } else {
      console.log(`Об'єкти ${class1} та ${class2} належать до різних класів.`);
    }
  }
  
  // Приклад використання
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Employee extends Person {
    constructor(name, position) {
      super(name);
      this.position = position;
    }
  }
  
  const person1 = new Person("John");
  const person2 = new Person("Jane");
  const employee1 = new Employee("Alex", "Manager");
  const employee2 = new Employee("Alice", "Developer");
  
  checkObjectClass(person1, person2); // Виведе: Об'єкти Person та Person належать до одного класу.
  checkObjectClass(person1, employee1); // Виведе: Об'єкти Person та Employee належать до різних класів.
  checkObjectClass(employee1, employee2); // Виведе: Об'єкти Employee та Employee належать до одного класу.
  