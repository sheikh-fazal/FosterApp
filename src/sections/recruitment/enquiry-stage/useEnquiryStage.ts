import { useTheme } from "@mui/material";
import { usePatchEnquiryStageStatusMutation } from "@root/services/recruitment/enquiry-stage/enquiryStage";
import { ENQUIRYSTAGEDATA } from "./index";
import { useGetEnquiryStageStatusQuery } from "@root/services/recruitment/enquiry-stage/enquiryStage";

// import { useRouter } from "next/router";
import React from "react";

export const useEnquiryStage = () => {
  const [enquiryStageData] = React.useState(ENQUIRYSTAGEDATA);
  // const router = useRouter()
  // const {_id}= router.query

  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetEnquiryStageStatusQuery(id);
    const enquiryStageDatas = data?.data
  // const statusObj = {
  //   initialContent:
  // };
  // console.log(data?.data);
  const [patchData] = usePatchEnquiryStageStatusMutation({});
  // patchData({ userId: 123, point: "initialContact", status: "Passed" });
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  const [
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
  ] = React.useState(false);

  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
    patchData,
    enquiryStageData,
    enquiryStageDatas,
    // isLoading,
    // isError,
    // isFetching,
    // isSuccess,
  };
};
