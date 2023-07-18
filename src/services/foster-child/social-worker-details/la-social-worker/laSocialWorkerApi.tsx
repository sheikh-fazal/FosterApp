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
    getActiveSocialWorkerById: builder.query({
      query: (id) => `/school-info/${id}`,
    }),
    deleteActiveSocialWorkerById: builder.mutation({
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
    postPreviousSocialWorkerApi: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `school-info/${fosterChildId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    putPreviousSocialWorkerById: builder.mutation({
      query: ({ body, schoolInfoId }: any) => {
        return {
          url: `/school-info/${schoolInfoId}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    getPreviousSocialWorkerById: builder.query({
      query: (id) => `/school-info/${id}`,
    }),
    deletePreviousSocialWorkerById: builder.mutation({
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
  useGetActiveSocialWorkerTableApiQuery,
  usePostActiveSocialWorkerApiMutation,
  usePutActiveSocialWorkerByIdMutation,
  useGetActiveSocialWorkerByIdQuery,
  useDeleteActiveSocialWorkerByIdMutation,
  useGetPreviousSocialWorkerTableApiQuery,
  usePostPreviousSocialWorkerApiMutation,
  usePutPreviousSocialWorkerByIdMutation,
  useGetPreviousSocialWorkerByIdQuery,
  useDeletePreviousSocialWorkerByIdMutation,
} = contactApi;
