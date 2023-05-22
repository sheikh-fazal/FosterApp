import { Box, Card, Checkbox, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const HealthAndSafetyTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  const router = useRouter();
  const tableHeaderRef = useRef<any>();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
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
      accessorFn: (row: any) => row.createdAt,
      id: "createdAt",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Inspection Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.nextInspectionDate,
      id: "nextInspectionDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Next Inspection Date",
      isSortable: true,
    },
    // {
    //   accessorFn: (row: any) => row.nextInspectionDate,
    //   id: "nextInspectionDate",
    //   cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    //   header: "Name Of Pet",
    //   isSortable: true,
    // },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      // cell: (info: any) => (info.getValue() ? "Pending" : "Completed"),
      header: "Status",
      isSortable: true,
    },
    {
      // accessorFn: (row: any) => row?.id,
      // id: "actions",
      // cell: (info: any) => (
      //   <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      //     <TableAction
      //       type="edit"
      //       onClicked={() =>
      //         router.push(
      //           `/carer-info/medical-history/health-and-safety?${info.getValue()}`
      //         )
      //       }
      //     />
      //     <TableAction
      //       type="view"
      //       onClicked={() =>
      //         router.push(
      //           `/carer-info/medical-history/health-and-safety?${info.getValue()}`
      //         )
      //       }
      //     />
      //   </Box>
      // ),
      // header: "Actions",
      // isSortable: false,
      // accessorFn: (row: any) => row.id,
      // id: "Actions",
      // cell: (info: any) => info.getValue(),
      // header: () => <span>Actions</span>,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="edit" onClicked={() => alert("Edit")} />
          <TableAction type="delete" onClicked={() => alert("Delete")} />
          <TableAction type="view" onClicked={() => alert("View")} />
          {/* <TableAction type="download" onClicked={() => alert("Download")} /> */}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  const HEALTH_AND_SAFETYDATA = [
    {
      // social_worker: "Palwasha",
      createdAt: 30 / 4 / 2011,
      nextInspectionDate: 30 / 4 / 2011,
      status: "Pending",
      // referral_date: 30 / 4 / 2011,
      // referred_by: "Madiha",
      // referred_role: "Social Worker",
    },
    {
      // social_worker: "John",
      createdAt: 30 / 4 / 2011,
      nextInspectionDate: 30 / 4 / 2011,
      status: "Completed",
      // referral_date: 30 / 4 / 2011,
      // referred_by: "khunsa",
      // referred_role: "Social Worker",
    },
  ];
  return (
    <>
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          onAdd={handleOpen}
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={HEALTH_AND_SAFETYDATA}
          columns={columns}
          // showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={false}
        />
      </Card>
    </>
  );
};
