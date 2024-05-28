let persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 28, city: 'Chicago' },
    { name: 'Carol', age: 22, city: 'San Francisco' },
    { name: 'Dave', age: 35, city: 'Seattle' }
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

// Виведення елементів масиву за допомогою класичного циклу for
console.log('Елементи масиву persons:');
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}

// Виведення елементів масиву за допомогою for...of
console.log('Елементи масиву persons (for...of):');
for (let person of persons) {
    console.log(person);
}

// Виведення елементів масиву за допомогою forEach
console.log('Елементи масиву persons (forEach):');
persons.forEach(person => {
    console.log(person);
});

// Виведення додаткових властивостей масиву persons за допомогою for...in
console.log('Властивості масиву persons:');
for (let key in persons) {
    if (persons.hasOwnProperty(key) && typeof persons[key] !== 'function') {
        console.log(`${key}: ${persons[key]}`);
    }
}
