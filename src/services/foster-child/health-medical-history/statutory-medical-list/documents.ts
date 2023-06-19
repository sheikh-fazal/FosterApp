import { baseAPI, TAGS } from "@root/services/baseApi";

export const statutoryMedicalListInfoDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStatutoryMedicalListInfoDocumentData: builder.query({
      query: (dataParameter: any) => ({
        url: `foster-child/statutory-medical/docs/all/${dataParameter?.pathParams?.id}`,
        method: "GET",
        params: dataParameter?.params,
      }),
      providesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
    deleteStatutoryMedicalListInfoDocumentDataById: builder.mutation({
      query: (params: any) => ({
        url: `foster-child/statutory-medical/docs/${params.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
    postStatutoryMedicalListInfoDocumentData: builder.mutation({
      query: (dataParameter: any) => ({
        url: `foster-child/statutory-medical/docs/${dataParameter?.pathParams?.id}`,
        method: "POST",
        body: dataParameter?.body,
        // params: dataParameter?.params,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
    patchStatutoryMedicalListInfoDocumentData: builder.mutation({
      query: (dataParameter: any) => ({
        url: `foster-child/gp-info/docs/${dataParameter?.pathParams?.id}/${dataParameter?.pathParams?.docId}`,
        method: "POST",
        body: dataParameter?.body,
        params: dataParameter?.params,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
  }),
});

export const {
  useDeleteStatutoryMedicalListInfoDocumentDataByIdMutation,
  useGetStatutoryMedicalListInfoDocumentDataQuery,
  usePostStatutoryMedicalListInfoDocumentDataMutation,
  usePatchStatutoryMedicalListInfoDocumentDataMutation,
} = statutoryMedicalListInfoDocumentApi;
