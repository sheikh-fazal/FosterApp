import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "SUPERVISING_CARER_FAMILY_NETWORK";

export const SupervisingcontactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSupervisingSocialWorkerTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `social-worker-details/la-social-worker/list/?fosterChildId=${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postSupervisingSocialWorkerApi: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `social-worker-details/la-social-worker`,
        method: "POST",
        body: { ...body, fosterChildId: fosterChildId },
      }),
      invalidatesTags: [TAG],
    }),
    putSupervisingSocialWorkerById: builder.mutation({
      query: ({ body, id }: any) => {
        return {
          url: `social-worker-details/la-social-worker/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    getSupervisingSocialWorkerById: builder.query({
      query: (id) => `social-worker-details/la-social-worker/${id}`,
    }),
    deleteSupervisingSocialWorkerById: builder.mutation({
      query: (data: any) => {
        const { id } = data;
        return {
          url: `social-worker-details/la-social-worker/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
//   useGetSocialWorkerTableApiQuery,
//   usePostSocialWorkerApiMutation,
//   useGetSocialWorkerByIdQuery,
//   usePutSocialWorkerByIdMutation,
  useGetSupervisingSocialWorkerTableApiQuery,
  usePostSupervisingSocialWorkerApiMutation,
  useGetSupervisingSocialWorkerByIdQuery,
  usePutSupervisingSocialWorkerByIdMutation,
  useDeleteSupervisingSocialWorkerByIdMutation,
} = SupervisingcontactApi;
