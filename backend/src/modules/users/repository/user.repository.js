import User from '../model/user.model.js';

export const createUser = async (data, session) => {
    const docs = await User.create([data], { session });
    return docs[0];
}

export const findUserByAuthId = (authId) => User.findOne({ auth: authId });

export const findUserByPhone = (phone) => phone ? User.findOne({ phone }).select('+auth') : null;

export const findUserById = (id) => User.findById(id);