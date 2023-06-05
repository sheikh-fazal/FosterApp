import PolicyVerticalTable from "@root/components/PolicyVerticalTabs/PolicyVerticalTable";
import React from "react";
import { OtherPoliciesData } from ".";

const OtherPolicies = () => {
  return (
    <>
      <PolicyVerticalTable
        data={OtherPoliciesData}
        addNewTabNavigation={"/policies-and-guidelines/other-policies/other-policies-form/"}
      />
    </>
  );
};

export default OtherPolicies;
