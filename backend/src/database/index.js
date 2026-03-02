import mongoose from "mongoose";
import logger from "../common/utils/logger.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}?authSource=admin`,{});
      logger.info("Database connected successfully");
  } catch (error) {
    logger.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
