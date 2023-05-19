import React, { useRef, useState } from "react";
import CarerAddressHistoryForm from "./CarerAddressHistoryForms";
import { CarerAddressHistoryTable } from "./CarerAddressTable";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";

export default function CarerAddressHistory() {
  let [viewData, setViewData] = useState(false);
  let [formType, setFormType] = useState("");
  let router = useRouter();
  let tableHeaderRefTwo = useRef<any>();
  const changeView = (val: boolean, type: string) => {
    setViewData(val);
    setFormType(type);
  };
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Carer Address History"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push(
            "/carer-info/personal-info/carer-address-history/add-address-history"
          );
        }}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CarerAddressHistoryTable />
    </>
  );
}
