let a = parseFloat(prompt("Введіть перше число (a):"));
let b = parseFloat(prompt("Введіть друге число (b):"));
let c = parseFloat(prompt("Введіть третє число (c):"));
let d = parseFloat(prompt("Введіть четверте число (d):"));

// Знаходимо min(a, b) та min(c, d)
let minAB = Math.min(a, b);
let minCD = Math.min(c, d);

// Знаходимо max{min(a, b), min(c, d)}
let result = Math.max(minAB, minCD);

console.log(`max{min(a, b), min(c, d)} = ${result}`);
