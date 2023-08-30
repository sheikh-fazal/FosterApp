import { baseAPI } from "@root/services/baseApi";

export const immunisationApi: any = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getImmunisationListData: builder.query({
      query: ({ params }: any) => ({
        url: `carer-Info/immunization?fosterCarerId=49c2d4ec-29f1-4180-8ab9-5e2314df12c8&limit=10&offset=0`,
        params: params?.params,
      }),
    }),
  }),
});

export const { useGetImmunisationListDataQuery } = immunisationApi;
