import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
export const uploadDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadDocumentList: builder.query<null, object>({
      query: (search: any) => ({
        url: "chronology-events/list-allegationDocuments",
        method: "GET",
        params: search,
      }),
      providesTags: ["ALLEGATION_DOCUMENTS"],
    }),
    postAllegationDocuments: builder.mutation({
      query: (list: any) => ({
        url: "chronology-events/allegationDocuments",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["ALLEGATION_DOCUMENTS"],
    }),
    singleAllegetionDocument: builder.query({
      query: (id: any) => `chronology-events/allegationDocuments/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["ALLEGATION_DOCUMENTS"],
    }),
    deleteDocumentList: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/allegationDocument/delete${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ALLEGATION_DOCUMENTS"],
    }),
  }),
});
export const {
  useUploadDocumentListQuery,
  usePostAllegationDocumentsMutation,
  useLazySingleAllegetionDocumentQuery,
  useDeleteDocumentListMutation,
} = uploadDocumentsApi;
