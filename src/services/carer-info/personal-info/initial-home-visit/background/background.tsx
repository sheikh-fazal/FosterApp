import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialHomeBackgroundApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeBackgroundData: builder.query({
      query: (params: any) => "carer-Info/personal-info/initial-home-visit/background",
    }),
    postInitialHomeBackgroundData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/background",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { useGetInitialHomeBackgroundDataQuery, usePostInitialHomeBackgroundDataMutation } =
  initialHomeBackgroundApi;
