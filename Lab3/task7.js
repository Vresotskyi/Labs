function createTextFinder(texts) {
    return function(fragment) {
      return texts.includes(fragment);
    };
  }
  
  const texts = ["apple", "banana", "orange"];
  const textFinder = createTextFinder(texts);
  
  console.log(textFinder("banana"));
  console.log(textFinder("grape"));
  