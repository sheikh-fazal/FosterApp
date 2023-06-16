import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

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
    postPepClaDocumentationList: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/cla-pep",
        method: "POST",
        body: putDataParameter,
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    postEhcpClaDocumentationList: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/cla-ehcp",
        method: "POST",
        body: putDataParameter,
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    getClaDocumentationById: builder.query({
      query: (id: any) => `/foster-child/cla/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    // getClaDocumentationById: builder.query({
    //   query: (id: any) => `/foster-child/cla/${id}`,
    //   providesTags: ["CLA_DOCUMENTATION_LIST"],
    // }),
    deleteClaDocumentationList: builder.mutation({
      query: (id: any) => ({
        url: `foster-child/cla/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
  }),
});

export const {
  useClaDocumentationListQuery,
  useGetClaDocumentationByIdQuery,
  usePostPepClaDocumentationListMutation,
  usePostEhcpClaDocumentationListMutation,
  useDeleteClaDocumentationListMutation,
} = claDocumentationApi;
