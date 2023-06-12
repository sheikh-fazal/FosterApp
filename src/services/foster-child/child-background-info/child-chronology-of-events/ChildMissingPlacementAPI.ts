import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const childMissingPlacementApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildMissingPlacementList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/child-missing-placement/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteChildMissingPlacementList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/child-missing-placement/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetChildMissingPlacementListQuery, useDeleteChildMissingPlacementListMutation } =
  childMissingPlacementApi;
