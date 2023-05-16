import TableHeader from "@root/components/TableHeader";
import React from "react";
import { DocumentTable } from "./DocumentTable";
import { useGetInitialInquiryDocumentsDataQuery } from "@root/services/carer-info/personal-info/initial-enquiry/initial-inquiry-all";

const DocumentsInitialEnquiry = ({ readOnly }: { readOnly: boolean }) => {
  const changeHandler = (i: any) => {
    console.log(i);
  };
  return (
    <div>
      <TableHeader title="Uploaded Documents" onChanged={changeHandler} />
      <DocumentTable readOnly={readOnly} />
    </div>
  );
};

export default DocumentsInitialEnquiry;
