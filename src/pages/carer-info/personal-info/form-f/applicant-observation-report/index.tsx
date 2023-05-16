import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { ApplicantObservationOnReportForm } from "@root/sections/carer-info/personal-info/form-f/applicant-observation-on-report";
import { usePutApplicantObservationMutation } from "@root/services/carer-info/personal-info/form-f/applicantObservationReportApi";
import { enqueueSnackbar } from "notistack";

// Constants
const PAGE_TILE = "Form F";

ApplicantObservationReport.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Form F List",
          href: "/carer-info/personal-info/form-f",
        },
        {
          name: "Applicant Observation Report",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ApplicantObservationReport() {
  const [putData, { isSuccess, isError, isLoading }] =
    usePutApplicantObservationMutation();

  const receiveDataHandler = async (formData: any) => {
    try {
      const res: any = await putData(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Application Details Submitted!`, {
        variant: "success",
      });
      // router.push("/carer-info/personal-info/carer-family-support-network");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <Page title={PAGE_TILE}>
      {" "}
      <ApplicantObservationOnReportForm
        formData={receiveDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />{" "}
    </Page>
  );
}
