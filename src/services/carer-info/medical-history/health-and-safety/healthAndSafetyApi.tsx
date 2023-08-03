import { baseAPI } from "@root/services/baseApi";

export const healthAndSafetyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHealthAndSafetyListData: builder.query({
      query: () => ({
        url: `carer-Info/list-health-and-safety`,
      }),
      // postHouseHoldConditionAData: builder.mutation({
      //   query: (body: any) => ({
      //     url: ``,
      //     method: "POST",
      //   }),
      // }),
    }),
  }),
});
export const { useGetHealthAndSafetyListDataQuery } = healthAndSafetyApi;
