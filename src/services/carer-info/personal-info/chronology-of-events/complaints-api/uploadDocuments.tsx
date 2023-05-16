import { baseAPI } from "@root/services/baseApi";
export const uploadDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadDocumentList: builder.query<null, void>({
      query: () => "chronology-events/complaint-documents/List",
      providesTags: ["COMPLAINT_LIST"],
    }),
    postComplaintDocuments: builder.mutation({
      query: (list: any) => ({
        url: "chronology-events/complaintDocuments",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["COMPLAINT_LIST"],
    }),
  }),
});
export const { useUploadDocumentListQuery, usePostComplaintDocumentsMutation } =
  uploadDocumentsApi;
