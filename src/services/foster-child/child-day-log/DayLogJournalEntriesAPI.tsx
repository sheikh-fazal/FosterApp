import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const DayLogJournalEntriesAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Day Log Journal Entries
    getDayLogJournalEntries: builder.query<null, object>({
      query: ({ params }: any) => ({
        url: "/",
        method: "GET",
        params,
      }),
      providesTags: [""],
    }),

    // Get API By Id of Day Log Journal Entries
    getDayLogJournalEntriesById: builder.query({
      query: (id: any) => `/`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: [""],
    }),

    // Post API of Day Log Journal Entries
    postDayLogJournalEntries: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/",
        method: "POST",
        param: "63e5eefe677b0d581e40682a",
        body: putDataParameter,
      }),
      invalidatesTags: [""],
    }),

    // Patch API of Day Log Journal Entries
    patchDayLogJournalEntries: builder.mutation({
      query: ({ id, body }) => ({
        url: `/`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: [""],
    }),

    // Delete API of Day Log Journal Entries
    deleteDayLogJournalEntries: builder.mutation({
      query: (id: any) => ({
        url: ``,
        method: "DELETE",
      }),
      invalidatesTags: [""],
    }),
  }),
});

export const {
  useGetDayLogJournalEntriesQuery,
  useGetDayLogJournalEntriesByIdQuery,
  usePostDayLogJournalEntriesMutation,
  usePatchDayLogJournalEntriesMutation,
  useDeleteDayLogJournalEntriesMutation,
} = DayLogJournalEntriesAPI;
