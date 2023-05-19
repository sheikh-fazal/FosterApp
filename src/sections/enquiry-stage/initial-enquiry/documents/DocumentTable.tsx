/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import ActionModal from "./ActionModal";
import { useGetInitialInquiryDocumentsDataQuery } from "@root/services/carer-info/personal-info/initial-enquiry/initial-inquiry-all";

// ----------------------------------------------------------------------
export const DocumentTable = (props: any) => {
  const { readOnly } = props;

  const { data, isLoading, isFetching, isError, isSuccess }: any =
    useGetInitialInquiryDocumentsDataQuery({});
  const tableData = data?.data?.documents;
  // ----------------------------------------------------------------------

  const columns = [
    // {
    //   id: "select",
    //   header: ({ table, row }: any) => {
    //     console.log(table);
    //     return (
    //       <Box>
    //         <Checkbox
    //           indeterminate={table.getIsSomeRowsSelected()}
    //           checked={table.getIsAllRowsSelected()}
    //           onChange={table.getToggleAllRowsSelectedHandler()}
    //         />
    //       </Box>
    //     );
    //   },
    //   cell: ({ row, table }: any) => (
    //     <Box>
    //       <Checkbox
    //         disabled={row?.original?.Assigned}
    //         checked={row?.original?.Assigned ? false : row.getIsSelected()}
    //         onChange={row.getToggleSelectedHandler()}
    //       />
    //     </Box>
    //   ),
    // },
    {
      accessorFn: (row: any) => row.document,
      id: "document",
      cell: (info: any) =>
        info.getValue()?.length > 20
          ? ". . ." + info.getValue()?.slice(-15)
          : info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "Document Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
    },
    {
      accessorFn: (row: any) => row.personName,
      id: "personName",
      cell: (info: any) => info.getValue(),
      header: "Person Uploaded",
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => {
        let j = [];
        for (let i = 0; i < info.getValue()?.length; i++) {
          j.push("*");
        }
        return j;
      },
      header: "Password",
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <ActionModal content={info} readOnly={readOnly} />
          <TableAction
            type="download"
            onClicked={() => alert("Download")}
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Grid container>
      <CustomTable
        data={tableData ?? [{}]}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        showSerialNo
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </Grid>
  );
};
