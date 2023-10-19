import { api } from "@/redux/api/apiSlice";

const manageUserApi = api.injectEndpoints({
    endpoints: (builder: any) => ({
        getAllUsers: builder.query({
          query: () => '/customers',
          providesTags: ['users']
        }),
        getSingleUser: builder.query({
          query: (id: any) => `/customers/${id}`,
        }),
        deleteUser: builder.mutation({
          query: (id: any) => ({
            url: `/customers/${id}`,
            method: 'DELETE',
          }),
          invalidatesTags: ['users']
        }),
        updateUser: builder.mutation({
          query: ({data, id}: any) => ({
            url: `/customers/${id}`,
            method: 'PATCH',
            body: data,
          }),
        }),
      }),
})

export const { useGetAllUsersQuery, useGetSingleUserQuery, useDeleteUserMutation, useUpdateUserMutation } = manageUserApi;