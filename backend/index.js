import env from "./src/config/env.js";
import app from "./src/app.js";
import logger from "./src/common/utils/logger.js";


import connectDB from "./src/database/index.js";

const PORT = env.PORT;

connectDB();

app.listen(PORT, () => {
  logger.info(`Server is running on port http://localhost:${PORT}`);
});