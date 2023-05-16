import { baseAPI, TAGS } from "@root/services/baseApi";

export const verificationOfDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    verificationApplication1: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/verification-application1",
        method: "PUT",
        body: formData,
      }),
    }),
    verificationApplication2: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/verification-application2",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useVerificationApplication1Mutation,
  useVerificationApplication2Mutation,
} = verificationOfDocumentsApi;
