import { usePostInitialHomeInterestDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/interest/interest";
import { enqueueSnackbar } from "notistack";

export const useInterestForm = () => {
  const [postInitialHomeInterestDataTrigger, postInitialHomeInterestDataStatus] =
    usePostInitialHomeInterestDataMutation();

  const submitInterestForm = async (data: any) => {
    console.log({ data });
    try {
      const res: any = await postInitialHomeInterestDataTrigger(data).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return { submitInterestForm };
};
