//Використання методу concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//Використання методу push
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];

array1.push(...array2);
console.log(array1); // [1, 2, 3, 4, 5, 6]