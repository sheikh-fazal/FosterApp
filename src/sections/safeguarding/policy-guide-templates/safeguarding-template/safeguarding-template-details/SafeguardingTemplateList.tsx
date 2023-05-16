import React, { useRef, useState } from "react";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import CCETemplateTable from "./SafeguardingTemplateTable";

const SafeguardingTemplatesList = () => {
  const navgiate = useRouter();

  let tableHeaderRefTwo = useRef<any>();
 
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Safeguarding Templates"
        showAddBtn
        onAdd={() => navgiate.push('/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/add-template')}
      />
      <CCETemplateTable />
    </>
  );
}
export default SafeguardingTemplatesList