import {
  useGetAllInitialHomeVisitDataQuery,
  useLazyGetAllInitialHomeVisitDataQuery,
} from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { usePostPrimaryCarerDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/primary/primaryCarer";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { defaultValuesPrimaryCarer, primaryCarerFieldsInfoFunction } from ".";
import useAuth from "@root/hooks/useAuth";

export const usePrimaryCarerForm = () => {
  const { query } = useRouter();
  // console.log(query?.fosterCarerId);
  const { user }: any = useAuth();
  const primaryCarerFieldsInfo = primaryCarerFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [postPrimaryCarerDataTrigger, postPrimaryCarerDataStatus] =
    usePostPrimaryCarerDataMutation();
  const [getAllInitialHomeVisitDataTrigger, getAllInitialHomeVisitDataStatus] =
    useLazyGetAllInitialHomeVisitDataQuery();
  const params = {
    value: "primaryCarer",
    fosterCarerId:
      query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };

  const setPrimaryCarerDefaultValue = async () => {
    const { data, isError } = await getAllInitialHomeVisitDataTrigger(
      dataParameter,
      true
    );
    console.log(getAllInitialHomeVisitDataStatus);
    if (isError) {
      return defaultValuesPrimaryCarer(data);
    }

    return defaultValuesPrimaryCarer(data);
  };

  const submitPrimaryCarerForm = async (data: any) => {
    const putParams = {
      fosterCarerId:
        query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: data };
    // console.log(data);
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
