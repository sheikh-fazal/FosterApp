import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialHomeDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeDocumentData: builder.query({
      query: (dataParameter: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/all-documents",
        method: "GET",
        params: dataParameter.params,
      }),
    }),
    getInitialHomeDocumentDataById: builder.query({
      query: (params: any) => `carer-Info/personal-info/initial-home-visit/documents/${params.id}`,
    }),
    deleteInitialHomeDocumentDataById: builder.mutation({
      query: (params: any) => ({
        url: `carer-Info/personal-info/initial-home-visit/documents/${params.id}`,
        method: "DELETE",
      }),
    }),
    postInitialHomeDocumentData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/documents",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useDeleteInitialHomeDocumentDataByIdMutation,
  useGetInitialHomeDocumentDataByIdQuery,
  useGetInitialHomeDocumentDataQuery,
  usePostInitialHomeDocumentDataMutation,
} = initialHomeDocumentApi;
