const fs = require('fs');

class Logger {
    constructor(filename = 'log.txt') {
        this.filename = filename;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} - ${message}\n`;
        fs.appendFile(this.filename, logMessage, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = Logger;
