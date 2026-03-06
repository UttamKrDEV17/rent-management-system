import asyncHandler from "../../../middlewares/asyncHandler.js";
import sendResponse from "../../../common/utils/sendResponse.js";
import cookie from 'cookie-parser';

import * as authService from '../service/auth.service.js';
import { REFRESH_TOKEN_COOKIE_OPTIONS } from "../../../config/cookie.js";


export const ownerRegister = asyncHandler(async(req, res) => {
    const data = await authService.ownerRegister(req.body, req.headers['user-agent'], req.ip);
    res.cookie("refreshToken", data.refreshToken, REFRESH_TOKEN_COOKIE_OPTIONS);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Owner Registered',
        data: {
            id: data.id,
            email: data.email,
            name: data.name,
            phone: data.phone,
            accessToken: data.accessToken,
        },
    });
})

export const tenantRegister = asyncHandler(async(req, res) => {
    const data = await authService.tenantRegister(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Tenant Registered',
        data,
    });
})

export const login = asyncHandler(async(req, res) => {
    const data = await authService.login(req.body,req.headers['user-agent'],req.ip);
    res.cookie("refreshToken",data.refreshToken,REFRESH_TOKEN_COOKIE_OPTIONS);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Login successful',
        data: {
            id: data.id,
            email: data.email,
            name: data.name,
            phone: data.phone,
            role: data.role,
            accessToken: data.accessToken,
        },
    });
})

export const logout = asyncHandler(async(req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    if(refreshToken) {
        await authService.logout(refreshToken);
    }
    res.clearCookie("refreshToken", REFRESH_TOKEN_COOKIE_OPTIONS);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Logout successful',
        data: null,
    });
})

export const tokenAccessRefresh = asyncHandler(async(req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    const data = await authService.tokenAccessRefresh(refreshToken, req.headers['user-agent'], req.ip);
    res.cookie("refreshToken", data.refreshToken, REFRESH_TOKEN_COOKIE_OPTIONS);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Token refreshed',
        data: {
            id: data.id,
            name: data.name,
            phone: data.phone,
            email: data.email,
            role: data.role,
            accessToken: data.accessToken,
        },
    });
})