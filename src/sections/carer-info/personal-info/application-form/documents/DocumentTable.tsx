import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { columns } from ".";
import React, { useRef } from "react";
import TableHeader from "@root/components/TableHeader";
import UploadDocumentsModel from "./UploadDocumentModal";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";

const data = [
  {
    documentName: "Doc Name",
    documentType: "Pdf",
    documentDate: "19/05/2021",
    personUploaded: "Name Xame",
    password: "123bc",
  },
  {
    documentName: "Doc Name",
    documentType: "Document Type",
    documentDate: "19-05-2021",
    personUploaded: "Name Xame",
    password: "123bc",
  },
];

export function DocumentTable(props: any) {
  const { role } = props;
  const { theme, tableHeaderRef, changeView, open, setOpen, view } =
    useUploadDocumentsTable();

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Uploaded Documents"
          showAddBtn={true}
          onAdd={() => {
            setOpen(true);
            changeView("add");
          }}
          searchKey="search"
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={data}
          columns={columns(changeView, setOpen)}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          showSerialNo
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
        {open && (
          <UploadDocumentsModel
            view={view}
            open={open}
            setOpen={setOpen}
            changeView={changeView}
          />
        )}
      </Grid>
    </Grid>
  );
}
