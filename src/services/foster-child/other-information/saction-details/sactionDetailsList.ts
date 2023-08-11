import { baseAPI } from "@root/services/baseApi";
export const SanctionDetailsList = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllSanctionDetailsListData: builder.query({
      query: ({ fosterChildId }: any) => ({
        url: `/foster-child/list-sanction-details/${fosterChildId}`,
        method: "GET",
        // params,
      }),
      providesTags: ["SANCTION_DETAILS_LIST"],
    }),
    getSingleSanctionDetailsData: builder.query({
      query: ({ sanctionDetailsId }: any) => ({
        url: `/foster-child/get-sanction-details/${sanctionDetailsId}`,
        method: "GET",
        params: sanctionDetailsId,
      }),
    }),
    postSanctionDetailsData: builder.mutation({
      //check the str of body here
      query: ({ body, fosterChildId }: any) => ({
        url: `/foster-child/add-sanction-details/${fosterChildId}`,
        method: "POST",
        params: fosterChildId,
        body: body,
      }),
      invalidatesTags: ["SANCTION_DETAILS_LIST"],
    }),
    patchSanctionDetailsData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/foster-child/update-sanction-details/{sanctionDetailsId}${apiDataParameter?.pathParams?.sanctionDetailsId}`,
        method: "PATCH",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["SANCTION_DETAILS_LIST"],
    }),
    // deleteEducationInfoData: builder.mutation({
    //   query: ({ id }: any) => ({
    //     url: `education-records/education-info/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["CHILD_EDUCATION_INFO_LIST"],
    // }),
  }),
});
export const {
  useGetAllSanctionDetailsListDataQuery,
  //   useLazyGetAllEducationInfoListDataQuery,
  useGetSingleSanctionDetailsDataQuery,
  //   useLazyGetSingleEducationInfoDataQuery,
  usePostSanctionDetailsDataMutation,
  usePatchSanctionDetailsDataMutation,
  //   useDeleteEducationInfoDataMutation,
} = SanctionDetailsList;
