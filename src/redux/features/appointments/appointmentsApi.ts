import { api } from "@/redux/api/apiSlice";


const appointmentsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllServices: builder.query({
          query: () => '/services',
        }),
        getAllBarber: builder.query({
          query: () => '/barbers',
        }),
        getAvailableTileSlot: builder.mutation({
          query: (data) => ({
            url: `/timeslot/available-timeslot`,
            method: 'POST',
            body: data,
          }),
        }),
        createAppointment: builder.mutation({
          query: (data) => ({
            url: `/appointments/make-appointment`,
            method: 'POST',
            body: data,
          }),
        }),
        getBarberAppointments: builder.query({
          query: () => '/appointments/get-barber-appointment',
        }),
      }),
})

export const { useGetAllServicesQuery, useGetAllBarberQuery, useGetAvailableTileSlotMutation, useCreateAppointmentMutation, useGetBarberAppointmentsQuery } = appointmentsApi;