import { baseAPI } from "@root/services/baseApi";

export const ChildEducationInfoList: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildExclusionInfoList: builder.query({
      query: ({ params }: any) => ({
        url: "/education-records/exclusion-info/List",
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    postExclusionInfoRecord: builder.mutation<null, void>({
      query: ({ data, fosterChildId }: any) => ({
        url: `/education-records/exclusion-info?fosterChildId=${fosterChildId}`,
        method: "POST",
        body: data,
      }),
    }),
    getSingleChildExclusionInfoRecord: builder.query({
      query: (id: any) => ({
        url: `/education-records/exclusion-info/${id}`,
        method: "GET",
      }),
    }),
    patchSingleChildExclusionInfoRecord: builder.mutation({
      query: ({ data, id }: any) => ({
        url: `/education-records/exclusion-info/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteSingleChildExclusionInfoRecord: builder.mutation({
      query: (childRecordId: any) => ({
        url: `/education-records/exclusion-info/${childRecordId}`,
        method: "DELETE",
      }),
    }),
    postFosterExclusionDocument: builder.mutation<null, void>({
      query: (formData: any) => ({
        url: `/education-records/exclusionDocuments`,
        method: "POST",
        body: formData,
      }),
    }),
    getChildExclusionDocumentList: builder.query({
      query: (id: any) => ({
        url: `/education-records/list-exclusionDocuments/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetChildExclusionInfoListQuery,
  usePostExclusionInfoRecordMutation,
  useGetSingleChildExclusionInfoRecordQuery,
  usePatchSingleChildExclusionInfoRecordMutation,
  useDeleteSingleChildExclusionInfoRecordMutation,
  usePostFosterExclusionDocumentMutation,
  useGetChildExclusionDocumentListQuery,
} = ChildEducationInfoList;
