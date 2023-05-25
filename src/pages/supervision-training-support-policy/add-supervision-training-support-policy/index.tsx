import React, { useState } from "react";
import Layout from "@root/layouts";
import Page from '@root/components/Page';
import HomeIcon from "@mui/icons-material/Home";
import CustomHorizaontalTab from "@root/components/customTabs";
import SuperversionTrainingSupportPolicyForm from "@root/sections/supervision-training-support-policy/add-supervision-training-support-policy/supervision-training-support-policy-form/SuperversionTrainingSupportPolicyForm";
import UploadDocumentTable from "@root/sections/supervision-training-support-policy/add-supervision-training-support-policy/upload-document/UploadDocumentTable";


const PAGE_TITLE = "Organisational Policies";

// ----------------------------------------------------------------------

SupervisionTrainingSupportPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Supervision Training Support Policy",
          href: "/supervision-training-support-policy",
        },
        {
          name:"Supervision Training Support Policy",
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
export default function SupervisionTrainingSupportPolicy() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);
  const tabsArray = [
    "Supervision Training Support Policy",
    "Upload document",
  ];
  

  
  return (
    <Page title={PAGE_TITLE}>
    <CustomHorizaontalTab  tabsArray={tabsArray}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}>
      <SuperversionTrainingSupportPolicyForm   handleNextBtn={handleNextTab} /> 
      {/* <LADetailsForm   handlePreviousBtn={handlePreviousTab}/> */}
      <UploadDocumentTable />
    </CustomHorizaontalTab>
  </Page>
  );
}