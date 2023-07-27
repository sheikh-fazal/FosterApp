import { baseAPI } from "@root/services/baseApi";

export const healthAndSafetyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHealthAndSafetyListData: builder.query({
      query: () => ({
        url: `carer-Info/list-health-and-safety`,
      }),
    }),
  }),
});
export const { useGetHealthAndSafetyListDataQuery } = healthAndSafetyApi;
