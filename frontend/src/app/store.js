import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { baseApi } from '../services/api/baseApi';

export const store = configureStore({
    reducer: {
        ...rootReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})