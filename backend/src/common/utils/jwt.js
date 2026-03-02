import jwt from 'jsonwebtoken';

const generateAccessToken = (userId,role) => {
    return jwt.sign(
        {
            userId: userId,
            role: role
        },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );
}

const generateRefreshToken = (payload) => {
    return jwt.sign(
        {
            userId: payload
        },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
    );
}

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
}

const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
}

export {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
}