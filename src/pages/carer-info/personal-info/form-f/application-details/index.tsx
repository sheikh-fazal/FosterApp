import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { ApplicationDetailsForm } from "@root/sections/carer-info/personal-info/form-f/application-details";
import {
  usePutApplicationDetails1Mutation,
  usePutApplicationDetails2Mutation,
} from "@root/services/carer-info/personal-info/form-f/applicationDetailsApi";
import { enqueueSnackbar } from "notistack";

// Constants
const PAGE_TITLE = "Form F";

ApplicationDetails.getLayout = function getLayout(page: any) {
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
          name: "Application Details",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ApplicationDetails() {
  //----------------------API Calls-----------------------------
  const [
    putApplicant1Data,
    { isLoading: isLoading1, isError: isError1, isSuccess: isSuccess1 },
  ] = usePutApplicationDetails1Mutation();
  const [
    putApplicant2Data,
    { isLoading: isLoading2, isError: isError2, isSuccess: isSuccess2 },
  ] = usePutApplicationDetails2Mutation();
  //==============================//==================================//

  //----------------------Submit Functions-----------------------------
  const submitDataHandler1 = async (formData: any) => {
    // putApplicant1Data(formData);
    try {
      const res: any = await putApplicant1Data(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Application Details Submitted!`, {
        variant: "success",
      });
      // router.push("/carer-info/personal-info/carer-family-support-network");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  const submitDataHandler2 = async (formData: any) => {
    try {
      const res: any = await putApplicant2Data(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Application Details Submitted!`, {
        variant: "success",
      });
      // router.push("/carer-info/personal-info/carer-family-support-network");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  //==============================//==================================//
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={["Applicant 1", "Applicant 2"]}>
        <ApplicationDetailsForm
          title="Applicant 1"
          formData={submitDataHandler1}
          isLoading={isLoading1}
          isError={isError1}
          isSuccess={isSuccess1}
        />
        <ApplicationDetailsForm
          title="Applicant 2"
          formData={submitDataHandler2}
          isLoading={isLoading2}
          isError={isError2}
          isSuccess={isSuccess2}
        />
      </HorizaontalTabs>
    </Page>
  );
}
