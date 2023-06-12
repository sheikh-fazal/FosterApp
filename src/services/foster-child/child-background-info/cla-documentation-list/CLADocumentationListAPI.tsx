import { baseAPI } from "@root/services/baseApi";

export const claDocumentationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    claDocumentationList: builder.query<null, object>({
      query: (search: any) => ({
        url: "/foster-child/cla/list",
        method: "GET",
        params: search,
      }),
      providesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    
    postClaDocumentationList: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/cla-pep",
        methed: "POST",
        body: putDataParameter,
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
  }),
});

export const {
  useClaDocumentationListQuery,
  usePostClaDocumentationListMutation,
} = claDocumentationApi;
