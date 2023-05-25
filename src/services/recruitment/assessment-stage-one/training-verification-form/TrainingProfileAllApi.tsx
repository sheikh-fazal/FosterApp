import { baseAPI } from "@root/services/baseApi";

const TAG = "TRAINING_PROFILE";

export const trainingPRofileAllApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingProfileAllData: builder.query({
      query: (params: any) => "/training-profile/all",
    }),
    getSingleTrainingProfileData: builder.query({
      query: (trainingProfileId: any) =>
        `/training-profile/${trainingProfileId}`,
    }),
    postTrainingProfileApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "/training-profile",
        method: "POST",
        body,
      }),
    }),
    patchTrainingProfileApi: builder.mutation<null, void>({
      query: ({ trainingProfileId, data }: any) => ({
        url: `/training-profile/${trainingProfileId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [TAG],
    }),
    getTrainingProfileAllDocument: builder.query({
      query: (trainingProfileId:any) => `/training-profile/document/all?trainingProfileId=${trainingProfileId}`,

    }),
    postTrainingProfileDocument: builder.mutation<null, void>({
      query: ({body, trainingProfileId}:any)=>({
        url: `/training-profile/document?trainingProfileId=${trainingProfileId}`,
        method: 'POST',
        body
      })
    })
  }),
});

export const {
  useGetTrainingProfileAllDataQuery,
  useGetSingleTrainingProfileDataQuery,
  usePostTrainingProfileApiMutation,
  usePatchTrainingProfileApiMutation,
  useGetTrainingProfileAllDocumentQuery,
  usePostTrainingProfileDocumentMutation
} = trainingPRofileAllApi;
