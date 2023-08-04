import { baseAPI } from "@root/services/baseApi";

export const allegationInfoDocumentApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllegationInfoDocumentData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `events-and-notification/uploaded-documents/List`,
        method: "GET",
        params: apiDataParameter?.params,
      }),
      providesTags: ["ALLEGATION_INFO_DOCUMENTS"],
    }),
    deleteAllegationInfoDocumentDataById: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `events-and-notification/uploaded-documents/${apiDataParameter.pathParams.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ALLEGATION_INFO_DOCUMENTS"],
    }),
    postAllegationInfoDocumentData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `events-and-notification/uploaded-documents`,
        method: "POST",
        body: apiDataParameter?.body,
        // params: apiDataParameter?.params,
      }),
      invalidatesTags: ["ALLEGATION_INFO_DOCUMENTS"],
    }),
    patchAllegationInfoDocumentData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `events-and-notification/uploaded-documents/${apiDataParameter?.pathParams?.id}`,
        method: "POST",
        body: apiDataParameter?.body,
        params: apiDataParameter?.params,
      }),
      invalidatesTags: ["ALLEGATION_INFO_DOCUMENTS"],
    }),
  }),
});

export const {
  useDeleteAllegationInfoDocumentDataByIdMutation,
  useGetAllegationInfoDocumentDataQuery,
  useLazyGetAllegationInfoDocumentDataQuery,
  usePostAllegationInfoDocumentDataMutation,
  usePatchAllegationInfoDocumentDataMutation,
} = allegationInfoDocumentApi;
