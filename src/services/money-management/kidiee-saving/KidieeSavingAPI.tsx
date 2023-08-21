import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const KidieeSavingAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Kidiee Saving
    getKidieeSaving: builder.query<null, object>({
      query: ({ params, fosterChildId }: any) => ({
        url: `/money-management/kidiee-saving/list${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["KIDIEE_SAVING"],
    }),

    // Get API By Id of Kidiee Saving
    getKidieeSavingById: builder.query({
      query: (id: any) =>
        `/money-management/get-kidiee-saving/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["KIDIEE_SAVING"],
    }),

    // Post API of Kidiee Saving
    postKidieeSaving: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/money-management/add-kidiee-saving",
        method: "POST",
        param: "63e5eefe677b0d581e40682a",
        body: putDataParameter,
      }),
      invalidatesTags: ["KIDIEE_SAVING"],
    }),

    // Patch API of Kidiee Saving
    patchKidieeSaving: builder.mutation({
      query: ({ id, body }) => ({
        url: `/money-management/update-kidiee-saving/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["KIDIEE_SAVING"],
    }),

    // Delete API of Kidiee Saving
    deleteKidieeSaving: builder.mutation({
      query: (id: any) => ({
        url: `/money-management/delete-kidiee-saving/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["KIDIEE_SAVING"],
    }),
  }),
});

export const {
  useGetKidieeSavingQuery,
  useGetKidieeSavingByIdQuery,
  usePostKidieeSavingMutation,
  usePatchKidieeSavingMutation,
  useDeleteKidieeSavingMutation,
} = KidieeSavingAPI;
