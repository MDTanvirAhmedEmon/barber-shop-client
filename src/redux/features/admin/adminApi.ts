import { api } from "@/redux/api/apiSlice";


const adminApi = api.injectEndpoints({
    endpoints: (builder: any) => ({
        getAllAdmin: builder.query({
          query: () => '/admin',
          providesTags: ['admins']
        }),
        getSingleAdmin: builder.query({
          query: (id: any) => `/admin/${id}`,
        }),
        deleteAdmin: builder.mutation({
          query: (id: any) => ({
            url: `/admin/${id}`,
            method: 'DELETE',
          }),
          invalidatesTags: ['admins']
        }),
        createAdmin: builder.mutation({
          query: (data: any) => ({
            url: `/admin/create-admin`,
            method: 'POST',
            body: data,
          }),
        }),
        updateAdmin: builder.mutation({
          query: ({data, id}: any) => ({
            url: `/admin/${id}`,
            method: 'PATCH',
            body: data,
          }),
        }),
      }),
})

export const { useGetAllAdminQuery, useDeleteAdminMutation, useCreateAdminMutation, useUpdateAdminMutation, useGetSingleAdminQuery } = adminApi;