import { baseAPI, TAGS } from "@root/services/baseApi";

export const primaryCarerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPrimaryCarerData: builder.query({
      query: (params: any) =>
        "carer-info/personal-info/initial-home-visit/primary-carer",
    }),
    postPrimaryCarerData: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "carer-info/personal-info/initial-home-visit/primary-carer",
        method: "PUT",
        body: putDataParameter.body,
        params: putDataParameter.params,
      }),
    }),
  }),
});

export const { useGetPrimaryCarerDataQuery, usePostPrimaryCarerDataMutation } =
  primaryCarerApi;
