import { usePostInitialHomeAssessmentDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/assessment/assessment";
import {
  useGetAllInitialHomeVisitDataQuery,
  useLazyGetAllInitialHomeVisitDataQuery,
} from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { assesmentFormValues, defaultValuesAssesmentForm } from ".";

export const useAssesmentForm = () => {
  const { query } = useRouter();
  const [
    postInitialHomeAssessmentDataTrigger,
    postInitialHomeAssessmentDataStatus,
  ] = usePostInitialHomeAssessmentDataMutation();
  const [getAllInitialHomeVisitDataTrigger, getAllInitialHomeVisitDataStatus] =
    useLazyGetAllInitialHomeVisitDataQuery();

  const params = {
    value: "assessment",
    fosterCarerId:
      query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };

  const setAssesmentFormDefaultValue = async () => {
    const { data, isError } = await getAllInitialHomeVisitDataTrigger(
      dataParameter
    );
    if (isError) {
      return assesmentFormValues;
    }
    return defaultValuesAssesmentForm(
      !!Object.keys(data)?.length ? data : undefined
    );
  };

  const submitAssesmentForm = async (data: any) => {
    const putParams = {
      fosterCarerId:
        query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: data };
    console.log({ data });
    try {
      const res: any = await postInitialHomeAssessmentDataTrigger(
        putDataParameter
      ).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitAssesmentForm,
    setAssesmentFormDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeAssessmentDataStatus,
  };
};
