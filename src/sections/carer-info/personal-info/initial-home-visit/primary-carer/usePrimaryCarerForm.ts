import {
  useGetAllInitialHomeVisitDataQuery,
  useLazyGetAllInitialHomeVisitDataQuery,
} from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { usePostPrimaryCarerDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/primary/primaryCarer";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { defaultValuesPrimaryCarer } from ".";

export const usePrimaryCarerForm = () => {
  const query = useRouter();
  console.log(query);
  const [postPrimaryCarerDataTrigger, postPrimaryCarerDataStatus] =
    usePostPrimaryCarerDataMutation();
  const [getAllInitialHomeVisitDataTrigger, getAllInitialHomeVisitDataStatus] =
    useLazyGetAllInitialHomeVisitDataQuery();
  const params = {
    value: "primaryCarer",
    fosterCarerId: "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };
  const dataParameters = { params: "ji" };
  // const { data, isLoading, isError, isSuccess } =
  //   useGetAllInitialHomeVisitDataQuery(dataParameter);

  const setPrimaryCarerDefaultValue = async () => {
    const { data, isError, error } = await getAllInitialHomeVisitDataTrigger(
      dataParameter
    );
    console.log(data);
    // if (primaryCarerDefaultValues?.isSuccess) {
    //   const assignDefaultValuesPrimaryCarer = defaultValuesPrimaryCarer(
    //     primaryCarerDefaultValues?.data
    //   );
    //   console.log(assignDefaultValuesPrimaryCarer);
    //   const assss = {
    //     firstName: "Ali",
    //   };
    //   return assss;
    // }
    if (isError) {
      return defaultValuesPrimaryCarer;
    }
    console.log(data);
    return defaultValuesPrimaryCarer(data);
    // return data;
  };

  const submitPrimaryCarerForm = async (data: any) => {
    const putParams = {
      fosterCarerId: "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: data };
    console.log(data);
    try {
      const res: any = await postPrimaryCarerDataTrigger(
        putDataParameter
      ).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitPrimaryCarerForm,
    setPrimaryCarerDefaultValue,
    getAllInitialHomeVisitDataStatus,
  };
};
