import { baseAPI } from "@root/services/baseApi";
export const incidentUploadDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    incidentUploadDocumentList: builder.query<null, object>({
      query: (search: any) => ({
        url: "/chronology-events/list-incidentDocuments",
        method: "GET",
        params: search,
      }),
      providesTags: ["INCIENT_UPLOAD_DOCUMENTS"],
    }),
    incidentUploadDocumentBYID: builder.query<null, object>({
      query: (Payload: any) => ({
        url: `/chronology-events/incidentDocuments/${Payload.id}`,
        method: "GET",
        params: Payload,
      }),
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
  useLazyIncidentUploadDocumentBYIDQuery,
} = incidentUploadDocumentApi;
