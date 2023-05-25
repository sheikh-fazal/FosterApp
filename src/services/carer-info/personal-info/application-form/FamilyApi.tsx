import { baseAPI, TAGS } from "@root/services/baseApi";

export const familyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getFamilyDetail: builder.query({
      query: (params: any) => "/application-form/family-details",
    }),
    getFamilyDetails: builder.query({
      query: (id: any) => `/application-form/${id}/family-list`,
    }),
    postFamilyDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/family-details`,
        method: "Post",
        body: formData,
      }),
    }),
    updateFamilyDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/family-details`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetFamilyDetailQuery,
  useGetFamilyDetailsQuery,
  usePostFamilyDetailMutation,
  useUpdateFamilyDetailMutation,
} = familyApi;
