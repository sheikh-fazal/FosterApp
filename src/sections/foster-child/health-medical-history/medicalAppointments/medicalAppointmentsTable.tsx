import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { dummy } from ".";

const activepath =
  "/foster-child/health-medical-history/medical-appointments/actions";

const MedicalAppointmentsTable = () => {
  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => row.dateOfAppointmentVisit,
      id: "dateOfAppointmentVisit",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Date Of Immunisation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.doctorName,
      id: "doctorName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Immunisation type</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt />

            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: { action: "edit", id: "" },
                });
              }}
            />
            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: { action: "view", id: "" },
                });
              }}
            />
          </Box>
        );
      },
      header: () => <span>Actions</span>,
      isSortable: false,
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
                  title="Child Immunisation Info"
                  searchKey="search"
                  showAddBtn
                  onChanged={(e: any) => {}}
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", id: "" },
                    });
                  }}
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

export default MedicalAppointmentsTable;
