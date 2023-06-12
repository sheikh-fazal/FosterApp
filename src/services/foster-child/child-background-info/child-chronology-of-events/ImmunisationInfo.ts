import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const immunisationInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getImmunisationInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/immunisation-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteImmunisationInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/immunisation-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetImmunisationInfoListQuery, useDeleteImmunisationInfoListMutation } = immunisationInfoApi;
