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
    getSchoolDetailInfoById: builder.query({
      query: (id) => `/school-info/${id}`,
    }),
    putSchoolDetailInfoById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `/school-info/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    deleteSchoolDetailInfoById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id } = data;
        return {
          url: `/school-info/${id}`,
          method: "DELETE",
          
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetSchoolDetailInfoTableApiQuery,
  usePostSchoolDetailInfoApiMutation,
  useGetSchoolDetailInfoByIdQuery,
  usePutSchoolDetailInfoByIdMutation,
  useDeleteSchoolDetailInfoByIdMutation,
} = contactApi;
