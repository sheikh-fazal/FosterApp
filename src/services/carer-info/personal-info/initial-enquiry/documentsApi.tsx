import { baseAPI, TAGS } from "@root/services/baseApi";

export const documentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDocumentsTableData: builder.query({
      query: (params: any) =>
        "carer-info/personal-info/initial-enquiry/documents",
    }),
    postDocumentsTableData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/initial-enquiry/documents",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetDocumentsTableDataQuery,
  usePostDocumentsTableDataMutation,
} = documentsApi;
