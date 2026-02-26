export default class AppError extends Error {
  constructor(message, statusCode = 400, code = "APP_ERROR") {
    super(message);

    this.statusCode = statusCode;
    this.code = code;
    this.success = false;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}