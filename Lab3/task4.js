function createCounter() {
    let value = 0;
  
    return {
      increment: function() {
        value++;
      },
      getValue: function() {
        return value;
      }
    };
  }
  
  const counter = createCounter();
  
  counter.increment();
  counter.increment();
  counter.increment();
  console.log(counter.getValue());
  