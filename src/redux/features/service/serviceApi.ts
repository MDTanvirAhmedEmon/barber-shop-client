import { api } from "@/redux/api/apiSlice";

const serviceApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllService: builder.query({
      query: () => "/services",
      providesTags: ["services"],
    }),
    getSingleService: builder.query({
        query: (id:any) => `/services/${id}`,
      }),
    createService: builder.mutation({
      query: (data:any) => ({
        url: `/services/create-service`,
        method: "POST",
        body: data,
      }),
    }),
    deleteService: builder.mutation({
      query: (id:any) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["services"],
    }),
    updateService: builder.mutation({
      query: ({ data, id }:any) => ({
        url: `/services/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
    useGetAllServiceQuery,
    useGetSingleServiceQuery,
    useCreateServiceMutation,
    useDeleteServiceMutation,
    useUpdateServiceMutation
} = serviceApi;
