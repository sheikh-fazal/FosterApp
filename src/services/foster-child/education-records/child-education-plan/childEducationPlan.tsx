import { baseAPI } from "@root/services/baseApi";

export const ChildEducationPlan: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildEducationPlanList: builder.query({
      query: (fosterChildId: any) => ({
        url: `/education-records/education-plan/list-education-plan?${fosterChildId}`,
        method: "GET",
      }),
      providesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
  }),
});

export const { useGetChildEducationPlanListQuery } = ChildEducationPlan;
