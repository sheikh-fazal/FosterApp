import { usePostPrimaryCarerDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/primary/primaryCarer";
import { enqueueSnackbar } from "notistack";

export const usePrimaryCarerForm = () => {
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

  return { submitPrimaryCarerForm };
};
