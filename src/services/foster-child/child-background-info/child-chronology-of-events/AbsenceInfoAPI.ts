import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const absenceInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAbsenceInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/absence-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteAbsenceInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/absence-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetAbsenceInfoListQuery, useDeleteAbsenceInfoListMutation } = absenceInfoApi;
