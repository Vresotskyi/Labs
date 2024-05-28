function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const addTwo = createAdder(2);
  const addTen = createAdder(10);
  
  console.log(addTwo(5)); 
  console.log(addTen(5)); 
  console.log(addTwo(10)); 