import { api } from "@/redux/api/apiSlice";

const timeSlotApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllTimeSlot: builder.query({
      query: () => "/timeslot",
      providesTags: ["timeslot"],
    }),

    createTimeSlot: builder.mutation({
      query: (data: any) => ({
        url: `/timeslot/create-timeslot`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["timeslot"],
    }),

    deleteTimeSlot: builder.mutation({
      query: (id: any) => ({
        url: `/timeslot/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["timeslot"],
    }),
  }),
});

export const {
  useGetAllTimeSlotQuery,
  useCreateTimeSlotMutation,
  useDeleteTimeSlotMutation,
} = timeSlotApi;
