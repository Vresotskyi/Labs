function reverseWord(word) {
    const letters = word.split('');
    const reversedLetters = letters.reverse();
    const reversedWord = reversedLetters.join('');
    return reversedWord;
  }
  
  const word = "Hello";
  const reversedWord = reverseWord(word);
  console.log(reversedWord); 
  