import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const exclusionInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getExclusionInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/exclusion-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteExclusionInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/exclusion-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetExclusionInfoListQuery, useDeleteExclusionInfoListMutation } =
  exclusionInfoApi;
