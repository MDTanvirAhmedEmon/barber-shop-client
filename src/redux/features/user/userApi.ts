import { api } from "@/redux/api/apiSlice";


const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
          query: (data) => ({
            url: `/customers/create-customer`,
            method: 'POST',
            body: data,
          }),
        }),
        logInUser: builder.mutation({
          query: (data) => ({
            url: `/auth/login`,
            method: 'POST',
            body: data,
          }),
        }),
      }),
})

export const { useRegisterUserMutation, useLogInUserMutation } = userApi;