const person = {
    name: "John",
    surname: "Doe",
    dateOfBirth: new Date(1990, 1, 15),
  
    // Геттер для року народження
    get birthYear() {
      return this.dateOfBirth.getFullYear();
    }
  };
  
  console.log(person.name); 
  console.log(person.surname); 
  console.log(person.dateOfBirth); 
  console.log(person.birthYear); 
  
 