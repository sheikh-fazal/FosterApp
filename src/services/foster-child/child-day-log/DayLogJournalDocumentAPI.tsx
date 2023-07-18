import { baseAPI } from "@root/services/baseApi";

export const DayLogJournalUploadDocumentsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Get API of Day Log Journal Upload Document
    getDayLogJournalUploadDocument: builder.query<null, object>({
      query: ({ childFamilyOrgInfoId }: any) => ({
        url: ``,
        method: "GET",
      }),
      providesTags: [""],
    }),

    // Post API of Day Log Journal Upload Document
    postDayLogJournalUploadDocument: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/add-child-family-org-info/document/${apiDataParameter.childFamilyOrgInfoId}`,
        method: "POST",
        param: apiDataParameter.childFamilyOrgInfoId,
        body: apiDataParameter.body,
      }),
      invalidatesTags: [""],
    }),

    // Delete API of Day Log Journal Upload Document
    deleteDayLogJournalUploadDocument: builder.mutation({
      query: (id: any) => ({
        url: ``,
        method: "DELETE",
      }),
      invalidatesTags: [""],
    }),
  }),
});

export const {
  useGetDayLogJournalUploadDocumentQuery,
  usePostDayLogJournalUploadDocumentMutation,
  useDeleteDayLogJournalUploadDocumentMutation,
} = DayLogJournalUploadDocumentsAPI;
