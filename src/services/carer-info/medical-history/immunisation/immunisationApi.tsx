import { baseAPI } from "@root/services/baseApi";
const TAGS = "HEALTH_AND_SAFETY_IMMUNIZATION";
export const immunisationApi: any = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getImmunisationListData: builder.query({
      query: ({ params, fosterCarerId }: any) => ({
        url: `carer-Info/immunization?fosterCarerId=${fosterCarerId}`,
        method: "GET",
        params,
      }),
      provideTags: [TAGS],
    }),
    deleteImmunisationList: builder.mutation({
      query: (immunisationId: any) => ({
        url: `carer-Info/immunization/${immunisationId}`,
        method: "DELETE",
      }),
      invalidTags: [TAGS],
    }),
    postImmunisationData: builder.mutation({
      query: ({ formData, fosterCarerId }: any) => ({
        url: `carer-Info/immunization?fosterCarerId=${fosterCarerId}`,
        method: "POST",
        body: formData,
      }),
      invalidTags: [TAGS],
    }),
    getImmunisationById: builder.query({
      query: (immunisationId: any) =>
        `carer-Info/immunization/${immunisationId}`,
      provideTags: [TAGS],
    }),
    putImmunisationData: builder.mutation({
      query: ({ fosterCarerId, immunisationId }: any) => ({
        url: `carer-Info/immunization/${immunisationId}?fosterCarerId=${fosterCarerId}`,
        method: "PUT",
      }),
      invalidTags: [TAGS],
    }),
  }),
});

export const {
  useGetImmunisationListDataQuery,
  useDeleteImmunisationListMutation,
  usePostImmunisationDataMutation,
  useGetImmunisationByIdQuery,
  usePutImmunisationDataMutation,
} = immunisationApi;
