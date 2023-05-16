import { baseAPI, TAGS } from "@root/services/baseApi";

export const summaryAndRecommendationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putSummaryAndRecommendation: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/summary-and-recommendation",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePutSummaryAndRecommendationMutation } =
  summaryAndRecommendationApi;
