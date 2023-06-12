import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const complaintsInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getComplaintsInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/complaints-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteComplaintsInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/complaints-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetComplaintsInfoListQuery, useDeleteComplaintsInfoListMutation } = complaintsInfoApi;
