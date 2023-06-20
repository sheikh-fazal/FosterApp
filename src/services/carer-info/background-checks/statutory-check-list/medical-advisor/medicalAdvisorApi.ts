import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const medicalAdvisorApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    medicalAdvisorList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/medical-advisor-list",
        method: "GET",
        params: search,
      }),
      providesTags: ["MEDICAL_ADVISOR"],
    }),
    postMedicalAdvisorList: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/add-medical-advisor",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["MEDICAL_ADVISOR"],
    }),
    singleMedicalAdvisorList: builder.query({
      query: (id: any) => `assessment-stage-one/get-medical-advisor/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["MEDICAL_ADVISOR"],
    }),
    patchMedicalAdvisorList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/update-medical-advisor/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["MEDICAL_ADVISOR"],
    }),
    deleteMedicalAdvisorList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/delete-medical-advisor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MEDICAL_ADVISOR"],
    }),
  }),
});
export const {
  useMedicalAdvisorListQuery,
  usePostMedicalAdvisorListMutation,
  useLazySingleMedicalAdvisorListQuery,
  usePatchMedicalAdvisorListMutation,
  useDeleteMedicalAdvisorListMutation,
} = medicalAdvisorApi;
