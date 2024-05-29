const CaesarCipher = require('./caesarCipher');

const shift = 3;
const cipher = new CaesarCipher(shift);

const encrypted = cipher.encrypt('Hello, World!');
console.log(`Encrypted: ${encrypted}`);

const decrypted = cipher.decrypt(encrypted);
console.log(`Decrypted: ${decrypted}`);
