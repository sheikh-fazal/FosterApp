import HorizaontalTabs from "@root/components/HorizaontalTabs";
import React from "react";
import SuperVisoryCarerSectionA from "./carer-section-A/CarerSectionA";
import SuperVisoryCarerSectionB from "./carer-section-B/CarerSectionB";
import SupervisoryUploadDocuments from "./upload-documents/UploadDoucment";
import CustomHorizaontalTab from "@root/components/customTabs";
import { useSupervisoryHomeVisit } from "./useSupervisoryHomeVisit";

const TabsSection = () => {
  const { handlePreviousTab, currentTab, handleTabChange } =
    useSupervisoryHomeVisit();
  return (
    <CustomHorizaontalTab
      currentTab={currentTab}
      setCurrentTab={handleTabChange}
      tabsArray={["Carer Section A", "Carer Section B", "Upload Documents"]}
    >
      <SuperVisoryCarerSectionA disabled={true} />
      <SuperVisoryCarerSectionB
        disabled={true}
        handleBack={handlePreviousTab}
      />
      <SupervisoryUploadDocuments />
    </CustomHorizaontalTab>
  );
};

export default TabsSection;
