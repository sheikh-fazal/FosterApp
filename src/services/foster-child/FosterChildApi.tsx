import { baseAPI } from "@root/services/baseApi";
const FosterApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getFostersList: builder.query({
      query: (payload: any) => ({
        url: "/users/foster-child-users",
        method: "GET",
        params: payload.params,
      }),
    }),
    
  }),
});
const { useGetFostersListQuery } =
  FosterApi;
