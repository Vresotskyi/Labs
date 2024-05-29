const DEBUG = 0;
const INFO = 1;
const WARN = 2;
const ERROR = 3;

class Logger {
  constructor() {
    this.currentLogLevel = DEBUG;
  }

  
  setLogLevel(level) {
    this.currentLogLevel = level;
  }

 
  log(level, message) {
    if (level >= this.currentLogLevel) {
      switch (level) {
        case DEBUG:
          console.debug(`DEBUG: ${message}`);
          break;
        case INFO:
          console.info(`INFO: ${message}`);
          break;
        case WARN:
          console.warn(`WARN: ${message}`);
          break;
        case ERROR:
          console.error(`ERROR: ${message}`);
          break;
        default:
          console.log(`LOG: ${message}`);
          break;
      }
    }
  }
}

export default Logger;
export { DEBUG, INFO, WARN, ERROR };
