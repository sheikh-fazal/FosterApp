import { useLazyGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { usePostPrimaryCarerDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/primary/primaryCarer";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { defaultValuesPrimaryCarer, primaryCarerFieldsInfoFunction } from ".";
import useAuth from "@root/hooks/useAuth";

export const usePrimaryCarerForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const primaryCarerFieldsInfo = primaryCarerFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [postPrimaryCarerDataTrigger, postPrimaryCarerDataStatus] =
    usePostPrimaryCarerDataMutation();
  const [getAllInitialHomeVisitDataTrigger, getAllInitialHomeVisitDataStatus] =
    useLazyGetAllInitialHomeVisitDataQuery();
  // get api params
  const params = {
    value: "primaryCarer",
    fosterCarerId: query?.fosterCarerId,
  };

  const dataParameter = { params };

  const setPrimaryCarerDefaultValue = async () => {
    const { data, isError } = await getAllInitialHomeVisitDataTrigger(
      dataParameter,
      true
    );
    if (isError) {
      return defaultValuesPrimaryCarer(data);
    }

    return defaultValuesPrimaryCarer(data);
  };

  const submitPrimaryCarerForm = async (data: any) => {
    const putParams = {
      fosterCarerId: query?.fosterCarerId,
    };
    const putDataParameter = { params: putParams, body: data };
    try {
      const res: any = await postPrimaryCarerDataTrigger(
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
    submitPrimaryCarerForm,
    setPrimaryCarerDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postPrimaryCarerDataStatus,
    user,
    primaryCarerFieldsInfo,
  };
};
