function getGreeting() {
    let lastArgument = null;
    let cachedGreeting = null;
  
    return function(name) {
      if (name === lastArgument) {
        return cachedGreeting;
      } else {
        lastArgument = name;
        cachedGreeting = `Hello ${name}`;
        return cachedGreeting;
      }
    };
  }
  
  const greet = getGreeting();
  
  console.log(greet("Alex")); 
  console.log(greet("Jane")); 
  console.log(greet("Alex")); 