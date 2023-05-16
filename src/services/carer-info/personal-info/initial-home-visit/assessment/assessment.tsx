import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialHomeAssessmentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeAssessmentData: builder.query({
      query: (params: any) => "carer-Info/personal-info/initial-home-visit/assesment",
    }),
    postInitialHomeAssessmentData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/assesment",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { useGetInitialHomeAssessmentDataQuery, usePostInitialHomeAssessmentDataMutation } =
  initialHomeAssessmentApi;
