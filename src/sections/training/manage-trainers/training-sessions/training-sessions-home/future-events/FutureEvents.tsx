import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { useTheme } from "@mui/material";
import { useFutureEvents } from "./useFutureEvents";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
const FutureEvents = () => {
  const { data, openDelete, setOpenDelete } = useFutureEvents();
  const theme = useTheme();
  const columns = [
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
      accessorFn: (row: any) => row.date,
      id: "Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingTopic,
      id: "Training Topic",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Topic</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.manager,
      id: "Manager",
      cell: (info: any) => info.getValue(),
      header: () => <span>Manager</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.schedule,
      id: "Schedule",
      cell: (info: any) => info.getValue(),
      header: () => <span>Schedule</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.presenter,
      id: "Presenter",
      cell: (info: any) => info.getValue(),
      header: () => <span>Presenter</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.attendees,
      id: "Attendees",
      cell: (info: any) => info.getValue(),
      header: () => <span>Attendees</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.budget,
      id: "Budget",
      cell: (info: any) => info.getValue(),
      header: () => <span>Budget</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approver,
      id: "Approver(role)",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approver(role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approved,
      id: "Approved Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingType,
      id: "Training Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingEvaluationForm,
      id: "Training Evaluation Form",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Evaluation Form</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.courseEvaluationForm,
      id: "Course Evaluation Form",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Evaluation Form</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="edit" onClicked={() => alert("Reload")} />
          <TableAction type="delete" onClicked={() => setOpenDelete(true)} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <div style={{width:'72vw'}}>
    <CustomTable
      data={data}
      columns={columns}
      isLoading={false}
      isFetching={false}
      isError={false}
      isPagination={false}
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
    <DeleteModel
      open={openDelete}
      handleClose={() => setOpenDelete(false)}
      onDeleteClick={() => setOpenDelete(false)}
    />
  </div>
  );
};

export default FutureEvents;
