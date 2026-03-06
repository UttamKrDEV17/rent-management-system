import * as userRepo from '../repository/user.repository.js';

export const createProfile = async (profileData, session) => {
    const user = await userRepo.createUser({
        auth: profileData.auth,
        name: profileData.name,
        phone: profileData.phone,
    },session);
    return user;
}

export const findUserByAuthId = (authId) => userRepo.findUserByAuthId(authId);

export const findUserById = (id) => userRepo.findUserById(id);

export const findUserByPhone = (phone) => userRepo.findUserByPhone(phone);