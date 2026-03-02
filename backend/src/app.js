
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import logger from './common/utils/logger.js';
import requestContext from './middlewares/requestContext.js';
import errorHandler from './common/errors/errorHandler.js';
import authRoutes from './modules/auth/routes/auth.route.js';

const app = express();

app.use(cors());
app.use(requestContext);
app.use(morgan("combined", {stream: {write: (message) => logger.info(message.trim())}}));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());


// middlewares


//routes
app.use("/api/v1/auth", authRoutes);
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use(errorHandler);


// middleware to handle errors
app.use((err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
  });

  res.status(500).json({
    message: "Internal Server Error",
  });
});

export default app;