import { baseAPI, TAGS } from "@root/services/baseApi";

export const placementPreferenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updatePlacementPreference: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/placement-preference`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const { useUpdatePlacementPreferenceMutation } = placementPreferenceApi;
