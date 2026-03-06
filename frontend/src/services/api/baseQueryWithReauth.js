import env from "../../config/env"
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setCredentials,logout } from "../../features/auth/authSlice";


const baseQuery = fetchBaseQuery({
    baseUrl: env.API_BASE_URL,
    credentials: 'include',

    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.accessToken;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery(
            { url: "/auth/refresh", method: 'POST' },
            api,
            extraOptions
        );

        if (refreshResult?.data) {
            api.dispatch(
                setCredentials({
                    accessToken: refreshResult.data.accessToken,
                })
            )
            result = await baseQuery(args, api, extraOptions);
        }else{
            api.dispatch(logout());
        }
    }
    return result;
}