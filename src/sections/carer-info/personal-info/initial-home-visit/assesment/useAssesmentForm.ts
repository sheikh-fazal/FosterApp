import { usePostInitialHomeAssessmentDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/assessment/assessment";
import { useGetAllInitialHomeVisitDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const useAssesmentForm = () => {
  const query = useRouter();
  console.log(query);
  const [
    postInitialHomeAssessmentDataTrigger,
    postInitialHomeAssessmentDataStatus,
  ] = usePostInitialHomeAssessmentDataMutation();

  const params = {
    value: "assessment",
    fosterCarerId: "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };
  const { data, isLoading, isError, isSuccess } =
    useGetAllInitialHomeVisitDataQuery(dataParameter);
  const submitAssesmentForm = async (data: any) => {
    const putParams = {
      fosterCarerId: "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: data };
    console.log({ data });
    try {
      const res: any = await postInitialHomeAssessmentDataTrigger(
        putDataParameter
      ).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    submitAssesmentForm,
  };
};
