import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true,
        index: true,
    },
    tokenHash: {
        type: String,
        required: true,
        unique: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    userAgent: {
        type: String,        
    },
    ipAddress: {
        type: String,
    },
    isRevoked: {
        type: Boolean,
        defualt: false,
    },
    revokedAt: {
        type: Date,        
    },
    replacedByToken: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RefreshToken',
    },
},{timestamps: true});

// Auto delete expired tokens (MongoDB TTL index)
refreshTokenSchema.index({expiresAt: 1}, {expireAfterSeconds: 0});

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);

export default RefreshToken;