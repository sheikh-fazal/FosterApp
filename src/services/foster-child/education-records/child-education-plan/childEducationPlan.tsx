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
    postChildEducationPlan: builder.mutation({
      query: (fosterChildId: any) => ({
        url: `/education-records/education-plan/${fosterChildId}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetChildEducationPlanListQuery, usePostChildEducationPlanMutation } = ChildEducationPlan;
