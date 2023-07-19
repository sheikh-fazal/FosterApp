import { baseAPI } from "@root/services/baseApi";

const HospitalizationDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder:any) => ({
    createhospitalizationDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/add-child-hospitalization-info/document/${payload.hospitalInfoFormId}`,
        method: "Post",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["hospitalzationDocuments"],
    }),
    deletehospitalizationDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/delete-child-hospitalization-info/document/${payload.id}`,
        method: "Delete",
        params: payload.params,
      }),
      invalidatesTags: ["hospitalzationDocuments"],
    }),
    updatehospitalizationDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/edit-child-hospitalization-info/document/${payload.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: ["hospitalzationDocuments"],
    }),
    gethospitalizationDocument: builder.query({
      query: (payload: any) => ({
        url: `/child-chronology-of-events/uploaded-documents/List`,
        method: "Get",
        params: payload.params,
      }),
      providesTags: ["hospitalzationDocuments"],
    }),
  }),
});
export const {
  useCreatehospitalizationDocumentMutation,
  useDeletehospitalizationDocumentMutation,
  useUpdatehospitalizationDocumentMutation,
  useGethospitalizationDocumentQuery,
  useLazyGethospitalizationDocumentQuery,
  
} = HospitalizationDocumentApi;
