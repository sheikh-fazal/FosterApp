import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const allegationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    allegationList: builder.query<null, object>({
      query: (search: any) => ({
        url: "chronology-events/allegation/List",
        method: "GET",
        params: search,
      }),
      providesTags: ["ALLEGATION_LIST"],
    }),
    postAllegationList: builder.mutation({
      query: (list: any) => ({
        url: "chronology-events/allegation",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["ALLEGATION_LIST"],
    }),
    singleAllegetionList: builder.query({
      query: (id: any) => `chronology-events/allegation/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["ALLEGATION_LIST"],
    }),
    patchAllegationList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `chronology-events/allegation/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["ALLEGATION_LIST"],
    }),
    deleteAllegationList: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/allegation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ALLEGATION_LIST"],
    }),
  }),
});
export const {
  useAllegationListQuery,
  useLazySingleAllegetionListQuery,
  usePostAllegationListMutation,
  usePatchAllegationListMutation,
  useDeleteAllegationListMutation,
} = allegationApi;
