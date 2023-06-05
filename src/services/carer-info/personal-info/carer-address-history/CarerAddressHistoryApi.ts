import { baseAPI, TAGS } from "@root/services/baseApi";

export const carerAddressHistoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllHistory: builder.query({
      query: (params: any) => "/carer-address-history",
    }),
    postAddressHistory: builder.mutation({
      query: ({ formData }: any) => ({
        url: `/carer-address-history`,
        method: "Post",
        body: formData,
      }),
    }),
    updateAddressHistory: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/carer-address-history`,
        method: "Put",
        body: formData,
      }),
    }),
    deleteAddressHistory: builder.mutation({
      query: (id: any) => ({
        url: `/carer-address-history/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["INCIDENT_LIST"],
    }),
  }),
});

export const {
  useGetAllHistoryQuery,
  useDeleteAddressHistoryMutation,
  usePostAddressHistoryMutation,
  useUpdateAddressHistoryMutation,
} = carerAddressHistoryApi;
