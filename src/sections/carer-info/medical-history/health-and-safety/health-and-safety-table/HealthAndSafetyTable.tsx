import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";
import { useHealthAndSafetyTable } from "./useHealthAndSafetyTable";

export const HealthAndSafetyTable = () => {
  const {
    // open,
    // setOpen,
    // handleOpen,
    // handleClose,
    deleteList,
    deleteModal,
    setDeleteModal,
    theme,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    columnsFunction,
    isSuccess,
  } = useHealthAndSafetyTable();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // const columns = [
  //   // {
  //   //   id: "select",
  //   //   header: ({ table, row }: any) => {
  //   //     console.log(table.getSelectedRowModel().flatRows);
  //   //     return (
  //   //       <Box>
  //   //         <Checkbox
  //   //           checked={table.getIsAllRowsSelected()}
  //   //           onChange={table.getToggleAllRowsSelectedHandler()}
  //   //         />
  //   //       </Box>
  //   //     );
  //   //   },
  //   //   cell: ({ row, table }: any) => (
  //   //     <Box>
  //   //       <Checkbox
  //   //         disabled={row?.original?.Assigned}
  //   //         checked={row?.original?.Assigned ? false : row.getIsSelected()}
  //   //         onChange={row.getToggleSelectedHandler()}
  //   //       />
  //   //     </Box>
  //   //   ),
  //   // },
  //   // {
  //   //   accessorFn: (row: any) => row?.srNo,
  //   //   id: "srNo",
  //   //   cell: (info: any) => info.getValue(),
  //   //   header: () => <span>Sr.No</span>,
  //   //   isSortable: true,
  //   // },
  //   {
  //     accessorFn: (row: any) => row?.inspectionDate,

  //     id: "inspectionDate",
  //     cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
  //     header: "Inspection Date",
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row?.nestInspectionDate,
  //     id: "nestInspectionDate",
  //     cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
  //     header: "Next Inspection Date",
  //     isSortable: true,
  //   },
  //   {
  //     accessorFn: (row: any) => row?.status,
  //     id: "status",
  //     cell: (info: any) => info.getValue(),
  //     header: "Status",
  //     isSortable: true,
  //   },
  //   {
  //     id: "actions",
  //     cell: (info: any) => (
  //       <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
  //         <TableAction type="edit" onClicked={() => alert("Edit")} />
  //         <TableAction type="delete" onClicked={() => deleteList(info)} />

  //         <TableAction type="view" onClicked={() => alert("View")} />
  //       </Box>
  //     ),
  //     header: () => <span>actions</span>,
  //     isSortable: false,
  //   },
  // ];

  return (
    <>
      <Card sx={{ p: 1 }}>
        <DeleteModel
          open={deleteModal}
          handleClose={() => setDeleteModal(false)}
          // onDeleteClick={deleteTrainingProfile}
        />
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          onAdd={() =>
            router.push(
              "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs"
            )
          }
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={healthAndSafetyApiData}
          columns={columnsFunction}
          showSerialNo
          isError={isError}
          isLoading={isLoading}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isPagination={false}
        />
      </Card>
    </>
  );
};
