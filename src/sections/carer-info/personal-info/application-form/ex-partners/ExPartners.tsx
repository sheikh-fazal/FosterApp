import React, { useRef, useState } from "react";
import ExPartnersViewForm from "./ExPartnersViewForm";
import { ExPartnersTable } from "./table";
import TableHeader from "@root/components/TableHeader";

export default function ExPartnersView() {
  let [viewData, setViewData] = useState(false);
  const tableHeaderRef = useRef<any>();

  const changeView = (val: boolean) => {
    setViewData(val);
  };
  return (
    <>
      {viewData ? (
        <ExPartnersViewForm changeView={changeView} />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Ex-Partners(s) Details"
            searchKey="search"
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <ExPartnersTable changeView={changeView} />
        </>
      )}
    </>
  );
}
