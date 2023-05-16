import { baseAPI, TAGS } from "@root/services/baseApi";

export const formFAll = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    formF: builder.query({
      query: () => "carer-info/personal-info/form-f",
    }),
  }),
});

export const { useFormFQuery, useLazyFormFQuery } = formFAll;
