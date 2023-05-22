import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "ASSESSMENT_STAGE_ONE";

export const assessmentStageOneApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRegularAssessmentDetails: builder.query({
      query: ({ params, limit, offset }: any) => ({
        url: `/assessment-stage-one/list-regular-assessment-meeting?${limit || 10}&${offset || 10}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    getSingleRegularAssessmentDetail: builder.query({
      query: ({ params }: any) => ({
        url: `/assessment-stage-one/list-regular-assessment-meeting`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),

    // postCarerFamilyApi: builder.mutation<null, void>({
    //   query: (body: any) => ({
    //     url: "carer-Info/personal-info/carer-family",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [TAG],
    // }),
    // getCarerFamilyById: builder.query({
    //   query: (id) => `/carer-Info/personal-info/carer-family/${id}`,
    //   providesTags: (result) => generalTags(result?.faimly_details, TAG),
    // }),
    // putCarerFamilyById: builder.mutation<null, void>({
    //   query: (data: any) => {
    //     const { id, ...body } = data;
    //     return {
    //       url: `/carer-Info/personal-info/carer-family/${id}`,
    //       method: "PUT",
    //       body,
    //     };
    //   },
    //   invalidatesTags: [TAG],
    // }),
  }),
});

export const { useGetRegularAssessmentDetailsQuery } = assessmentStageOneApi;
