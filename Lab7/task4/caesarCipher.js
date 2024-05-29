const Logger = require('./logger');
const logger = new Logger();

class CaesarCipher {
    constructor(shift) {
        this.shift = shift;
    }

    encrypt(text) {
        return text.split('')
                   .map(char => this.shiftChar(char, this.shift))
                   .join('');
    }

    decrypt(text) {
        logger.log(`Decrypting text: ${text}`);
        return text.split('')
                   .map(char => this.shiftChar(char, -this.shift))
                   .join('');
    }

    shiftChar(char, shift) {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { 
            return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
        } else if (code >= 97 && code <= 122) { 
            return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
        } else {
            return char;
        }
    }
}

module.exports = CaesarCipher;
