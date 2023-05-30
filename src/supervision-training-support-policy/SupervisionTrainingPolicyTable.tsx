import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box, Checkbox, Grid } from "@mui/material";
import TableAction from "@root/components/TableAction";

import { SupervisionTrainingPolicyData } from ".";
import { useSupervisionTrainingPolicy } from "./useSupervisionTrainingPolicyTable";

const SupervisionTrainingPolicy = () => {
  const { router, tableHeaderRef, theme } = useSupervisionTrainingPolicy();

  const SupervisionTrainingPolicyColumns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            <Checkbox
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.srNo,
      id: "sr",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.title,
      id: "title",
      cell: (info: any) => info.getValue(),
      header: () => <span>Title</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateUploaded,
      id: "dateUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.author,
      id: "author",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.versions,
      id: "versions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Versions</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TableAction
            type="view"
            onClicked={() => {
              router.push({
                pathname: `/supervision-training-support-policy/${info.row.original.id}`,
                query: { action: "view" },
              });
            }}
            size="small"
          />

          <TableAction
            type="print"
            onClicked={() => window.print()}
            size="small"
          />
          <TableAction type="download" onClicked={""} size="small" />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Supervision Training Support Policy"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push({
              pathname: `/supervision-training-support-policy/`,
              query: { action: "add" },
            });
          }}
      
          onChanged={(data: any) => {
            console.log(": ", data);
          }}
        />
        <CustomTable
          data={SupervisionTrainingPolicyData}
          columns={SupervisionTrainingPolicyColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
};

export default SupervisionTrainingPolicy;
