function Person(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  function Employee(firstName, lastName, birthYear, position) {
    Person.call(this, firstName, lastName, birthYear);
    this.position = position;
  }
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  Employee.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}, ${this.position}`;
  };
  
  const employee1 = new Employee("Veresotskyi", "Oleksandr", 2003, "Manager");
  
  console.log(employee1.getFullName());
  