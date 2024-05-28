function values(f, low, high) {
    const result = [];
    for (let x = low; x <= high; x++) {
      result.push(f(x));
    }
    return result;
  }
  
  function square(x) {
    return x * x;
  }
  
  const squaredValues = values(square, 1, 5);
  console.log(squaredValues);
  