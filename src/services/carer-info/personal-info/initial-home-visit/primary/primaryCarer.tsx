import { baseAPI, TAGS } from "@root/services/baseApi";

export const primaryCarerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPrimaryCarerData: builder.query({
      query: (params: any) =>
        "carer-info/personal-info/initial-home-visit/primary-carer",
    }),
    postPrimaryCarerData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/initial-home-visit/primary-carer",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetPrimaryCarerDataQuery, usePostPrimaryCarerDataMutation } =
  primaryCarerApi;
