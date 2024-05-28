
function Person(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
  
  Person.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
  
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  const person1 = new Person("Veresotskyi", "Oleksandr", 2003);
  
  console.log(person1.getAge());
  console.log(person1.getFullName()); 
  