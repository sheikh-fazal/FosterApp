import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "CARER_FAMILY_NETWORK";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSchoolDetailInfoTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `school-info/foster-child/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postSchoolDetailInfoApi: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `school-info/${fosterChildId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getCarerFamilyById: builder.query({
      query: (id) => `/carer-Info/personal-info/carer-family/${id}`,
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    putCarerFamilyById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `/carer-Info/personal-info/carer-family/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetSchoolDetailInfoTableApiQuery,
  usePostSchoolDetailInfoApiMutation,
  useGetCarerFamilyByIdQuery,
  usePutCarerFamilyByIdMutation,
} = contactApi;
