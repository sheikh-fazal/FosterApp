import { baseAPI } from "@root/services/baseApi";

export const statutoryMedicalListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllstatutoryMedicalListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "foster-child/statutory-medical/all",
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: ["STATUTORY_MEDICAL_LIST"],
    }),
  }),
});

export const {
  useGetAllstatutoryMedicalListDataQuery,
  useLazyGetAllstatutoryMedicalListDataQuery,
} = statutoryMedicalListApi;