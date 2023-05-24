import { Box, Checkbox } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";
import TableAction from "@root/components/TableAction";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetTrainingProfileAllDataQuery } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { log } from "console";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const useTrainingVerificationForm = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetTrainingProfileAllDataQuery({ params });

  const trainingPRofileData = data?.data?.trainingProfile;
  const meta = data?.data?.meta;
  
  console.log(data, "training profile");

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        // console.log(table.getSelectedRowModel().flatRows);
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
      accessorFn: (row: any) => row,
      id: "srNo",
      cell: (info: any) => Number(info?.row?.id) + 1,
      header: "Sr. No",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.courseAttended,
      id: "courseAttended",
      cell: (info: any) => info.getValue(),
      header: () => <span>Courses Attended</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Attended Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/recruitment/assessment-stage-one/training-verification-form/edit-training-profile?${info.getValue()}`
              )
            }
          />
          <TableAction
              type="delete"
              onClicked={() => setCancelDelete(true)}
              size="small"
            />
          <DeleteModel
            open={cancelDelete}
            onDeleteClick={handleDelete}
            handleClose={() => setCancelDelete(!cancelDelete)}
          />
          <TableAction
            type="view"
            onClicked={() => console.log(info.getValue())}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return {
    columns,
    trainingPRofileData,
    router,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    headerChangeHandler,
    tableHeaderRef,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  };
};

export default useTrainingVerificationForm;
