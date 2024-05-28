const users = [
    { firstname: 'John', lastname: 'Doe', score: 75 },
    { firstname: 'Jane', lastname: 'Doe', score: 85 },
    { firstname: 'Jim', lastname: 'Beam', score: 90 },
    { firstname: 'Jack', lastname: 'Daniels', score: 65 },
    { firstname: 'Johnny', lastname: 'Walker', score: 70 },
    { firstname: 'James', lastname: 'Bond', score: 95 },
    { firstname: 'Jason', lastname: 'Bourne', score: 80 },
    { firstname: 'Harry', lastname: 'Potter', score: 88 },
    { firstname: 'Ron', lastname: 'Weasley', score: 60 },
    { firstname: 'Hermione', lastname: 'Granger', score: 92 },
    { firstname: 'Luke', lastname: 'Skywalker', score: 77 },
    { firstname: 'Han', lastname: 'Solo', score: 68 },
    { firstname: 'Leia', lastname: 'Organa', score: 86 },
    { firstname: 'Anakin', lastname: 'Skywalker', score: 78 },
    { firstname: 'Obi-Wan', lastname: 'Kenobi', score: 82 },
    { firstname: 'Darth', lastname: 'Vader', score: 66 },
    { firstname: 'Yoda', lastname: 'Master', score: 99 },
    { firstname: 'Palpatine', lastname: 'Emperor', score: 72 },
    { firstname: 'Qui-Gon', lastname: 'Jinn', score: 81 },
    { firstname: 'Mace', lastname: 'Windu', score: 84 },
];

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomUsers = [];
            for (let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * users.length);
                randomUsers.push(users[randomIndex]);
            }
            resolve(randomUsers);
        }, 1000);
    });
}

function getNewUsers() {
    return users.slice(0, 5);
}
