import { baseAPI } from "@root/services/baseApi";
export const incidentUploadDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    incidentUploadDocumentList: builder.query<null, void>({
      query: () => "/chronology-events/incident-documents/list",
      providesTags: ["INCIENT_UPLOAD_DOCUMENTS"],
    }),
    postIncidentDocuments: builder.mutation({
      query: (list: any) => ({
        url: "chronology-events/incidentDocuments",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["INCIENT_UPLOAD_DOCUMENTS"],
    }),
  }),
});
export const {
  useIncidentUploadDocumentListQuery,
  usePostIncidentDocumentsMutation,
} = incidentUploadDocumentApi;
