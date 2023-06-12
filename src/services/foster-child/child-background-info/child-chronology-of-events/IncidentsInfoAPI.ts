import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const incidentsInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getIncidentsInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/incidents-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteIncidentsInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/incidents-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetIncidentsInfoListQuery, useDeleteIncidentsInfoListMutation } = incidentsInfoApi;
