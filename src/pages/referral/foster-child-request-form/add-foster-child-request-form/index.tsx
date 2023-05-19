import React, { useState } from "react";
import Layout from "@root/layouts";
import Page from '@root/components/Page';
import HomeIcon from "@mui/icons-material/Home";
import PersonalInfoForm from "@root/sections/referral/foster-child-request-form/personal-info-form/PersonalInfoForm";
import LADetailsForm from "@root/sections/referral/foster-child-request-form/la-details-form/LADetailsForm";
import UploadDocumentTable from "@root/sections/referral/foster-child-request-form/upload-documents/UploadDocumentsTable";
import CustomHorizaontalTab from "@root/components/customTabs";


const PAGE_TITLE = "Child Request Form";

// ----------------------------------------------------------------------

ApplicationForm.getLayout = function getLayout(page: any) {
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
          name:"Child List",
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
export default function ApplicationForm() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);
  const tabsArray = [
    "Personal Info",
    "LA-Details",
    "Upload Documents",
  ];
  

  
  return (
    <Page title={PAGE_TITLE}>
    <CustomHorizaontalTab  tabsArray={tabsArray}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}>
      <PersonalInfoForm   handleNextBtn={handleNextTab}/>
      <LADetailsForm   handlePreviousBtn={handlePreviousTab}/>
      <UploadDocumentTable />
    </CustomHorizaontalTab>
  </Page>
  );
}