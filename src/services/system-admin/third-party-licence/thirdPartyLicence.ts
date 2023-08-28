import { baseAPI } from "@root/services/baseApi";
export const ThirdPartyLicence = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // getAllAreaOfficeSetUpListData: builder.query({
    //   query: ({ params }: any) => ({
    //     url: `/admin/area-office-setup`,
    //     method: "GET",
    //     params,
    //   }),
    //   providesTags: ["AREA_OFFICE_SETUP"],
    // }),
    // getSingleAreaOfficeData: builder.query({
    //   query: ({ AreaOfficeId }: any) => ({
    //     url: `/admin/area-office-setup/${AreaOfficeId}`,
    //     method: "GET",
    //   }),
    // }),
    postThirdPartyLicenceData: builder.mutation({
      query: ({ body }: any) => ({
        url: `/admin/third-party-licenses`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["AREA_OFFICE_SETUP"],
    }),
    patchThirdPartyLicenceData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/admin/third-party-licenses`,
        method: "PUt",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["AREA_OFFICE_SETUP"],
    }),
    // deleteAreaOfficeData: builder.mutation({
    //   query: ({ id }: any) => ({
    //     url: `/admin/area-office-setup`,
    //     method: "DELETE",
    //     body: {
    //       areaOfficeIds: [id],
    //     },
    //   }),
    //   invalidatesTags: ["AREA_OFFICE_SETUP"],
    // }),
  }),
});
export const {
//   useGetAllAreaOfficeSetUpListDataQuery,
//   useGetSingleAreaOfficeDataQuery,
  usePostThirdPartyLicenceDataMutation,
  usePatchThirdPartyLicenceDataMutation,
//   useDeleteAreaOfficeDataMutation,
} = ThirdPartyLicence;
