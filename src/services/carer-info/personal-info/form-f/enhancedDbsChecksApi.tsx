import { baseAPI, TAGS } from "@root/services/baseApi";

export const enhancedDbsChecksApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putEnhancedDbsChecks: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/enhanced-dbs-check",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePutEnhancedDbsChecksMutation } = enhancedDbsChecksApi;
