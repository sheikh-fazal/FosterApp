import { useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { ASSESSMENTSTAGEONEDATA } from ".";
import { useGetStageOneStatusQuery } from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";
import { useRouter } from "next/router";

export const useAssessmentStageOne = () => {
  const router = useRouter();
  const _id  = Object.keys(router.query)[0];
  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const ASSESSMENTSTAGEONEDATAFUNCTION = ASSESSMENTSTAGEONEDATA(_id);
  const theme: any = useTheme();
  const [assessmentStageOneData, setAssessmentStageOneData] = React.useState(
    ASSESSMENTSTAGEONEDATAFUNCTION
  );

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetStageOneStatusQuery(id);
  const assessmentStageOneApiData = data?.data;

  useEffect(() => {
    setAssessmentStageOneData(
      ASSESSMENTSTAGEONEDATAFUNCTION?.map((item: any) => ({
        ...item,
        status: assessmentStageOneApiData?.[item?.textForApi],
      }))
    );
  }, [assessmentStageOneApiData]);

  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    formDialogId,
    setFormDialogId,
    setOpenIdForInfo,
    assessmentStageOneData,
    setAssessmentStageOneData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};
