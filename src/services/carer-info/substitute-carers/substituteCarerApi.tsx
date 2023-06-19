import { baseAPI, TAGS } from "@root/services/baseApi";

export const substituteCarerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSelectedSubstituteCarer: builder.query({
      query: (params) => ({
        url: "/carer-Info/substitute-cares/list-carer", // BC, SC,RC
        params,
      }),
    }),
  }),
});

export const { useGetSelectedSubstituteCarerQuery } = substituteCarerApi;
