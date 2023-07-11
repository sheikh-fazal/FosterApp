import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const FamilyPersonUploadDocumentsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Get API of Family Person Upload Document
    getFamilyPersonUploadDocument: builder.query<null, object>({
      query: ({ childFamilyOrgInfoId }: any) => ({
        url: `/foster-child/child-family-org-info/document/list/${childFamilyOrgInfoId}`,
        method: "GET",
      }),
      providesTags: ["FAMILY_PERSON_UPLOAD_DOCUMENT"],
    }),

    // Get API By Id of Family Person Upload Document
    // getFamilyPersonUploadDocumentById: builder.query({
    //   query: (childFamilyOrgInfoDocId: any) =>
    //     `/foster-child/child-family-org-info/document/${childFamilyOrgInfoDocId}`,
    //   transformResponse: (response: any) => {
    //     parseDatesToTimeStampByKey(response.data);
    //     return response;
    //   },
    //   providesTags: ["FAMILY_PERSON_UPLOAD_DOCUMENT"],
    // }),

    // Post API of Family Person Upload Document
    postFamilyPersonUploadDocument: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/add-child-family-org-info/document/${apiDataParameter.childFamilyOrgInfoId}`,
        method: "POST",
        param: apiDataParameter.childFamilyOrgInfoId,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["FAMILY_PERSON_UPLOAD_DOCUMENT"],
    }),

    // Delete API of Family Person Upload Document
    deleteFamilyPersonUploadDocument: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/child-family-org-info/document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FAMILY_PERSON_UPLOAD_DOCUMENT"],
    }),
  }),
});

export const {
  useGetFamilyPersonUploadDocumentQuery,
  // useGetFamilyPersonUploadDocumentByIdQuery,
  usePostFamilyPersonUploadDocumentMutation,
  useDeleteFamilyPersonUploadDocumentMutation,
} = FamilyPersonUploadDocumentsAPI;
