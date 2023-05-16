import { baseAPI, TAGS } from "@root/services/baseApi";

export const applicationFormApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getApplicationFormData: builder.query({
      query: (params: any) => "/application-form",
    }),
  }),
});

export const { useGetApplicationFormDataQuery } = applicationFormApi;
