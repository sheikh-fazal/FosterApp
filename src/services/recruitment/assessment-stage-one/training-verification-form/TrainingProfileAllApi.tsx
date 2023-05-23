import { baseAPI } from "@root/services/baseApi";

export const trainingPRofileAllApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingProfileAllData: builder.query({
      query: (params: any) => "/training-profile/all",
    }),
    getSingleTrainingProfileData: builder.query({
      query: (trainingProfileId: any) => `/training-profile/${trainingProfileId}`,
    }),
    postTrainingProfileApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "/training-profile",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetTrainingProfileAllDataQuery,
  useGetSingleTrainingProfileDataQuery,
  usePostTrainingProfileApiMutation
} = trainingPRofileAllApi;
