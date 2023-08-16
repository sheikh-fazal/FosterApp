import { baseAPI } from "@root/services/baseApi";

export const immunisationApi = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getImmunisationByIdQuery: builder.query({
      query: (id: string) => ({
        url: `carer-Info/immunisation/${id}`,
      }),
    }),
  }),
});

const { useLazyGetImmunisationByIdQueryQuery } = immunisationApi;
