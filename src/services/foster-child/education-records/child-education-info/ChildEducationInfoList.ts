import { baseAPI } from "@root/services/baseApi";

export const ChildEducationInfoList = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllEducationInfoListData: builder.query({
      query: (dataParameter: any) => ({
        url: "education-records/education-info/list-education-info",
        method: "GET",
        param: dataParameter,
      }),
      providesTags: ["CHILD_EDUCATION_INFO_LIST"],
    }),
  }),
});

export const {
  useGetAllEducationInfoListDataQuery,
  useLazyGetAllEducationInfoListDataQuery,
} = ChildEducationInfoList;
