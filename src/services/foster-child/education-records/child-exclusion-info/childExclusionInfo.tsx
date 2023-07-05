import { baseAPI } from "@root/services/baseApi";

export const ChildEducationInfoList:any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildExclusionInfoList: builder.query({
      query: (queryParams: any) => ({
        url: "/education-records/exclusion-info/List",
        method: "GET",
        param: queryParams,
      }),
      providesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    postExclusionInfoRecord: builder.mutation<null, void>({
      query: ({ data, fosterChildId }: any) => ({
        url: `/education-records/exclusion-info?fosterChildId =${fosterChildId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetChildExclusionInfoListQuery,
  usePostExclusionInfoRecordMutation,
} = ChildEducationInfoList;
