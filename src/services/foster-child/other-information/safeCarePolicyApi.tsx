import { baseAPI } from "@root/services/baseApi";
import { mockSafeCarePolicyList } from "./mock-res";

const TAG = "UPDATE_PROFILE";

export const safeCarePolicyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    safeCarePolicyList: builder.query({
      query: (dataParameter) => ({
        url: "foster-child/gp-info/all",
        method: "GET",
        params: dataParameter.params,
      }),
      providesTags: [TAG],
      transformResponse: (res) => {
        return [...mockSafeCarePolicyList].sort((a, b) => 0.5 - Math.random());
      },
    }),
    addReference: builder.mutation<null, void>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useSafeCarePolicyListQuery } = safeCarePolicyApi;
