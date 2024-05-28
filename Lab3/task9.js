const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

const otherPerson = {
  name: "Jane"
};

// Викликати greet за допомогою call з контекстом person
person.greet.call(person);

// Викликати greet за допомогою apply з контекстом otherPerson та аргументами
person.greet.apply(otherPerson);

// Викликати greet за допомогою bind з контекстом person та збереженням зв'язку
const boundGreet = person.greet.bind(person);
boundGreet();
