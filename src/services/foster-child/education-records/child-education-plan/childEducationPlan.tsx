import { baseAPI } from "@root/services/baseApi";

export const ChildEducationPlan: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildEducationPlanList: builder.query({
      query: ({ fosterChildId, params }: any) => ({
        url: `/education-records/education-plan/list-education-plan?${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    postChildEducationPlan: builder.mutation({
      query: ({ data, fosterChildId }: any) => ({
        url: `/education-records/education-plan/${fosterChildId}`,
        method: "POST",
        body: data,
      }),
    }),
    getSingleChildEducationPlan: builder.query({
      query: (id: any) => ({
        url: `/education-records/education-plan/${id}`,
        method: "GET",
      }),
      providesTags: ["CHILD_EDUCATION_PLAN"],
    }),
  }),
});

export const {
  useGetChildEducationPlanListQuery,
  usePostChildEducationPlanMutation,
  useGetSingleChildEducationPlanQuery,
} = ChildEducationPlan;
