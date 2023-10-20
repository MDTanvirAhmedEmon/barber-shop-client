import { api } from "@/redux/api/apiSlice";


const appointmentManagementApi = api.injectEndpoints({
    endpoints: (builder: any) => ({
        getAllAppointment: builder.query({
          query: () => '/appointments',
          providesTags: ['appointments']
        }),
        updateAppointment: builder.mutation({
          query: ({data, id}: any) => ({
            url: `/appointments/${id}`,
            method: 'PATCH',
            body: data,
          }),
        }),
      }),
})

export const { useGetAllAppointmentQuery, useUpdateAppointmentMutation } = appointmentManagementApi;