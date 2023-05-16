import { baseAPI, TAGS } from "@root/services/baseApi";

export const otherInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updateOtherInfo: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/other-details`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const { useUpdateOtherInfoMutation } = otherInfoApi;
