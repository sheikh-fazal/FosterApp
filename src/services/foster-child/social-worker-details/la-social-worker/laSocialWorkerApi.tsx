import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "CARER_FAMILY_NETWORK";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getActiveSocialWorkerTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `school-info/foster-child/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postActiveSocialWorkerApi: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `school-info/${fosterChildId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    putActiveSocialWorkerById: builder.mutation({
      query: ({ body, schoolInfoId }: any) => {
        return {
          url: `/school-info/${schoolInfoId}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    deleteActiveSocialWorkerById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id } = data;
        return {
          url: `/school-info/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
    getPreviousSocialWorkerTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `school-info/foster-child/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    getActiveSocialWorkerById: builder.query({
      query: (id) => `/school-info/${id}`,
    }),
    getPreviousSocialWorkerById: builder.query({
      query: (id) => `/school-info/${id}`,
    }),
  }),
});

export const {
  useGetActiveSocialWorkerTableApiQuery,
  usePostActiveSocialWorkerApiMutation,
  usePutActiveSocialWorkerByIdMutation,
  useDeleteActiveSocialWorkerByIdMutation,
  useGetPreviousSocialWorkerTableApiQuery,
  useGetActiveSocialWorkerByIdQuery,
  useGetPreviousSocialWorkerByIdQuery,
} = contactApi;
