import { usePostInitialHomeBackgroundDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/background/background";
import { useLazyGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { enqueueSnackbar } from "notistack";
import {
  backgroundFormFieldsInfoFunction,
  backgroundFormValues,
  defaultValuesBackgroundForm,
} from ".";
import { useRouter } from "next/router";
import useAuth from "@root/hooks/useAuth";

export const useBackgroundForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const backgroundFormFieldsInfo = backgroundFormFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [
    postInitialHomeBackgroundDataTrigger,
    postInitialHomeBackgroundDataStatus,
  ] = usePostInitialHomeBackgroundDataMutation();
  const [getAllInitialHomeVisitDataTrigger, getAllInitialHomeVisitDataStatus] =
    useLazyGetAllInitialHomeVisitDataQuery();
  const params = {
    value: "backGround",
    fosterCarerId: query?.fosterCarerId,
  };

  const dataParameter = { params };

  const setBackgroundFormDefaultValue = async () => {
    const { data, isError } = await getAllInitialHomeVisitDataTrigger(
      dataParameter
    );
    if (isError) {
      return backgroundFormValues;
    }
    return defaultValuesBackgroundForm(
      !!Object.keys(data)?.length ? data : undefined
    );
  };
  const submitBackgroundForm = async (data: any) => {
    const putParams = {
      fosterCarerId: query?.fosterCarerId,
    };
    const putDataParameter = { params: putParams, body: data };
    try {
      const res: any = await postInitialHomeBackgroundDataTrigger(
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
    submitBackgroundForm,
    setBackgroundFormDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeBackgroundDataStatus,
    backgroundFormFieldsInfo,
    user,
  };
};
