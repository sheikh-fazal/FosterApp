import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "ASSESSMENT_STAGE_ONE";

export const assessmentStageOneApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRegularAssessmentDetails: builder.query({
      query: ({ params }: any) => ({
        url: `/assessment-stage-one/regular-assessment-meeting`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    getSingleRegularAssessmentDetail: builder.query({
      query: ({ id }: any) => ({
        url: `/assessment-stage-one/regular-assessment-meeting/${id}`,
        method: "GET",
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    patchRegularAssessmentDetail: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, regularAssessmentForm } = data;
        console.log("🚀 ~ file: assessmentStageOneApi.tsx:27 ~ id:", id);

        return {
          url: `/assessment-stage-one/regular-assessment-meeting/${id}`,

          method: "PATCH",

          body: regularAssessmentForm,
        };
      },

      invalidatesTags: [TAG],
    }),
    // patchRegularAssessmentDetail: builder.mutation<null, void>({
    //   query: ( body:any) => ({
    //     const {id,regularAssessmentForm}=body;
    //     return{
    //       url: `/assessment-stage-one/regular-assessment-meeting/${id}`,
    //       method: "PATCH",
    //       body:regularAssessmentForm
    //     }
    //   }),
    // }),
    postRegularAssessmentDetail: builder.mutation({
      query: (body) => ({
        url: `/assessment-stage-one/regular-assessment-meeting`,
        method: "POST",
        body,
      }),
      // invalidatesTags: [TAG],
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

export const {
  useGetRegularAssessmentDetailsQuery,
  useGetSingleRegularAssessmentDetailQuery,
  useLazyGetSingleRegularAssessmentDetailQuery,
  usePatchRegularAssessmentDetailMutation,
  usePostRegularAssessmentDetailMutation,
} = assessmentStageOneApi;
