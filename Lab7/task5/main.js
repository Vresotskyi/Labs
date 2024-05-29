import randomUtils, { getRandomInt, getRandomIntArray, getRandomText } from './randomUtils.js';

console.log('Default Export:');
console.log(`Random Int: ${randomUtils.getRandomInt(1, 100)}`);
console.log(`Random Int Array: ${randomUtils.getRandomIntArray(5, 1, 100)}`);
console.log(`Random Text: ${randomUtils.getRandomText(10)}`);

console.log('Named Export:');
console.log(`Random Int: ${getRandomInt(1, 100)}`);
console.log(`Random Int Array: ${getRandomIntArray(5, 1, 100)}`);
console.log(`Random Text: ${getRandomText(10)}`);
