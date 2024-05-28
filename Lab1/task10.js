let array = [3, -7, 5, -2, 8];
let squareOfThird = array[2] ** 2;
let sumFirstAndLast = array[0] + array[array.length - 1];
let sumOfSquaresNegatives = array
    .filter(num => num < 0)
    .reduce((sum, num) => sum + num ** 2, 0);

console.log("Квадрат третього числа:", squareOfThird);
console.log("Сума першого і останнього елемента:", sumFirstAndLast);
console.log("Сума квадратів від’ємних елементів:", sumOfSquaresNegatives);