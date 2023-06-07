import React, { useState } from "react";
import Layout from "@root/layouts";
import Page from '@root/components/Page';
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import CustomHorizaontalTab from "@root/components/customTabs";
import PersonalInfoForm from "@root/sections/referral/foster-child-request-form/add-foster-child-request-form/personal-info-form/PersonalInfoForm";
import LADetailsForm from "@root/sections/referral/foster-child-request-form/add-foster-child-request-form/la-details-form/LADetailsForm";
import UploadDocumentTable from "@root/sections/referral/foster-child-request-form/add-foster-child-request-form/upload-documents/UploadDocumentsTable";
import AddFosterChildRequestForm from "@root/sections/referral/foster-child-request-form/add-foster-child-request-form/AddFosterChildRequestForm";


const PAGE_TITLE = "Child Request Form";

export const tabsArray = [
  "Personal Info",
  "LA-Details",
  "Upload Documents",
];

// ----------------------------------------------------------------------

FosterChildEequestForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referral",
          href: "/referral",
        },
        {
          name: "Carer list",
        },
      ]}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function FosterChildEequestForm() {
  // const { query } = useRouter();
  // let disabled = query.action === "view" ? true : false;
  return (
    <Page title={PAGE_TITLE}>
      <AddFosterChildRequestForm />
      {/* <CustomHorizaontalTab tabsArray={tabsArray}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}>
        <PersonalInfoForm disabled={disabled} handleNextBtn={handleNextTab} />
        <LADetailsForm disabled={disabled} handlePreviousBtn={handlePreviousTab} />
        <UploadDocumentTable disabled={disabled} />
      </CustomHorizaontalTab> */}
    </Page>
  );
}