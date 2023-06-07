import { baseAPI } from "@root/services/baseApi";

export const gpDetailsListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllGpDetailsListData: builder.query({
      query: (dataParameter: any) => ({
        url: "foster-child/gp-info/all",
        method: "GET",
        params: dataParameter.params,
      }),
      providesTags: ["GP_DETAILS_INFO"],
    }),
  }),
});

export const {
  useGetAllGpDetailsListDataQuery,
  useLazyGetAllGpDetailsListDataQuery,
} = gpDetailsListApi;