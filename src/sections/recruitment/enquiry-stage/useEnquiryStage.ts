import { useTheme } from "@mui/material";
import { usePatchEnquiryStageStatusMutation } from "@root/services/recruitment/enquiry-stage/enquiryStage";
import { ENQUIRYSTAGEDATA } from "./index";
import { useGetEnquiryStageStatusQuery } from "@root/services/recruitment/enquiry-stage/enquiryStage";

// import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const useEnquiryStage:any = () => {
  const [enquiryStageData, setEnquiryStageData] =
    React.useState(ENQUIRYSTAGEDATA);
  // const router = useRouter()
  // const {_id}= router.query

  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetEnquiryStageStatusQuery(id);
  const enquiryStageApiData = data?.data;

  useEffect(() => {
    setEnquiryStageData(
      ENQUIRYSTAGEDATA.map((item) => ({
        ...item,
        status: enquiryStageApiData?.[item.textForApi],
      }))
    );
  }, [data]);
  
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
    enquiryStageData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    // isUpdating:false,
    // hasUpdated:false,
    setEnquiryStageData,
  };
};
