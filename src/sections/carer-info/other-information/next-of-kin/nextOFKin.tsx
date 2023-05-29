import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import React from "react";
import { DummyData } from ".";
import router from "next/router";

const NextOFKin = () => {
  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => row.personName,
      id: "personName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Person Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.contactNo,
      id: "contactNo",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Contact No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relationship,
      id: "relationship",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Relationship</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => (
        <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>
      ),
      header: () => <span>Relationship</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname:
                    "/carer-info/other-information/next-of-kin/action",
                  query: { action: "edit", id: "" },
                });
              }}
            />

            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname:
                    "/carer-info/other-information/next-of-kin/action",
                  query: { action: "view", id:""  },
                });
              }}
            />
          </Box>
        );
      },
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Box sx={{ p: 2 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Next of Kin"
                  searchKey="search"
                  onChanged={(e: any) => {}}
                />
              </Box>
              <CustomTable
                data={DummyData}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                isPagination={true}
                showSerialNo={true}
                // totalPages={incidentlist?.data?.meta?.pages ?? 0}
                // currentPage={incidentlist?.data?.meta?.page ?? 1}
                // onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NextOFKin;
