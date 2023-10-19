import { api } from "@/redux/api/apiSlice";

const barberApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllBarber: builder.query({
      query: () => "/barbers",
      providesTags: ["barbers"],
    }),
    getSingleBarber: builder.query({
        query: (id:any) => `/barbers/${id}`,
      }),
    createBarber: builder.mutation({
      query: (data:any) => ({
        url: `/barbers/create-barber`,
        method: "POST",
        body: data,
      }),
    }),
    deleteBarber: builder.mutation({
      query: (id:any) => ({
        url: `/barbers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["barbers"],
    }),
    updateBarber: builder.mutation({
      query: ({ data, id }:any) => ({
        url: `/barbers/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBarberQuery,
  useCreateBarberMutation,
  useDeleteBarberMutation,
  useUpdateBarberMutation,
  useGetSingleBarberQuery,
} = barberApi;
