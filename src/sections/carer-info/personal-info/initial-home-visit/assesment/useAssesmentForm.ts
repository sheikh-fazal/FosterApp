import { usePostInitialHomeAssessmentDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/assessment/assessment";
import { useLazyGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  assesmentFormFieldsInfoFunction,
  assesmentFormValues,
  defaultValuesAssesmentForm,
} from ".";
import useAuth from "@root/hooks/useAuth";

export const useAssesmentForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const assesmentFormFieldsInfo = assesmentFormFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [
    postInitialHomeAssessmentDataTrigger,
    postInitialHomeAssessmentDataStatus,
  ] = usePostInitialHomeAssessmentDataMutation();
  const [getAllInitialHomeVisitDataTrigger, getAllInitialHomeVisitDataStatus] =
    useLazyGetAllInitialHomeVisitDataQuery();

  const params = {
    value: "assessment",
    fosterCarerId:
      query?.fosterCarerId,
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
      fosterCarerId: query?.fosterCarerId,
    };
    const putDataParameter = { params: putParams, body: data };
    try {
      const res: any = await postInitialHomeAssessmentDataTrigger(
        putDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
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
    assesmentFormFieldsInfo,
    user,
  };
};
