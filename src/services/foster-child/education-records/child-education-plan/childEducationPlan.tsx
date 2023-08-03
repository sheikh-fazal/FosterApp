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
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    getSingleChildEducationPlan: builder.query({
      query: (id: any) => ({
        url: `/education-records/education-plan/${id}`,
        method: "GET",
      }),
      providesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    patchSingleChildEducationPlan: builder.mutation({
      query: ({ data, id }: any) => ({
        url: `/education-records/education-plan/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    deleteSingleChildEducationPlan: builder.mutation({
      query: (trainingProfileId: any) => ({
        url: `/education-records/education-plan/${trainingProfileId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    getDocumentChildEducationPlan: builder.query({
      query: (id: any) => ({
        url: `/education-records/education-plan/document/${id}`,
        method: "GET",
      }),
      providesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
  }),
});

export const {
  useGetChildEducationPlanListQuery,
  usePostChildEducationPlanMutation,
  useGetSingleChildEducationPlanQuery,
  usePatchSingleChildEducationPlanMutation,
  useDeleteSingleChildEducationPlanMutation,
  useGetDocumentChildEducationPlanQuery
} = ChildEducationPlan;
