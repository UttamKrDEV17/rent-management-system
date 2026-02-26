import AppError from './AppError.js';

export default function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let code = err.code || "INTERNAL_ERROR";

  // mongoose duplicate key
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value";
    code = "DUPLICATE_ERROR";
  }

  // mongoose validation
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((v) => v.message)
      .join(", ");
    code = "VALIDATION_ERROR";
  }

  // custom app error
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    code = err.code;
  }

  const response = {
    success: false,
    code,
    message,
  };

  // show stack only in development
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
}