function logCall(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentTime = new Date().toLocaleTimeString();
            console.log(`Поточний час: ${currentTime}`);
            callback();
            resolve();
        }, 1000);
    });
}

function exampleCallback() {
    console.log('Викликано колбек');
}

logCall(exampleCallback)
    .then(() => logCall(exampleCallback))
    .then(() => logCall(exampleCallback))
    .then(() => logCall(exampleCallback))
    .then(() => {
        console.log('Усі виклики завершено');
    })
    .catch((error) => {
        console.error('Помилка:', error);
    });
