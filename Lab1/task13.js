let word = prompt("Введіть слово:");
console.log(`Довжина слова: ${word.length}`);
let reversedWord = word.split('').reverse().join('');
console.log(`Слово у зворотному порядку: ${reversedWord}`);
