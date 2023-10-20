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
        getSingleCustomerInfo: builder.query({
          query: () => `/customers/customer-info`,
        }),
        getCustomerAppointments: builder.query({
          query: () => `/appointments/get-customer-appointment`,
        }),
      }),
})

export const { useRegisterUserMutation, useLogInUserMutation, useGetSingleCustomerInfoQuery, useGetCustomerAppointmentsQuery } = userApi;