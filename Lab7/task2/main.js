import Logger, { DEBUG, INFO, WARN, ERROR } from './Logger.js';


const logger = new Logger();


logger.setLogLevel(INFO);


logger.log(INFO, "This is an info message");
logger.log(WARN, "This is a warning message");
logger.log(ERROR, "This is an error message");


logger.log(DEBUG, "This is a debug message");
