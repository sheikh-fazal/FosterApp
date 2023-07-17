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
      transformResponse: (res) => {
        // return [...mockSafeCarePolicyList].sort((a, b) => 0.5 - Math.random());
      },
    }),
  }),
});

export const { useVocationalInfoListQuery } = VocationalInfoListApi;
