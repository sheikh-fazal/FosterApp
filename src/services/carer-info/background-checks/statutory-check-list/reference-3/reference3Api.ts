import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const referenceThreeApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    referenceThreeList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/reference-three-list",
        method: "GET",
        params: search,
      }),
      providesTags: ["REFERENCE_THREE"],
    }),
    postReferenceThreeList: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/add-reference-three",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["REFERENCE_THREE"],
    }),
    singleReferenceThreeList: builder.query({
      query: (id: any) => `assessment-stage-one/get-reference-three/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["REFERENCE_THREE"],
    }),
    patchReferenceThreeList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/update-reference-three/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["REFERENCE_THREE"],
    }),
    deleteReferenceThreeList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/delete-reference-three/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REFERENCE_THREE"],
    }),
  }),
});
export const {
  useReferenceThreeListQuery,
  usePostReferenceThreeListMutation,
  useLazySingleReferenceThreeListQuery,
  usePatchReferenceThreeListMutation,
  useDeleteReferenceThreeListMutation,
} = referenceThreeApi;
