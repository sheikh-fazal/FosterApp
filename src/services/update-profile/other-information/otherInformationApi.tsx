import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const referenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getNextOfKinInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateNextOfKinInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getContactPreference: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateContactPreference: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOtherPayInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherPayInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getOtherLimitedCompanyInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherLimitedCompanyInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getOtherSelfEmployedInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherSelfEmployedInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getOtherUmbrellaCompanyInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherUmbrellaCompanyInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOpportunityDecla: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOpportunityDecla: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOtherInfoAdditionalDocs: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addOtherInfoAdditionalDocs: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateOtherInfoAdditionalDocs: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteOtherInfoAdditionalDocsDocs: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOtherBankDetailsInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addOtherBankDetailsInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateOtherBankDetailsInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useLazyGetNextOfKinInfoQuery, useUpdateNextOfKinInfoMutation } =
  referenceApi;
