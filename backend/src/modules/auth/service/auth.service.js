import * as authRepo from '../repository/auth.repository.js';
import AppError from '../../../common/errors/AppError.js';
import mongoose from 'mongoose';
import logger from '../../../common/utils/logger.js';
import * as userService from '../../users/service/user.service.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../../common/utils/jwt.js';
import ms from 'ms';
import RefreshToken from '../model/token.model.js';
import { hash } from 'bcryptjs';
import { id } from 'zod/locales';

export const ownerRegister = async (data, userAgent, ipAddress) => {
    const existUser = await authRepo.findByEmail(data.email);
    if (existUser) {
        throw new AppError('User already exists', 409, 'AUTH_EXISTS');
    };
    
    const session = await mongoose.startSession();
    let auth, user;

    try{
        session.startTransaction();

            auth = await authRepo.createAuth({
                email: data.email,
                password: data.password,
                role: 'owner',
            }, session);

            user = await userService.createProfile({
                auth: auth._id,
                name: data.name,
                phone: data.phone,
            }, session);
        await session.commitTransaction();
    }
    catch(err) {
        await session.abortTransaction();
        throw err;
    }
    finally {
        await session.endSession();
    }

    const accessToken = generateAccessToken(auth._id, 'owner');

    const refreshToken = generateRefreshToken(auth._id);
    const refreshTokenHash = authRepo.hashedToken(refreshToken);
    try{
        await authRepo.createRefreshToken({
            user: auth._id,
            tokenHash: refreshTokenHash,
            expiresAt: new Date(Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRATION) * 1000),
            userAgent: userAgent,
            ipAddress: ipAddress,
        });

    }catch(err) {
        logger.error('Error creating refresh token', { error: err });
    }
    
    return {
        id: auth._id,
        email: auth.email,
        name: user.name,
        phone: user.phone,
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}

export const login = async (data,userAgent,ipAddress) => {
    const auth = data.email
    ? await authRepo.findByEmail(data.email)
    : await userService.findUserByPhone(data.phone).then(async (user) => user ? await authRepo.findById(user.auth) : null);

    if (!auth) {
        throw new AppError('User not found', 404, 'AUTH_NOT_FOUND');
    }
    const isPasswordValid = await authRepo.comparePassword(auth, data.password);
    if (!isPasswordValid) {
        throw new AppError('Invalid password', 401, 'AUTH_INVALID_PASSWORD');
    }
    const accessToken = generateAccessToken(auth._id, auth.role);
    const refreshToken = generateRefreshToken(auth._id);
    const refreshTokenHash = authRepo.hashedToken(refreshToken);
    let userData;
        try{
            await authRepo.createRefreshToken({
                user: auth._id,
                tokenHash: refreshTokenHash,
                expiresAt: new Date(Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRATION) * 1000),
                userAgent: userAgent,
                ipAddress: ipAddress,
            });

            userData = await userService.findUserByAuthId(auth._id);
        }catch(err) {
            logger.error('Error creating refresh token', { error: err });
        }

    return {
        id: auth._id,
        email: auth.email,
        role: auth.role,
        name: userData ? userData.name : null,
        phone: userData ? userData.phone : null,
        accessToken: accessToken,
        refreshToken: refreshToken
    };
}

export const tenantRegister = async (data) => {
    const existUser = await authRepo.findByEmail(data.email);
    if (existUser) {
        throw new AppError('User already exists', 409, 'AUTH_EXISTS');
    }

    const auth = await authRepo.createAuth({
        email: data.email,
        password: data.password,
            role: 'tenant',
        });

    return {
        id: auth._id,
        email: auth.email,
    }
}

export const tokenAccessRefresh = async (refreshToken, userAgent, ipAddress) => {
    if (!refreshToken) {
        throw new AppError('Refresh token missing', 401, 'REFRESH_TOKEN_MISSING');
    }

    const decoded = verifyRefreshToken(refreshToken);
    const auth = await authRepo.findById(decoded.userId);
    if (!auth) {
        throw new AppError('User not found', 404, 'AUTH_NOT_FOUND');
    }

    const hashedIncoming = authRepo.hashedToken(refreshToken)
    const storedToken = await authRepo.findTokenbyHash(hashedIncoming)
    

    if(!storedToken){
        throw new AppError('Refresh token not found', 404, 'REFRESH_TOKEN_NOT_FOUND');
    }

    if(storedToken.isRevoked) {
        await authRepo.revokeAllUserTokens(storedToken.user);
        throw new AppError('Refresh token revoked', 401, 'REFRESH_TOKEN_REVOKED');
    }

    if(storedToken.expiresAt < new Date()) {
        throw new AppError('Refresh token expired', 401, 'REFRESH_TOKEN_EXPIRED');
    }

    //Revoke old token
    storedToken.isRevoked = true;
    storedToken.revokedAt = new Date();
    await storedToken.save();

    //generate new tokens
    const newAccessToken = generateAccessToken(auth._id, auth.role);
    const newRefreshToken = generateRefreshToken(auth._id);

    const newStoredToken = await authRepo.createRefreshToken({
        user: auth._id,
        tokenHash: authRepo.hashedToken(newRefreshToken),
        expiresAt: new Date(Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRATION) * 1000),
        userAgent: userAgent,
        ipAddress: ipAddress,
        replacedByToken: storedToken._id,
    })
    const userData = await userService.findUserByAuthId(auth._id);


    storedToken.replacedByToken = newStoredToken._id;
    await storedToken.save();

    return {
        id: userData ? userData._id : null,
        email: auth.email,
        name: userData ? userData.name : null,
        phone: userData ? userData.phone : null,
        role: auth.role,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
    }
};

export const logout = async (refreshToken) => {
    const decoded = verifyRefreshToken(refreshToken);
    const auth = await authRepo.findById(decoded.userId);
    if (!auth) {
        throw new AppError('User not found', 404, 'AUTH_NOT_FOUND');
    }

    const hashedIncoming = authRepo.hashedToken(refreshToken)
    const storedToken = await authRepo.findTokenbyHash(hashedIncoming)

    if(!storedToken){
        throw new AppError('Refresh token not found', 404, 'REFRESH_TOKEN_NOT_FOUND');
    }

    if(storedToken.isRevoked) {
        await authRepo.revokeAllUserTokens(storedToken.user);
        throw new AppError('Refresh token revoked', 401, 'REFRESH_TOKEN_REVOKED');
    }

    await authRepo.revokeTokenByHash(hashedIncoming);
}