import { baseAPI } from "@root/services/baseApi";
const IndependencePacks = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getIndependencePacks: builder.query({
      query: ({ id, params }: any) => ({
        url: `/education-records/independence-pack?fosterChildId=${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["INDEPENDENCE_PACKS_LIST"],
    }),
    postIndependencePacks: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/education-records/independence-pack?fosterChildId=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["INDEPENDENCE_PACKS_LIST"],
    }),
    postUploadEvidence: builder.mutation({
      query: ({ formData }: any) => ({
        url: `/education-records/independence-pack/upload-evidence`,
        method: "POST",
        body: formData,
      }),
      //   invalidatesTags: ["LEISURE_ACTIVITY_LIST"],
    }),
  }),
});

export const {
  usePostUploadEvidenceMutation,
  useGetIndependencePacksQuery,
  usePostIndependencePacksMutation,
} = IndependencePacks;
