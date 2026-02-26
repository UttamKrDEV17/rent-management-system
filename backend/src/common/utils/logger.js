import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { asyncLocalStorage } from "../../middleware/requestContext.js";

const injectRequestId = format((info) => {
  const store = asyncLocalStorage.getStore();
  if (store?.requestId) {
    info.requestId = store.requestId;
  }
  return info;
});

const logger = createLogger({
  format: format.combine(
    injectRequestId(),
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    // Log rotation: create a new log file each day, keep logs for 14 days, and compress old logs
    new DailyRotateFile({
      dirname: "logs",
      filename: "app-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
    // Separate error logs with rotation
    new DailyRotateFile({
      dirname: "logs",
      filename: "app-error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      level: "error",
    }),
  ],
});

export default logger;