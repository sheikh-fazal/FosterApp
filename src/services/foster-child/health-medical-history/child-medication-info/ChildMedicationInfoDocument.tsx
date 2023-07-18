import { baseAPI } from "@root/services/baseApi";

const ChildMedicationInfoDocument = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createChildMedicationInfoDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/add-child-medication-info/document/${payload.params.childMedicationInfoId}`,
        method: "POST",
        // params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["child-medication-info-document"],
    }),
    // deleteChildMedicationInfoDocument: builder.mutation({
    //   query: (payload: any) => ({
    //     url: `/foster-child/child-medication-info/document/${payload.childMedicationInfoDocId}`,
    //     method: "Delete",
    //     // params: payload.params,
    //   }),
    //   invalidatesTags: ["child-medication-info-document"],
    // }),
    deleteChildMedicationInfoDocument: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/child-medication-info/document/${id}`,
        method: "Delete",
        // params: payload.params,
      }),
      invalidatesTags: ["child-medication-info-document"],
    }),
    // deleteAbsenceInfoUploadDocument: builder.mutation({
    //   query: (id : any) => ({
    //     url: `/foster-child/child-absence-info/document/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["ABSENCE_INFO_UPLOAD_DOCUMENTS"],
    // }),
    // updateChildMedicationInfoDocument: builder.mutation({
    //   query: (payload: any) => ({
    //     url: `/hospital-info-list/documents/${payload.id}`,
    //     method: "Put",
    //     body: payload.body,
    //   }),
    //   invalidatesTags: ["child-medication-info-document"],
    // }),
    getChildMedicationInfoDocumentBYID: builder.query({
      query: (payload: any) => ({
        // url: `/hospital-info-list/documents/${payload.id}`,
        url: `/foster-child/child-medication-info/document/${payload.childMedicationInfoDocId}`,
        method: "Get",
        // params: payload.params,
        params: payload.childMedicationInfoDocId,
      }),
      providesTags: ["child-medication-info-document"],
    }),
    getChildMedicationInfoDocument: builder.query({
      query: ({ChildMedicationInfoId,params}: any) => ({
        // url: `/hospital-info-list/all-documents/hospital-info-documents/${payload?.params?.hospitalInfoFormId}`,
        url: `/foster-child/child-medication-info/document/list/${ChildMedicationInfoId}`,
        method: "Get",
        // params: payload.params,
        params,
      }),
      providesTags: ["child-medication-info-document"],
    }),
  }),
});

export const {
  useCreateChildMedicationInfoDocumentMutation,
  useDeleteChildMedicationInfoDocumentMutation,
  useGetChildMedicationInfoDocumentBYIDQuery,
  useGetChildMedicationInfoDocumentQuery,
  useLazyGetChildMedicationInfoDocumentBYIDQuery,
  useLazyGetChildMedicationInfoDocumentQuery,
} = ChildMedicationInfoDocument;
