import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const hospitalisationInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHospitalisationInfoList: builder.query({
      query: ({ params }: any) => ({
        url: `/child-chronology-of-events/hospitalisation-info/List`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    deleteHospitalisationInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/hospitalisation-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { useGetHospitalisationInfoListQuery, useDeleteHospitalisationInfoListMutation } =
  hospitalisationInfoApi;
