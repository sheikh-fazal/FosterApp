import { Box, Grid, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { columns } from ".";
import React, { useRef } from "react";
import TableHeader from "@root/components/TableHeader";
import UploadDocumentsModel from "./UploadDocumentModal";

export function DocumentTable({ changeView }: any) {
  const theme: any = useTheme();
  const tableHeaderRef = useRef<any>();
  const [open, setOpen] = React.useState(false);
  const isOpenModal = () => setOpen(!open);
  const [data, setData] = React.useState([
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
  ]);

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Uploaded Documents"
          searchKey="search"
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={data}
          columns={columns(isOpenModal)}
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
        {open && <UploadDocumentsModel open={open} isOpenModal={isOpenModal} />}
      </Grid>
    </Grid>
  );
}
