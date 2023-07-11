import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const AbsenceInfoUploadDocumentsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Get API of Abence Info Document
    getAbsenceInfoDocument: builder.query<null, object>({
      query: ({ childAbsenceInfoDocId }: any) => ({
        url: `/foster-child/child-absence-info/document/${childAbsenceInfoDocId}`,
        method: "GET",
      }),
      providesTags: ["ABSENCE_INFO"],
    }),

    // Post API of Abence Info Document
    postAbsenceInfoUploadDocument: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/foster-child/add-child-absence-info/document/${apiDataParameter.childAbsenceInfoId}`,
        method: "POST",
        param: apiDataParameter.childFamilyOrgInfoId,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["ABSENCE_INFO"],
    }),

    // Delete API of Abence Info Document
    deleteAbsenceInfoUploadDocument: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/child-absence-info/document//${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ABSENCE_INFO"], 
    }),
  }),
});

export const {
  useGetAbsenceInfoDocumentQuery,
  usePostAbsenceInfoUploadDocumentMutation,
  useDeleteAbsenceInfoUploadDocumentMutation,
} = AbsenceInfoUploadDocumentsAPI;
