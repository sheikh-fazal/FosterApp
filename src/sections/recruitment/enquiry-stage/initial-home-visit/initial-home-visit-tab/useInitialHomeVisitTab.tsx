import { usePostInitialHomeAssessmentDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/assessment/assessment";
import { usePostInitialHomeBackgroundDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/background/background";
import { usePostInitialHomeInterestDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/interest/interest";
import { usePostPrimaryCarerDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/primary/primaryCarer";
import { enqueueSnackbar } from "notistack";

export const useinitialHomeVisitTab = () => {
  const [
    postInitialHomeAssessmentDataTrigger,
    postInitialHomeAssessmentDataStatus,
  ] = usePostInitialHomeAssessmentDataMutation();
  const [
    postInitialHomeBackgroundDataTrigger,
    postInitialHomeBackgroundDataStatus,
  ] = usePostInitialHomeBackgroundDataMutation();

  const [
    postInitialHomeInterestDataTrigger,
    postInitialHomeInterestDataStatus,
  ] = usePostInitialHomeInterestDataMutation();

  const [postPrimaryCarerDataTrigger, postPrimaryCarerDataStatus] =
    usePostPrimaryCarerDataMutation();

  const submitPrimaryCarerForm = async (data: any) => {
    console.log(data);
    try {
      const res: any = await postPrimaryCarerDataTrigger(data).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const submitInterestForm = async (data: any) => {
    console.log({ data });
    try {
      const res: any = await postInitialHomeInterestDataTrigger(data).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const submitBackgroundForm = async (data: any) => {
    console.log({ data });
    try {
      const res: any = await postInitialHomeBackgroundDataTrigger(
        data
      ).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const submitAssesmentForm = async (data: any) => {
    console.log({ data });
    try {
      const res: any = await postInitialHomeAssessmentDataTrigger(
        data
      ).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitAssesmentForm,
    submitBackgroundForm,
    submitInterestForm,
    submitPrimaryCarerForm,
  };
};
