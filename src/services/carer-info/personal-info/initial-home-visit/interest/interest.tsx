import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialHomeInterestApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeInterestData: builder.query({
      query: (params: any) => "carer-Info/personal-info/initial-home-visit/interest",
    }),
    postInitialHomeInterestData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/interest",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { useGetInitialHomeInterestDataQuery, usePostInitialHomeInterestDataMutation } =
  initialHomeInterestApi;
