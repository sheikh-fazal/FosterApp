import { baseAPI } from "@root/services/baseApi";

const TAG = "CLA_REVIEW";

export const claReviewApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getClaReviewList: builder.query({
      query: ({ params }: any) => ({
        url: "foster-child/CLAReviewInfo/list-cla-review-info",
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    postClaReview: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "foster-child/CLAReviewList/add-cla-review-info",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getClaReviewId: builder.query({
      query: (claReviewId: any) =>
        `foster-child/CLAReviewList/get-cla-review-info/${claReviewId}`,
      providesTags: [TAG],
    }),
    patchClaReviewById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `foster-child/CLAReviewList/update-cla-review-info/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    deleteClaReviewById: builder.mutation<null, void>({
      query: (id) => {
        return {
          url: `foster-child/CLAReviewInfo/delete-cla-review-info/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetClaReviewListQuery,
  usePostClaReviewMutation,
  useGetClaReviewIdQuery,
  usePatchClaReviewByIdMutation,
  useDeleteClaReviewByIdMutation,
} = claReviewApi;
