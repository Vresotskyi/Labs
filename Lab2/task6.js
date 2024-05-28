const persons = [
    { name: "John", city: "Boston", yearOfBirth: 2000 },
    { name: "Jane", city: "New York", yearOfBirth: 1995 },
    { name: "Mike", city: "Los Angeles", yearOfBirth: 1985 },
    { name: "Anna", city: "Chicago", yearOfBirth: 2005 }
  ];
  
  const currentYear = new Date().getFullYear();
  
  const olderThan20 = persons.filter(person => {
    const age = currentYear - person.yearOfBirth;
    return age > 20;
  });
  
  console.log(olderThan20);