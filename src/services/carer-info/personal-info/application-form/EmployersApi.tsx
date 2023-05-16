import { baseAPI, TAGS } from "@root/services/baseApi";

export const employerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEmployerDetail: builder.query({
      query: (params: any) => "/application-form/employer-detail",
    }),
    getEmployerDetails: builder.query({
      query: (params: any) => "/application-form/employer-details",
    }),
    postEmployerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/employer-detail`,
        method: "Post",
        body: formData,
      }),
    }),
    updateEmployerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/employer-details`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetEmployerDetailQuery,
  useGetEmployerDetailsQuery,
  usePostEmployerDetailMutation,
  useUpdateEmployerDetailMutation,
} = employerApi;
