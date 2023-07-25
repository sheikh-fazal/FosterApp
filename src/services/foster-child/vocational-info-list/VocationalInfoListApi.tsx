import { baseAPI } from "@root/services/baseApi";

const TAG = "VOCATIONAL-INFO";
const DOCTAG = "VOCATIONAL-INFO-DOCS";
export const VocationalInfoListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Main Form
    vocationalInfoList: builder.query({
      query: (id) => ({
        url: `/vocationanl-info-list/info-list/${id}`,
        method: "GET",
      }),
      providesTags: [TAG],
      // transformResponse: (res) => {
      // return [...mockSafeCarePolicyList].sort((a, b) => 0.5 - Math.random());
      // },
    }),
    addVocationalInfo: builder.mutation({
      query: (id) => ({
        url: `/vocationanl-info-list/add?fosterCarerId=${id}`,
        method: "POST",
      }),
      invalidatesTags: [TAG],
    }),
    editVocationalInfo: builder.mutation({
      query: (id) => ({
        url: `/vocationanl-info-list/info-list/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [TAG],
    }),
    deleteVocationalInfo: builder.mutation({
      query: (id) => ({
        url: `/vocationanl-info-list/info-list/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),

    // Documents
    vocationalInfoDocuments: builder.query({
      query: ({ params }) => ({
        url: `/vocationanl-info-list/all-documents/vocational-info-documents`,
        method: "GET",
        params,
      }),
      providesTags: [DOCTAG],
    }),
    addVocationalInfoDocument: builder.mutation({
      query: (id) => ({
        url: `vocationanl-info-list/documents?fosterCarerId=${id}`,
        method: "POST",
      }),
      invalidatesTags: [DOCTAG],
    }),
    deleteVocationalInfoDocument: builder.mutation({
      query: (id) => ({
        url: `vocationanl-info-list/documents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [DOCTAG],
    }),
  }),
});

export const {
  useVocationalInfoListQuery,
  useAddVocationalInfoMutation,
  useDeleteVocationalInfoMutation,
  useEditVocationalInfoMutation,
  useLazyVocationalInfoListQuery,
} = VocationalInfoListApi;
