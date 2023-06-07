import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const ofstedNotificationsApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getOfstedNotificationsList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/ofsted-notifications/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteOfstedNotificationsList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/ofsted-notifications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetOfstedNotificationsListQuery, useDeleteOfstedNotificationsListMutation } =
  ofstedNotificationsApi;
