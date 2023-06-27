import { baseAPI, TAGS } from "@root/services/baseApi";

export const substituteCarerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSelectedSubstituteCarer: builder.query({
      query: (params) => ({
        url: "/carer-Info/substitute-cares/list-carer", // BC, SC,RC
        params,
      }),
    }),
    postSubstituteCarer: builder.mutation({
      query: (body) => ({
        url: "/carer-Info/carer-info/substitute-cares/add-carer",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetSelectedSubstituteCarerQuery,
  usePostSubstituteCarerMutation,
} = substituteCarerApi;
