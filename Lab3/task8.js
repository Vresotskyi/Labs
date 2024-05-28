const capitalizeProperty = (array, property) =>
    array.map(item => ({
      ...item,
      [property]: item[property][0].toUpperCase() + item[property].slice(1)
    }));
  const objects = [
    { name: "john", age: 25 },
    { name: "jane", age: 30 },
    { name: "alex", age: 35 }
  ];
  
  const newArray = capitalizeProperty(objects, "name");
  console.log(newArray);
  
