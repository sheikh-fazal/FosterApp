import { baseAPI, TAGS } from "@root/services/baseApi";

export const applicationFormApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getApplicationFormData: builder.query({
      query: (params: any) =>
        "/application-form/c4fd183b-10cc-4df3-95b8-e7526db06a62",
    }),
  }),
});

export const { useGetApplicationFormDataQuery } = applicationFormApi;
