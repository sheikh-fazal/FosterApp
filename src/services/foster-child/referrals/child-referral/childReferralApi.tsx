import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_REFERRAL";

export const childReferralApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildReferralTableApi: builder.query({
      query: ({ params }: any) => ({
        url: "foster-child/child-referral",
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
  }),
});

export const { useGetChildReferralTableApiQuery } = childReferralApi;
