import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const therapyInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTherapyInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/therapy-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteTherapyInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/therapy-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetTherapyInfoListQuery, useDeleteTherapyInfoListMutation } = therapyInfoApi;
