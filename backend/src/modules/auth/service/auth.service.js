import jwt from 'jsonwebtoken';

import * as authRepo from '../repository/auth.repository.js';
import AppError from '../../../common/errors/AppError.js';

export const register = async (data) => {
    const existUser = await authRepo.findByEmail(data.email);
    if (existUser) {
        throw new AppError('User already exists', 409, 'AUTH_EXISTS');
    }

    const auth = await authRepo.createAuth({
        email: data.email,
        password: data.password,
        role: data.role,
    });

    return {
        id: auth._id,
        email: auth.email,
    }
}