import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const allegationsInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllegationsInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/allegations-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteAllegationsInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/allegations-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetAllegationsInfoListQuery, useDeleteAllegationsInfoListMutation } = allegationsInfoApi;
