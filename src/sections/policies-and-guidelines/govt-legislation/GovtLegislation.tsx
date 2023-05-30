import React from "react";
import PolicyVerticalTable from "@root/components/PolicyVerticalTabs/PolicyVerticalTable";
import { GovtLegislationData } from ".";

const GovtLegislations = () => {
  return (
    <>
      <PolicyVerticalTable
        data={GovtLegislationData}
        addNewTabNavigation={"/policies-and-guidelines/govt-legislations/add"}
      />
    </>
  );
};

export default GovtLegislations;
