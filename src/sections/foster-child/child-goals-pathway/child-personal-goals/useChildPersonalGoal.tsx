import React, { useRef } from "react";
import { CHILD_PERSONAL_GOALS_MOCK_DATA } from ".";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export const useChildPersonalGoal = () => {
  const route = useRouter();
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const [childPersonalGoalMockData, setChildPersonalGoalMockData] =
    React.useState(CHILD_PERSONAL_GOALS_MOCK_DATA);

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
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childId,
      id: "childId",
      cell: (info: any) => info.getValue(),
      header: () => <span>fostering Child ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childFullName,
      id: "childFullName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Full Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.goalName,
      id: "goalName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Goal Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.comments,
      id: "comments",
      cell: (info: any) => info.getValue(),
      header: () => <span>Comments</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box display={"flex"} gap={0.5}>
          <TableAction
            type="view"
            onClicked={() =>
              route.push({
                pathname: `child-personal-goals/personal-goals-list-view`,
                // query: { name: checklistName, id: info.row.original.id, action: "view" },
              })
            }
          />
          {/* <TableAction
                type="print"
                onClicked={() => console.log(info.row.original.id)}
              /> */}
          {/* <TableAction type="download" /> */}
        </Box>
      ),
      header: () => <span>actions</span>,
    },
  ];
  return {
    childPersonalGoalMockData,
    setChildPersonalGoalMockData,
    tableHeaderRefTwo,
    search,
    setSearch,
    columns,
  };
};
