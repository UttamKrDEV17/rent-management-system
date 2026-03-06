import {baseApi} from "../../../services/api/baseApi"
import {logout, setCredentials} from "../authSlice";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            }),

            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    const {accessToken, ...user} = data?.data || {};
                    
                    dispatch(
                        setCredentials({
                            accessToken,
                            user
                        })
                    )
                } catch (error) {
                    console.error('Login failed:', error);
                }
            }
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST', 
            }),

            async onQueryStarted(arg, {dispatch}) {
                dispatch(logout())
            }
        }),

        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh-token',
                method: 'POST',
            }),
        }),
    })
})

export const {useLoginMutation, useLogoutMutation, useRefreshMutation} = authApi;