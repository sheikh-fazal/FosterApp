import { baseAPI, TAGS } from "@root/services/baseApi";

export const gpDetailsInfoDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getGpDetailsInfoDocumentData: builder.query({
      query: (dataParameter: any) => ({
        url:`foster-child/gp-info/docs/all/${dataParameter?.pathParams?.gpInfoId}`,
        method: "GET",
        params: dataParameter?.params,
      }),
      providesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
    }),
    getGpDetailsInfoDocumentDataById: builder.query({
      query: (params: any) =>
        `carer-Info/personal-info/initial-home-visit/documents/${params.id}`,
    }),
    deleteGpDetailsInfoDocumentDataById: builder.mutation({
      query: (params: any) => ({
        url: `foster-child/gp-info/docs/${params.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
    }),
    postGpDetailsInfoDocumentData: builder.mutation({
      query: (dataParameter: any) => ({
        url: `foster-child/gp-info/docs/${dataParameter?.pathParams?.gpInfoId}`,
        method: "POST",
        body: dataParameter?.body,
        params: dataParameter?.params,
      }),
      invalidatesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
    }),
    patchGpDetailsInfoDocumentData: builder.mutation({
        query: (dataParameter: any) => ({
          url: `foster-child/gp-info/docs/${dataParameter?.pathParams?.gpInfoId}/${dataParameter?.pathParams?.docId}`,
          method: "POST",
          body: dataParameter?.body,
          params: dataParameter?.params,
        }),
        invalidatesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
      }),
  }),
});

export const {
  useDeleteGpDetailsInfoDocumentDataByIdMutation,
  useGetGpDetailsInfoDocumentDataByIdQuery,
  useGetGpDetailsInfoDocumentDataQuery,
  usePostGpDetailsInfoDocumentDataMutation,
  usePatchGpDetailsInfoDocumentDataMutation,
} = gpDetailsInfoDocumentApi;
