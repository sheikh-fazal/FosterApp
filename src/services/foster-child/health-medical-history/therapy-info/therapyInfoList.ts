import { baseAPI } from "@root/services/baseApi";

export const therapyDetailsListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAlltherapyDetailsListData: builder.query({
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
  useGetAlltherapyDetailsListDataQuery,
  useLazyGetAlltherapyDetailsListDataQuery,
} = therapyDetailsListApi;
