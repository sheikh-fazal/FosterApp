import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const vocationalCourseInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getVocationalCourseInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/vocational-course-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteVocationalCourseInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/vocational-course-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetVocationalCourseInfoListQuery, useDeleteVocationalCourseInfoListMutation } =
  vocationalCourseInfoApi;
