import { baseAPI } from "@root/services/baseApi";
const ImmunisationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    immunisationList: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/child-immunisation-info/list/${payload.fosterChildId}`,
        method: "GET",
        params: payload,
      }),
    }),
  }),
});

export const { useImmunisationListQuery } = ImmunisationApi;
