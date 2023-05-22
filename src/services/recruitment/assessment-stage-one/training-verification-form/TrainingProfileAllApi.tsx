import { baseAPI } from "@root/services/baseApi";

export const trainingPRofileAllApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingProfileAllData: builder.query({
      query: (params: any) => "/training-profile/all",
    }),
    getSingleTrainingProfileData: builder.query({
      query: (trainingProfileId: any) => `/training-profile/${trainingProfileId}`,
    }),
  }),
});

export const {
  useGetTrainingProfileAllDataQuery,
  useGetSingleTrainingProfileDataQuery,
} = trainingPRofileAllApi;
