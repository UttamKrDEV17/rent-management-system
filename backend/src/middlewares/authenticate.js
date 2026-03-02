import {verifyAccessToken} from "../utils/jwt.js";
import AppError from "../../common/errors/AppError.js";
import asyncHandler from "./asyncHandler.js";


const authenticate = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        throw new AppError('Authorization header is missing', 401, 'AUTH_HEADER_MISSING');
    }

    const parts = authHeader.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new AppError(
      "Invalid authorization format",
      401,
      "INVALID_AUTH_FORMAT"
    );
  }

    const token = parts[1];

    if(!token) {
        throw new AppError('Token is missing', 401, 'TOKEN_MISSING');
    }

    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next(); 
    }
);

export default authenticate;