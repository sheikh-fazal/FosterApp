import { baseAPI } from "@root/services/baseApi";

export const enquiryStageAllApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEnquiryStageStatus: builder.query({
      query: (id: string) => `/enquiry-stage/enquiry-stage/${id}`,
    }),
    patchEnquiryStageStatus: builder.mutation({
      query: ({ userId, body }: any) => ({
        url: `enquiry-stage/enquiry-stage/${userId}?enquiryStage=${body?.point}&status=${body?.status}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetEnquiryStageStatusQuery,
  usePatchEnquiryStageStatusMutation,
} = enquiryStageAllApi;
