import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const medicalHistoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getImmunisationInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateImmunisationInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteImmunisationInfoDocu: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getMedicalQuestionnaire: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateMedicalQuestionnaire: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {} = medicalHistoryApi;
