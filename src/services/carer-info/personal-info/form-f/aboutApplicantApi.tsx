import { baseAPI, TAGS } from "@root/services/baseApi";

export const aboutTheApplicantApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putAboutTheApplicant: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/about-the-applicants",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePutAboutTheApplicantMutation } = aboutTheApplicantApi;
