import React, { useRef, useState } from "react";
import EmployersViewForm from "./EmployersViewForm";
import { EmployerTable } from "./table";
import TableHeader from "@root/components/TableHeader";

export default function Employers() {
  let [viewData, setViewData] = useState(false);
  const tableHeaderRef = useRef<any>();

  const changeView = (val: boolean) => {
    setViewData(val);
  };
  return (
    <>
      {viewData ? (
        <EmployersViewForm changeView={changeView} />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Employer(s) Details"
            searchKey="search"
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <EmployerTable changeView={changeView} />
        </>
      )}
    </>
  );

  //  <div>Reference</div>
}
