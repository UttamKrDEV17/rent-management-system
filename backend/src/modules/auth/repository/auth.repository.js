import Auth from '../model/auth.model.js';

export const createAuth = (data) => Auth.create(data);

export const findByEmail = (email) => Auth.findOne({ email }).select('+password');

export const findById = (id) => Auth.findById(id);
