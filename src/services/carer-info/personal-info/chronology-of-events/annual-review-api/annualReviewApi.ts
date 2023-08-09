import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const annualReviewApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    allegationList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `chronology-events/allegation/List/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    postAllegationList: builder.mutation({
      query: (payload: any) => ({
        url: `chronology-events/allegation/${payload.params.fosterCarerId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    singleAllegetionList: builder.query({
      query: (id: any) => `chronology-events/allegation/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    patchAllegationList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `chronology-events/allegation/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    deleteAllegationList: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/allegation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
  }),
});
export const {
  useAllegationListQuery,
  useLazySingleAllegetionListQuery,
  usePostAllegationListMutation,
  usePatchAllegationListMutation,
  useDeleteAllegationListMutation,
} = annualReviewApi;
