function replaceWord(text, oldWord, newWord) {
    return text.replace(new RegExp('\\b' + oldWord + '\\b', 'gi'), newWord);
  }
  
  const text = "Hello my name is John";
  const newText = replaceWord(text, "John", "Alisa");
  
  console.log(newText);
  