function callbackWrapper(callback) {
    return function(...args) {
      const functionName = callback.name || "anonymous function";
      const currentTime = new Date().toLocaleTimeString();
      console.log(`Function Name: ${functionName}`);
      console.log(`Arguments: ${args}`);
      console.log(`Time of Invocation: ${currentTime}`);
      callback(...args);
    };
  }
  function myCallback(a, b) {
    console.log(a + b);
  }
  const wrappedCallback = callbackWrapper(myCallback);
  wrappedCallback(2, 3);
  