import React, { useState } from "react";
import { useRouter } from "next/router";
import { CyberEssentialsData, accordionData } from ".";
import PolicyVerticalTabs from "@root/components/PolicyVerticalTabs/PolicyVerticalTabs";
import CustomAccordian from "@root/components/CustomAccordian";

// =====================================================================================

const CyberEssentials = () => {
  const router = useRouter();
  const path = "/policies-and-guidelines/cyber-essentials/add-form";
  const handleAdd = (title: string) => {
    router.push({ pathname: path, query: { title } });
  };

  return (
    <>
      <PolicyVerticalTabs
        accordianChild={true}
        tabsDataArray={CyberEssentialsData}
        handleAddTabs={() => router.push(`/policies-and-guidelines/cyber-essentials/add-form`)}
      >
        <CustomAccordian handleAdd={handleAdd} data={accordionData} addIcon firstAccStyle />
      </PolicyVerticalTabs>
    </>
  );
};

export default CyberEssentials;
