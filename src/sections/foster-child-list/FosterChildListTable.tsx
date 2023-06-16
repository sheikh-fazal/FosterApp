import { Box, Grid, Paper, Button } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { dummy } from ".";
import Image from "next/image";
import router from "next/router";

const activepath = "/foster-child";
const FosterChildListTable = () => {
  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => row.img,
      id: "img",
      cell: (info: any) => (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Image
            src={info.row.original.img}
            height={40}
            width={40}
            alt="icon"
          />
        </Box>
      ),
      header: () => <span>img</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childName,
      id: "ChildName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterCarar,
      id: "fosterCarar",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Foster Carar</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Area_locality,
      id: "Area_locality",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Area/Locality</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.gender,
      id: "gender",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Gender</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.areaOffice,
      id: "areaOffice",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Area Office</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.details,
      id: "details",
      cell: (info: any) => (
        <Box>
          <Button
            onClick={() => {
              router.push({
                pathname: activepath,
                query: { fosterChildId: "63e5eefe677b0d581e40682a" },
              });
            }}
            variant="contained"
            color="primary"
          >
            view Details
          </Button>
        </Box>
      ),
      header: () => <span>details</span>,
      isSortable: false,
    },
  ];
  const SELECT_FILTERS = [
    {
      key: "Select child",
      label: "Select child",
      options: [{ label: "test", value: "test-value" }],
    },
  ];

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Foster Child List"
                  searchKey="search"
                  showSelectFilters
                  selectFilters={SELECT_FILTERS}
                  onChanged={(e: any) => {}}
                />
              </Box>
              <CustomTable
                data={dummy ?? []}
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

export default FosterChildListTable;
