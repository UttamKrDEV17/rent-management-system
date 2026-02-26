import asyncHandler from "../../../middleware/asyncHandler.js";
import sendResponse from "../../../common/utils/sendResponse.js";

import * as authService from '../service/auth.service.js';

export const register = asyncHandler(async(req, res) => {
    const data = await authService.register(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Registered',
        data,
    });
})