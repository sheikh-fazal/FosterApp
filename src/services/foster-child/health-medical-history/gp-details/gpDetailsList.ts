import { baseAPI } from "@root/services/baseApi";

export const gpDetailsListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllGpDetailsListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "foster-child/gp-info/all",
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: ["GP_DETAILS_INFO"],
    }),
  }),
});

export const {
  useGetAllGpDetailsListDataQuery,
  useLazyGetAllGpDetailsListDataQuery,
} = gpDetailsListApi;
