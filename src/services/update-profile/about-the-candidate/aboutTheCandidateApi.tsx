import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const aboutTheCandidateApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPersonalInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=personalInfo",
        method: "GET",
      }),
      providesTags: [TAG],
      transformResponse: (response: any) => ({
        ...response.data,
        nationality: response.data.nationality || "Pakistani",
      }),
    }),
    updatePersonalInfo: builder.mutation<null, void>({
      query: (body) => ({
        url: "user-profile/personal-info",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getAddressDetails: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=aboutCandidate.addressDetail",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateAddressDetails: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/address-detail",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getPhotoForIdBadge: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=aboutCandidate.badgeId",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updatePhotoForIdBadge: builder.mutation<null, void>({
      query: (body) => ({
        url: "user-profile/bagde-Id-image",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetPersonalInfoQuery,
  useUpdatePersonalInfoMutation,
  useLazyGetAddressDetailsQuery,
  useUpdateAddressDetailsMutation,
  useLazyGetPhotoForIdBadgeQuery,
  useUpdatePhotoForIdBadgeMutation,
} = aboutTheCandidateApi;
