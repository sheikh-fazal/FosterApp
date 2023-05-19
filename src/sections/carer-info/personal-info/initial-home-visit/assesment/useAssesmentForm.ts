import { usePostInitialHomeAssessmentDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/assessment/assessment";
import { enqueueSnackbar } from "notistack";

export const useAssesmentForm = () => {
  const [postInitialHomeAssessmentDataTrigger, postInitialHomeAssessmentDataStatus] =
    usePostInitialHomeAssessmentDataMutation();

  const submitAssesmentForm = async (data: any) => {
    console.log({ data });
    try {
      const res: any = await postInitialHomeAssessmentDataTrigger(data).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitAssesmentForm,
  };
};
