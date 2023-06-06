import { baseAPI } from "@root/services/baseApi";

const TAG = "OOH_REPORTS";

export const OOHReportsApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getOOHReportsList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/ooh-reports/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteOOHReportsList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/ooh-reports/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetOOHReportsListQuery, useDeleteOOHReportsListMutation } = OOHReportsApi;
