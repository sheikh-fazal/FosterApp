import React from "react";
import { useRouter } from "next/router";
import { CyberEssentialsData, accordionData } from ".";
import CustomAccordian from "@root/components/CustomAccordian";
import PolicyVerticalTabs from "@root/components/policy-vertical-tabs/PolicyVerticalTabs";

// =====================================================================================

const CyberEssentials = () => {
  const router = useRouter();
  const path = "/policies-and-guidelines/cyber-essentials/cyber-essentials-form";
  const handleAdd = (title: string) => {
    router.push({ pathname: path, query: { title } });
  };

  return (
    <>
      <PolicyVerticalTabs
        accordianChild={true}
        tabsDataArray={CyberEssentialsData}
        handleAddTabs={() =>
          router.push({ pathname: "/policies-and-guidelines/cyber-essentials/cyber-essentials-form", query: { title: "Add New Policy" } })
        }
      >
        <CustomAccordian handleAdd={handleAdd} data={accordionData} addIcon firstAccStyle />
      </PolicyVerticalTabs>
    </>
  );
};

export default CyberEssentials;
