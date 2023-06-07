import { useTheme } from "@mui/material";
import { usePatchEnquiryStageStatusMutation } from "@root/services/recruitment/enquiry-stage/enquiryStage";
import { ENQUIRYSTAGEDATA } from "./index";
// import { useGetEnquiryStageStatusQuery } from "@root/services/recruitment/enquiry-stage/enquiryStage";
// import { useRouter } from "next/router";
import React from "react";

export const useEnquiryStage = () => {
  const [enquiryStageData] = React.useState(ENQUIRYSTAGEDATA)
  // const router = useRouter()
  // const {_id}= router.query
  // console.log(_id);

  // // const _id = "123";
  // const { data, isLoading, isError, isFetching, isSuccess } = useGetEnquiryStageStatusQuery({ id: _id });

  // console.log(data, isLoading, isError, isFetching, isSuccess);
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
    enquiryStageData
    // isLoading,
    // isError,
    // isFetching,
    // isSuccess,
  };
};
