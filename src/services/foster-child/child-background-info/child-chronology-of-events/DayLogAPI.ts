import { baseAPI } from "@root/services/baseApi";

const TAG = "DAY_LOG";

export const dayLogApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDayLogList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/day-log/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteDayLogList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/day-log/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetDayLogListQuery, useDeleteDayLogListMutation } = dayLogApi;
