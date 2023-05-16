import { baseAPI, TAGS } from "@root/services/baseApi";

export const applicantObservationReportApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putApplicantObservation: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/applicant-observation-report",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePutApplicantObservationMutation } =
  applicantObservationReportApi;
