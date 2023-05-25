import { baseAPI, TAGS } from "@root/services/baseApi";

export const exPartnersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getExPartnerDetail: builder.query({
      query: (params: any) => "/application-form/ex-partner-detail",
    }),
    getExPartnerDetails: builder.query({
      query: (id: any) => `/application-form/ex-partner-details/${id}`,
    }),
    postExPartnerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/ex-partner-detail`,
        method: "Post",
        body: formData,
      }),
    }),
    updateExPartnerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/ex-partner-details`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetExPartnerDetailQuery,
  useGetExPartnerDetailsQuery,
  usePostExPartnerDetailMutation,
  useUpdateExPartnerDetailMutation,
} = exPartnersApi;
