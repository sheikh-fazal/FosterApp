import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const aboutTheCandidateApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProfileStatus: builder.query({
      query: () => ({
        url: "user-profile/all-profile-status",
        method: "GET",
      }),
      providesTags: [TAG],
      transformResponse: (response: any) => {
        return {
          forms: [
            { name: "Personal Info", status: "Done" },
            { name: "Address Details", status: "Done" },
            { name: "Photo for ID Badge", status: "Pending" },
            { name: "ID Upload (Passport/DL)", status: "Pending" },
            { name: "Add Reference", status: "Pending" },
            { name: "Training Certificates", status: "Pending" },
            { name: "Additional Training Details", status: "Pending" },
            { name: "Work Experience", status: "Pending" },
            { name: "Specialities", status: "Pending" },
            { name: "DBS", status: "Pending" },
            { name: "Right to work", status: "Pending" },
            { name: "Next Of kin", status: "Pending" },
            { name: "Contact Preference", status: "Pending" },
            { name: "Employment Status", status: "Pending" },
            { name: "Opportunity Declaration", status: "Pending" },
            { name: "Additional Docs", status: "Pending" },
            { name: "Bank Details", status: "Pending" },
            { name: "Immunisation", status: "Pending" },
            { name: "Medical Questionnaire", status: "Pending" },
            { name: "Add Declaration", status: "Pending" },
          ],
          activeFormName: "badgeId",
        };
      },
    }),
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
    deleteAddressDetailsDocu: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/address-detail",
        method: "DELETE",
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
    updatePhotoForIdBadge: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/bagde-Id-image",
        method: "PUT",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getPhotoForIdUpload: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=aboutCandidate.passport",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updatePhotoForIdUpload: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-passport-image",
        method: "PUT",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetProfileStatusQuery,
  useLazyGetPersonalInfoQuery,
  useUpdatePersonalInfoMutation,
  useLazyGetAddressDetailsQuery,
  useUpdateAddressDetailsMutation,
  useDeleteAddressDetailsDocuMutation,
  useGetPhotoForIdBadgeQuery,
  useUpdatePhotoForIdBadgeMutation,
  useGetPhotoForIdUploadQuery,
  useUpdatePhotoForIdUploadMutation,
} = aboutTheCandidateApi;
