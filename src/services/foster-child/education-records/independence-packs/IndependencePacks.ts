import { baseAPI } from "@root/services/baseApi";
const IndependencePacks = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
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

export const { usePostUploadEvidenceMutation } = IndependencePacks;
