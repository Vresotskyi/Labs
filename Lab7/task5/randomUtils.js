function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntArray(length, min, max) {
    return Array.from({ length }, () => getRandomInt(min, max));
}

function getRandomText(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars.charAt(getRandomInt(0, chars.length - 1))).join('');
}

export { getRandomInt };

export { getRandomIntArray };

export { getRandomText };

export default {
    getRandomInt,
    getRandomIntArray,
    getRandomText
};
