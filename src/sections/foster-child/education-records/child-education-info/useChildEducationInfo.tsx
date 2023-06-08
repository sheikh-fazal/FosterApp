import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { defaultValues } from ".";
import Image from "next/image";
import UserImg from "../../../assets/img/ifaAvatar.png";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";

export const useChildEducationInfo = () => {
  const router = useRouter();
  const theme = useTheme();

  // const methods: any = useForm({
  //     defaultValues,
  // });

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
      accessorFn: (row: any) => row.Sr_No,
      id: "Sr_No",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.school_Name,
      id: "school_Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>School Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.classStudying,
      id: "classStudying",
      cell: (info: any) => info.getValue(),
      header: () => <span>Class Studying</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.schoolYear,
      id: "schoolYear",
      cell: (info: any) => info.getValue(),
      header: () => <span>School Year</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.currentSchool,
      id: "currentSchool",
      cell: (info: any) => info.getValue(),
      header: () => <span>Current School</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <DeletePrompt
          // onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push("")
            }
            // onClicked={() =>console.log(info,'info')}
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push("")
            }
            // onClicked={() =>console.log(info,'info')}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      
    },
  ];

  return {
    columns,
    theme,
    router,
  };
};
