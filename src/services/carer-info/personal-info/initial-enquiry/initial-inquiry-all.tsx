import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialInquiryApi = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getInitialInquiryData: builder.query({
      query: () => "/initial-inquiry",
      transformResponse: (response: any) => {
        return {
          ...response,
          firstApplicant: response.firstApplicant,
          contact: response.contact,
          otherDetails: response.otherDetails,
        };
      },
    }),
    getInitialInquiryDocumentsData: builder.query({
      query: (params: any) => "/initial-inquiry/upload-document/all",
    }),
  }),
});

export const {
  useGetInitialInquiryDataQuery,
  useLazyGetInitialInquiryDataQuery,
  useGetInitialInquiryDocumentsDataQuery,
  useLazyGetInitialInquiryDocumentsDataQuery,
} = initialInquiryApi;
