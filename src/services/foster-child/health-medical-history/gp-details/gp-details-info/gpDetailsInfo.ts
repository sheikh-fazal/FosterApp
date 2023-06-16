import { baseAPI } from "@root/services/baseApi";

export const gpDetailsInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllGpDetailsInfoData: builder.query({
      query: (dataParameter: any) => ({
        url: "foster-child/gp-info",
        method: "GET",
        params: dataParameter.params,
      }),
    //   providesTags: ["INITIAL_HOME_VISIT"],
    }),
    getSingleGpDetailsInfoData: builder.query({
        query: (dataParameter: any) => ({
          url: `foster-child/gp-info/${dataParameter?.pathParams?.id}`,
          method: "GET",
          params: dataParameter?.params,
        }),
      //   providesTags: ["INITIAL_HOME_VISIT"],
      }),
    postGpDetailsInfoData: builder.mutation({
        query: (dataParameter: any) => ({
          url: "foster-child/gp-info",
          method: "POST",
          params: dataParameter.params,
          body:dataParameter.body
        }),
        invalidatesTags: ["GP_DETAILS_INFO"],
      }),
      patchGpDetailsInfoData: builder.mutation({
        query: (dataParameter: any) => ({
          url: `foster-child/gp-info/${dataParameter?.pathParams?.id}`,
          method: "PATCH",
          params: dataParameter?.params,
          body:dataParameter?.body
        }),
        invalidatesTags: ["GP_DETAILS_INFO"],
      }),
  }),
});


export const {
   useGetAllGpDetailsInfoDataQuery,
   useLazyGetSingleGpDetailsInfoDataQuery,
   useGetSingleGpDetailsInfoDataQuery,
   usePatchGpDetailsInfoDataMutation,
   usePostGpDetailsInfoDataMutation
  } = gpDetailsInfoApi;