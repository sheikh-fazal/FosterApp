import { usePostInitialHomeBackgroundDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/background/background";
import { enqueueSnackbar } from "notistack";

export const useBackgroundForm = () => {
  const [postInitialHomeBackgroundDataTrigger, postInitialHomeBackgroundDataStatus] =
    usePostInitialHomeBackgroundDataMutation();
  const submitBackgroundForm = async (data: any) => {
    console.log({ data });
    try {
      const res: any = await postInitialHomeBackgroundDataTrigger(data).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitBackgroundForm,
  };
};
