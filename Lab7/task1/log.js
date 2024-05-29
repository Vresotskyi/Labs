const DEBUG = 0;
const INFO = 1;
const WARN = 2;
const ERROR = 3;

let currentLogLevel = DEBUG;

function setLogLevel(level) {
  currentLogLevel = level;
}я
function log(level, message) {
  if (level >= currentLogLevel) {
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

export { DEBUG, INFO, WARN, ERROR, setLogLevel, log };
