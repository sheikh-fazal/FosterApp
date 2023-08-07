import { baseAPI } from "@root/services/baseApi";

export const healthAndSafetyApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHealthAndSafetyListData: builder.query({
      query: () => ({
        url: `carer-Info/list-health-and-safety`,
      }),
      providesTags: ["HEALTH_AND_SAFETY"],
    }),
    deleteHealthAndSafetyListData: builder.mutation({
      query: (id: any) => ({
        url: `carer-Info/delete-health-and-safety/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["HEALTH_AND_SAFETY"],
    }),
    houseHoldConditionAPost: builder.mutation({
      query: (payload: any) => ({
        url: `carer-Info/add-health-and-safety`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["HEALTH_AND_SAFETY"],
    }),
    patchHealthAndsafetyData: builder.mutation({
      query: ({ id, payload }: any) => ({
        url: `carer-Info/update-health-and-safety/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["HEALTH_AND_SAFETY"],
    }),
  }),
});
export const {
  useGetHealthAndSafetyListDataQuery,
  useDeleteHealthAndSafetyListDataMutation,
  useHouseHoldConditionAPostMutation,
} = healthAndSafetyApi;
