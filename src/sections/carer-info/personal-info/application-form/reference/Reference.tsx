import React, { useRef, useState } from "react";
import ReferenceViewForm from "./ReferenceViewForm";
import { ReferenceTable } from "./Table";
import TableHeader from "@root/components/TableHeader";

export default function Reference() {
  let [viewData, setViewData] = useState(false);
  const tableHeaderRef = useRef<any>();

  const changeView = (val: boolean) => {
    setViewData(val);
  };
  return (
    <>
      {viewData ? (
        <ReferenceViewForm changeView={changeView} />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Ex-References(s) Details"
            searchKey="search"
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <ReferenceTable changeView={changeView} />
        </>
      )}
    </>
  );
}
