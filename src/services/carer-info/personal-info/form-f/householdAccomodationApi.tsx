import { baseAPI, TAGS } from "@root/services/baseApi";

export const applicationDetailsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    puthouseholdAccommodation: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/form-f/household-accomodation",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { usePuthouseholdAccommodationMutation } = applicationDetailsApi;
