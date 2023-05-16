import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialInquiryApi = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getInitialInquiryData: builder.query({
      query: () => "/initial-inquiry",
      transformResponse: (response: any) => {
        return {
          ...response,
          firstApplicant: response.firstApplicant.dto,
          contact: response.contact.dto,
          otherDetails: response.otherDetails.dto,
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
