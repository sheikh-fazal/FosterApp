import { usePostInitialHomeBackgroundDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/background/background";
import { useGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { enqueueSnackbar } from "notistack";

export const useBackgroundForm = () => {
  const [
    postInitialHomeBackgroundDataTrigger,
    postInitialHomeBackgroundDataStatus,
  ] = usePostInitialHomeBackgroundDataMutation();
  const params = {
    value: "backGround",
    fosterCarerId: "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };
  const { data, isLoading, isError, isSuccess } =
    useGetAllInitialHomeVisitDataQuery(dataParameter);
  const submitBackgroundForm = async (data: any) => {
    const putParams = {
      fosterCarerId: "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: data };
    console.log({ data });
    try {
      const res: any = await postInitialHomeBackgroundDataTrigger(
        putDataParameter
      ).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitBackgroundForm,
  };
};
