import { baseAPI } from "@root/services/baseApi";

const TAG = "VOCATIONAL-INFO";

export const VocationalInfoListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    vocationalInfoList: builder.query({
      query: (id) => ({
        url: `/vocationanl-info-list/info-list/${id}`,
        method: "GET",
      }),
      providesTags: [TAG],
      // transformResponse: (res) => {
      // return [...mockSafeCarePolicyList].sort((a, b) => 0.5 - Math.random());
      // },
    }),
    addVocationalInfo: builder.mutation({
      query: (id) => ({
        url: `/vocationanl-info-list/add?fosterCarerId=${id}`,
        method: "POST",
      }),
      invalidatesTags: [TAG],
    }),
    editVocationalInfo: builder.mutation({
      query: (id) => ({
        url: `/vocationanl-info-list/info-list/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [TAG],
    }),
    deleteVocationalInfo: builder.mutation({
      query: (id) => ({
        url: `/vocationanl-info-list/info-list/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useVocationalInfoListQuery } = VocationalInfoListApi;
