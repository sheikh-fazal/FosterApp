import { baseAPI } from "@root/services/baseApi";

export const statutoryMedicalListApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllStatutoryMedicalListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "foster-child/statutory-medical/all",
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: ["STATUTORY_MEDICAL_LIST"],
    }),
    getSingleStatutoryMedicalTypeData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter.params,
      }),
    }),
    postStatutoryMedicalTypeData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: "foster-child/statutory-medical",
        method: "POST",
        params: apiDataParameter?.params,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_LIST"],
    }),
    patchStatutoryMedicalTypeData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        params: apiDataParameter.params,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_LIST"],
    }),
    deleteStatutoryMedicalTypeData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/${apiDataParameter?.pathParams?.id}`,
        method: "DELETE",
        params: apiDataParameter?.params,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_LIST"],
    }),
  }),
});

export const {
  useGetAllStatutoryMedicalListDataQuery,
  useLazyGetAllStatutoryMedicalListDataQuery,
  useLazyGetSingleStatutoryMedicalTypeDataQuery,
  useGetSingleStatutoryMedicalTypeDataQuery,
  useDeleteStatutoryMedicalTypeDataMutation,
  usePatchStatutoryMedicalTypeDataMutation,
  usePostStatutoryMedicalTypeDataMutation,
} = statutoryMedicalListApi;
