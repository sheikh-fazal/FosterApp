import Page from "@root/components/Page";

import Layout from "@root/layouts";

import {
  InterviewRecordAndAnalysisComponent,
  defaultValues,
} from "@root/sections/carer-info/personal-info/interview-record-and-analysis";

import React from "react";
import Error from "@root/components/Error";

// ----------------------------------------------------------------------

import HomeIcon from "@mui/icons-material/Home";

import { Box, Card } from "@mui/material";

import { useGetInterviewRecordAnalysisQuery } from "@root/services/carer-info/personal-info/interview-record-analysis/InterviewRecordAnalysis";

import IsFetching from "@root/components/loaders/IsFetching";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,

    name: "Carer Info",

    href: "/dashboard",
  },

  {
    name: "Interview Record and Analysis",

    href: "",
  },
];

const PAGE_TITLE = "Interview Record and Analysis";

InterviewRecordAndAnalysis.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function InterviewRecordAndAnalysis() {
  let role = "foster-carer";
  const {
    data: fetchData,
    isLoading,
    isError,
  }: any = useGetInterviewRecordAnalysisQuery();

  if (role == "foster-carer" && isError) {
    return <Error />;
  }

  return (
    <Page title={PAGE_TITLE}>
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <Card sx={{ p: 4 }}>
          <InterviewRecordAndAnalysisComponent
            data={{
              ...defaultValues,
              ...(fetchData?.data && {
                ...fetchData?.data,
                interviewDate: new Date(fetchData?.data.interviewDate),
                signatureDate: new Date(fetchData?.data.signatureDate),
              }),
            }}
            disabled={role == "foster-carer" ? true : false}
            role={role}
          />
        </Card>
      )}
    </Page>
  );
}
