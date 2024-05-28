function cachedFunction(func) {
    let lastResult;
    let lastArgs;
    let lastCallTime;
  
    return function(...args) {
      const currentTime = Date.now();
  
      if (!lastResult || !lastArgs || currentTime - lastCallTime > 10000) {
        lastResult = func(...args);
        lastArgs = args;
        lastCallTime = currentTime;
      }
  
      return lastResult;
    };
  }
  function add(a, b) {
    console.log("Adding...");
    return a + b;
  }
  
  const cachedAdd = cachedFunction(add);
  
  console.log(cachedAdd(2, 3));
  console.log(cachedAdd(2, 3)); 
  console.log(cachedAdd(4, 5)); 