const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");

const allowedTransports = [];

allowedTransports.push(
  //On top of below format we've format for console based printing
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),

      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
      )
    ),
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: `app.log`,
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    //First Argument
    winston.format.timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),
    //2nd Argument
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
