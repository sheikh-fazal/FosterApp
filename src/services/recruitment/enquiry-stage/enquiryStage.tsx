import { baseAPI } from "@root/services/baseApi";

export const enquiryStageAllApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEnquiryStageStatus: builder.query({
      query: (id: string) => `/enquiry-stage/enquiry-stage/${id}`,
    }),
    patchEnquiryStageStatus: builder.query({
      query: ({ userId, point, status }: any) => ({
        url: `enquiry-stage/enquiry-stage/${userId}?enquiryStage=${point}&status=${status}`,
        method:'PATCH',
        // body:data
      }),
    }),
  }),
});

export const { useGetEnquiryStageStatusQuery,usePatchEnquiryStageStatusMutation } = enquiryStageAllApi;
