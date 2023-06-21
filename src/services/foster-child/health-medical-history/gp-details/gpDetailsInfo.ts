import { baseAPI } from "@root/services/baseApi";

export const gpDetailsInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllGpDetailsListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "foster-child/gp-info/all",
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: ["GP_DETAILS_INFO"],
    }),
    getSingleGpDetailsInfoData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `foster-child/gp-info/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter?.params,
      }),
    }),
    postGpDetailsInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: "foster-child/gp-info",
        method: "POST",
        params: apiDataParameter.params,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["GP_DETAILS_INFO"],
    }),
    patchGpDetailsInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/gp-info/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        params: apiDataParameter?.params,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["GP_DETAILS_INFO"],
    }),
  }),
});

export const {
  useGetAllGpDetailsListDataQuery,
  useLazyGetAllGpDetailsListDataQuery,
  useLazyGetSingleGpDetailsInfoDataQuery,
  useGetSingleGpDetailsInfoDataQuery,
  usePatchGpDetailsInfoDataMutation,
  usePostGpDetailsInfoDataMutation,
} = gpDetailsInfoApi;
