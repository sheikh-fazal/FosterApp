import React, { useRef, useState } from "react";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import AgencySafeguardingTable from "./AgencySafeguardingTable";

const AgencySafeguardingPolicyList = () => {
  const navgiate = useRouter();

  let tableHeaderRefTwo = useRef<any>();
 
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        hideSearch={true}
        title="Agency Safeguarding Policy"
        showAddBtn
        onAdd={() => navgiate.push('/safeguarding/policy-guide-templates/agency-policy/add-safeguarding-policy')}
      />
      <AgencySafeguardingTable />
    </>
  );
}
export default AgencySafeguardingPolicyList