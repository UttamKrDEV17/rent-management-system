import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const env = {
  PORT: process.env.PORT || 3000,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,

  JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES || "15m",
  JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES || "7d",
};

export default env;