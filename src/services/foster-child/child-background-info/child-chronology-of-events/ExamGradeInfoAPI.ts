import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const examGradeInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getExamGradeInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/exam-grade-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteExamGradeInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/exam-grade-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetExamGradeInfoListQuery, useDeleteExamGradeInfoListMutation } =
  examGradeInfoApi;
