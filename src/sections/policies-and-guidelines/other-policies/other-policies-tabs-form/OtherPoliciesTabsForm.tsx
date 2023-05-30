import PolicyVerticalAddNew from "@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/PolicyVerticalAddNew";
import { usePolicyVerticalAddNew } from "@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/usePolicyVerticalAddNew";
import PolicyVerticalUploadDocument from "@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalUploadDocument";
import CustomHorizaontalTab from "@root/components/customTabs";
import React from "react";
import { uploadDocumentData } from ".";

const OtherPoliciesTabsForm = () => {
  const { currentTab, setCurrentTab } = usePolicyVerticalAddNew();
  return (
    <CustomHorizaontalTab
      tabsArray={["Add New Policy", "Upload document"]}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
    >
      <PolicyVerticalAddNew />
      <PolicyVerticalUploadDocument data={uploadDocumentData} />
    </CustomHorizaontalTab>
  );
};

export default OtherPoliciesTabsForm;
