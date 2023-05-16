import { baseAPI } from "@root/services/baseApi";
export const uploadDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadDocumentList: builder.query<null, void>({
      query: () => "chronology-events/allegation-documents/List",
      providesTags: ["ALLEGATION_DOCUMENTS"],
    }),
    postAllegationDocuments: builder.mutation({
      query: (list: any) => ({
        url: "chronology-events/allegationDocuments",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["ALLEGATION_DOCUMENTS"],
    }),
  }),
});
export const {
  useUploadDocumentListQuery,
  usePostAllegationDocumentsMutation,
} = uploadDocumentsApi;
