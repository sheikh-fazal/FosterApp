import { baseAPI } from "@root/services/baseApi";

export const ChildEducationInfoList = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildExclusionInfoList: builder.query({
      query: (dataParameter: any) => ({
        url: "/education-records/exclusion-info/List",
        method: "GET",
        param: dataParameter,
      }),
      providesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
  }),
});

export const { useGetChildExclusionInfoListQuery } = ChildEducationInfoList;
