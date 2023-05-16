import { baseAPI, TAGS } from "@root/services/baseApi";

export const dateWhenInfoReceivedApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putDateWhenInfoReceivedApi: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/date-information-received",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePutDateWhenInfoReceivedApiMutation } =
  dateWhenInfoReceivedApi;
