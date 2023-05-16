import { baseAPI, TAGS } from "@root/services/baseApi";

export const courtProceedingApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putCourtProceeding: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/court-proceeding",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePutCourtProceedingMutation } = courtProceedingApi;
