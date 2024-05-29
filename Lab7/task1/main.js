import { DEBUG, INFO, WARN, ERROR, setLogLevel, log } from './log.js';

setLogLevel(INFO);

log(INFO, "This is an info message");
log(WARN, "This is a warning message");
log(ERROR, "This is an error message");

log(DEBUG, "This is a debug message");
