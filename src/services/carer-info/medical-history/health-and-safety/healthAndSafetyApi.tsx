import { baseAPI } from "@root/services/baseApi";

export const healthAndSafetyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHealthAndSafetyListData: builder.query({
      query: () => ({
        url: `carer-Info/list-health-and-safety`,
      }),
      // houseHoldConditionAPost: builder.mutation({
      //   query: (payload: any) => ({
      //     url: `/carer-Info/add-health-and-safety`,
      //     method: "POST",
      //     body: payload,
      //   }),
      // }),
    }),
  }),
});
export const {
  useGetHealthAndSafetyListDataQuery,
  // useHouseHoldConditionAPostMutation
  // usePostHouseHoldConditionADataMutation,
} = healthAndSafetyApi;
