import React, { useState } from "react";
import Layout from "@root/layouts";
import Page from '@root/components/Page';
import HomeIcon from "@mui/icons-material/Home";
import CustomHorizaontalTab from "@root/components/customTabs";
import FosterHandbookForm from "@root/sections/foster-carer-handbook/add-foster-carer-handbook/foster-carer-handbook-form/FosterHandbookForm";


const PAGE_TITLE = "Policies and Guidelines";

// ----------------------------------------------------------------------

AddFosterCarerHandbook.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/referral",
        },
        {
          name:"Handbooks",
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
export default function AddFosterCarerHandbook() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);
  const tabsArray = [
    "Foster Carer Handbook",
    "Upload Documents",
  ];
  

  
  return (
    <Page title={PAGE_TITLE}>
    <CustomHorizaontalTab  tabsArray={tabsArray}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}>
      {/* <PersonalInfoForm   handleNextBtn={handleNextTab}/>
      <LADetailsForm   handlePreviousBtn={handlePreviousTab}/>
      <UploadDocumentTable /> */}
      <FosterHandbookForm/>
    </CustomHorizaontalTab>
  </Page>
  );
}