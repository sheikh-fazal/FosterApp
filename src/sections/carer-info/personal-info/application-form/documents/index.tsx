import React, { useRef } from "react";
import { DocumentTable } from "./Table";
import TableHeader from "@root/components/TableHeader";

export default function Documents() {
  const tableHeaderRef = useRef<any>();

  return (
    <>
      <TableHeader
        ref={tableHeaderRef}
        title="Uploaded Documents"
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <DocumentTable />
    </>
  );
}
