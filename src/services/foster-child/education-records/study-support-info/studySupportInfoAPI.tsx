import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "CARER_FAMILY_NETWORK";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStudySupportInfoTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `school-info/foster-child/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postStudySupportInfoApi: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `school-info/${fosterChildId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getStudySupportInfoById: builder.query({
      query: (id) => `/school-info/${id}`,
    }),
    putStudySupportInfoById: builder.mutation({
      query: ({ body, schoolInfoId }: any) => {
        return {
          url: `/school-info/${schoolInfoId}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    deleteStudySupportInfoById: builder.mutation<null, void>({
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
  useGetStudySupportInfoTableApiQuery,
  usePostStudySupportInfoApiMutation,
  useGetStudySupportInfoByIdQuery,
  usePutStudySupportInfoByIdMutation,
  useDeleteStudySupportInfoByIdMutation,
} = contactApi;
