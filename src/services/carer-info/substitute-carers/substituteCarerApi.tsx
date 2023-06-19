import { baseAPI, TAGS } from "@root/services/baseApi";

export const substituteCarerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putAboutTheApplicant: builder.query({
      query: (params) => ({
        url: "/carer-Info/subsititute-cares/list-carer?search=search&limit=10&offset=0&type=BC",
        params,
      }),
    }),
  }),
});

export const { usePutAboutTheApplicantQuery } = substituteCarerApi;
