import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const complaintsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    complaintsList: builder.query<null, object>({
      query: (search: any) => ({
        url: "chronology-events/List-complaint",
        method: "GET",
        params: search,
      }),
      providesTags: ["COMPLAINT_LIST"],
    }),
    postComplaintList: builder.mutation({
      query: (list: any) => ({
        url: "chronology-events/complaints",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["COMPLAINT_LIST"],
    }),
    singleComplaintList: builder.query({
      query: (id: any) => `chronology-events/complaint/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["COMPLAINT_LIST"],
    }),
    patchComplaintList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `chronology-events/complaint/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["COMPLAINT_LIST"],
    }),
    deleteComplaintList: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/complaint/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["COMPLAINT_LIST"],
    }),
  }),
});
export const {
  useComplaintsListQuery,
  usePostComplaintListMutation,
  useLazySingleComplaintListQuery,
  usePatchComplaintListMutation,
  useDeleteComplaintListMutation,
} = complaintsApi;
