function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    console.log("Початок очікування");
    await sleep(1000); // Очікування 1 секунди
    console.log("Закінчення очікування через 1 секунду");
}

example();
