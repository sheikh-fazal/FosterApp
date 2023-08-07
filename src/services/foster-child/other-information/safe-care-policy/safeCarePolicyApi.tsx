import { baseAPI } from "@root/services/baseApi";
const TAG = "SATS_EXAM_GRADE_LIST";
export const safeCarePolicyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addSafeCarePolicyListData: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/add-safe-care-policy/`,
        method: "POST",
        body: payload.jsonData,
      }),
      invalidatesTags: [TAG],
    }),
    getSafeCarePolicyListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `/foster-child/list-safe-care-policy/`,
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: [TAG],
    }),
    delSafeCarePolicyListData: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/delete-safe-care-policy/${payload.id}`,
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: [TAG],
    }),

    getSafeCarePolicyById: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/get-safe-care-policy/${payload?.id}`,
        method: "GET",
        params: payload,
      }),
      providesTags: [TAG],
    }),

    updateSafeCarePolicyById: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/update-safe-care-policy/${payload.id}`,
        method: "PATCH",
        body: payload.jsonData,
      }),
      invalidatesTags: [TAG],
    }),

    getSafeCarePolicyDocsListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `/list-safe-care-policy/doc/list/`,
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: [TAG],
    }),

    addSafeCarePolicyDocsListData: builder.mutation({
      query: ({ formData, id }: any) => ({
        url: `/foster-child/add-safe-care-policy/doc/${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [TAG],
    }),

    delSafeCarePolicyDocsListData: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/delete-safe-care-policy/doc/${payload.id}`,
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: [TAG],
    }),

    updateSafeCareDocsListData: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/safe-care-policy/document/${payload.id}`,
        method: "PATCH",
        body: payload.jsonData,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useAddSafeCarePolicyListDataMutation,
  useGetSafeCarePolicyListDataQuery,
  useDelSafeCarePolicyListDataMutation,

  useLazyGetSafeCarePolicyByIdQuery,
  useUpdateSafeCarePolicyByIdMutation,
  useGetSafeCarePolicyDocsListDataQuery,
  useAddSafeCarePolicyDocsListDataMutation,
  useDelSafeCarePolicyDocsListDataMutation,
  useUpdateSafeCareDocsListDataMutation,
} = safeCarePolicyApi;
