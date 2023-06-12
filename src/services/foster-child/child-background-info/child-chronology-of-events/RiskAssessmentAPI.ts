import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const riskAssessmentApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRiskAssessmentList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/risk-assessment/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteRiskAssessmentList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/risk-assessment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetRiskAssessmentListQuery, useDeleteRiskAssessmentListMutation } = riskAssessmentApi;
