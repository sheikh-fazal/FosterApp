import { baseAPI } from "@root/services/baseApi";

export const gpDetailsListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllGpDetailsListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "foster-child/therapy-info/all",
        method: "GET",
        params: apiDataParameter.params,
      }),
      // providesTags: ["THERAPY_DETAILS_LIST"],
    }),
  }),
});

export const {
  useGetAllGpDetailsListDataQuery,
  useLazyGetAllGpDetailsListDataQuery,
} = gpDetailsListApi;
