import { baseAPI, TAGS } from "@root/services/baseApi";

export const frontSheetApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    frontSheet: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/frontsheet",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { useFrontSheetMutation } = frontSheetApi;
