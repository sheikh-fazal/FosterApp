import React, { useRef } from "react";
// components
import TableHeader from "@root/components/TableHeader";
import { FamilyTable } from "./Table";

// ///////////////////

export default function Family() {
  const tableHeaderRef = useRef<any>();

  return (
    <>
      <TableHeader
        ref={tableHeaderRef}
        title="Existing Family Member(s) Details"
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <FamilyTable />
    </>
  );
}
