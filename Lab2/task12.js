function sentenceToArray(sentence) {
    return sentence.split(' ');
  }
  
  const sentence = "Привіт, як тебе звати?";
  const wordsArray = sentenceToArray(sentence);
  
  console.log(wordsArray);