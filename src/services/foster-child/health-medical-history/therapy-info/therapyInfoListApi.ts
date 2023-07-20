import { baseAPI } from "@root/services/baseApi";
const TAG = "THERAPY_INFO_LIST";
export const therapyDetailsListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addAlltherapyDetailsListData: builder.mutation({
      query: (payload: any) => ({
        url: `/therapy-info/${payload.fosterChildId}`,
        method: "POST",
        body: payload.formData,
      }),
      invalidatesTags: [TAG],
    }),
    getAlltherapyDetailsListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `/therapy-info/therapy-list/${apiDataParameter.id}`,
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: [TAG],
      transformResponse: (res) => {
        console.log({ res });
        return res;
      },
    }),
    delTherapyDetailsListData: builder.mutation({
      query: (payload: any) => ({
        url: `/therapy-info/${payload.id}`,
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: [TAG],
    }),
    getTherapyInfoByid: builder.query({
      query: (payload: any) => ({
        url: `/therapy-info/${payload?.id}`,
        method: "GET",
        params: payload,
      }),
      providesTags: [TAG],
    }),
    updateTherapyInfoByid: builder.mutation({
      query: (payload: any) => ({
        url: `/therapy-info/${payload.id}`,
        method: "PATCH",
        body: payload.formData,
      }),
      invalidatesTags: [TAG],
    }),

    getTherapyDetailsDocsListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `/therapy-info/document/list/${apiDataParameter.id}`,
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: [TAG],
    }),
    delTherapyDetailsDocsListData: builder.mutation({
      query: (payload: any) => ({
        url: `/therapy-info/document/${payload.id}`,
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useAddAlltherapyDetailsListDataMutation,
  useGetAlltherapyDetailsListDataQuery,
  useDelTherapyDetailsListDataMutation,
  useUpdateTherapyInfoByidMutation,
  useGetTherapyDetailsDocsListDataQuery,
  useDelTherapyDetailsDocsListDataMutation,
  useLazyGetTherapyInfoByidQuery,
} = therapyDetailsListApi;
