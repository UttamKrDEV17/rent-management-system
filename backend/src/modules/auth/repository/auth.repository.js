import Auth from '../model/auth.model.js';
import bcrypt from 'bcryptjs';
import RefreshToken from '../model/token.model.js';
import crypto from 'crypto';

//Auth related database operations
export const createAuth = async (data, session) => {
  const docs = await Auth.create([data], { session });
  return docs[0];
};

export const findByEmail = (email) => 
  email ? Auth.findOne({ email }).select('+password') : null;

export const findById = (id) => Auth.findById(id).select('+password');

export const comparePassword = async (auth, password) => {
  return await bcrypt.compare(password, auth.password);
}


// Refresh token related database operations
export const createRefreshToken = (data) => RefreshToken.create(data);

//token hashing for security
export const hashedToken = (token) => {
    return crypto.createHash('sha256').update(token).digest('hex');
}

export const findTokenbyHash = (hash) => RefreshToken.findOne({tokenHash: hash}); 

export const revokeAllUserTokens = async (userId) => {
  await RefreshToken.updateMany({ user: userId, isRevoked: false }, { isRevoked: true, revokedAt: new Date() });
}

export const revokeTokenByHash = async (tokenHash) => {
    await RefreshToken.findOneAndUpdate(
        { tokenHash },
        { isRevoked: true, revokedAt: new Date() }
    );
};