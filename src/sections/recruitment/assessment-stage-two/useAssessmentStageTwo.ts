import { useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { ASSESSMENTSTAGETWODATA } from ".";
import { useGetStageTwoStatusQuery } from "@root/services/recruitment/assessment-stage-two/assessmentStageTwoApi";

export const useAssessmentStageTwo = () => {
  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const theme: any = useTheme();
  const [assessmentStageTwoData, setAssessmentStageTwoData] =
    React.useState<any>(ASSESSMENTSTAGETWODATA);
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetStageTwoStatusQuery(id);
  const assessmentStageTwoApiData = data?.data;

  useEffect(() => {
    setAssessmentStageTwoData(
      ASSESSMENTSTAGETWODATA?.map((item: any) => ({
        ...item,
        status: assessmentStageTwoApiData?.[item?.textForApi],
      }))
    );
  }, [assessmentStageTwoApiData]);
  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    assessmentStageTwoData,
    setAssessmentStageTwoData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    assessmentStageTwoApiData,
  };
};
