const users = [
    { id: 0, name: "Alice", age: 25, city: "New York" },
    { id: 1, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 2, name: "Charlie", age: 35, city: "Chicago" },
    { id: 3, name: "Diana", age: 28, city: "Houston" }
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}

function loadUsers(ids) {
    const promises = ids.map(id => getUser(id));
    return Promise.allSettled(promises)
        .then(results => {
            return results.map(result => {
                if (result.status === 'fulfilled') {
                    return result.value;
                } else {
                    return { error: result.reason.message };
                }
            });
        });
}

const userIds = [0, 1, 4]; // 4 - неіснуючий id

loadUsers(userIds).then(users => {
    console.log("Результати завантаження користувачів:", users);
}).catch(error => {
    console.error("Помилка при завантаженні користувачів:", error);
});
