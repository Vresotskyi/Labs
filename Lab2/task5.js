const persons = [
    { name: "John", city: "Boston", yearOfBirth: 2000 },
    { name: "Jane", city: "New York", yearOfBirth: 1995 },
    { name: "Mike", city: "Los Angeles", yearOfBirth: 1985 }
  ];
  
  const textFragments = persons.map(person => {
    return `${person.name} from ${person.city} born in ${person.yearOfBirth}`;
  });
  
  console.log(textFragments);