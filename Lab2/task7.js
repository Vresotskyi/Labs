const persons = [
    { name: "John", city: "Boston", yearOfBirth: 2000 },
    { name: "Jane", city: "New York", yearOfBirth: 1995 },
    { name: "Mike", city: "Los Angeles", yearOfBirth: 1985 }
  ];
  
  // Деструктуризація масиву persons для отримання першого елемента
  const [firstPerson] = persons;
  
  // Деструктуризація об'єкта firstPerson для отримання полів name та city
  const { name, city } = firstPerson;
  
  console.log(name);
  console.log(city); 
  console.log(firstPerson);
  