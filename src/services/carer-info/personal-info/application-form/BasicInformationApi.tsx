import { baseAPI, TAGS } from "@root/services/baseApi";

export const basicInformationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updateBasicInformation: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/basic-information?applicationFormId=${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["GET_BASICINFORMATION"],
    }),
  }),
});

export const { useUpdateBasicInformationMutation } = basicInformationApi;
