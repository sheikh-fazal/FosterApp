import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { defaultValues } from ".";
import Image from "next/image";
import UserImg from "../../../assets/img/ifaAvatar.png";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { useGetAllEducationInfoListDataQuery } from "@root/services/foster-child/education-records/child-education-info/ChildEducationInfoList";

export const useChildEducationInfo = () => {
  const router = useRouter();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };
  // const methods: any = useForm({
  //     defaultValues,
  // });

  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllEducationInfoListDataQuery(params);

  const columns = [
    // {
    //   id: "select",
    //   header: ({ table, row }: any) => {
    //     console.log(table.getSelectedRowModel().flatRows);
    //     return (
    //       <Box>
    //         <Checkbox
    //           checked={table.getIsAllRowsSelected()}
    //           onChange={table.getToggleAllRowsSelectedHandler()}
    //         />
    //       </Box>
    //     );
    //   },
    //   cell: ({ row, table }: any) => (
    //     <Box>
    //       <Checkbox
    //         disabled={row?.original?.Assigned}
    //         checked={row?.original?.Assigned ? false : row.getIsSelected()}
    //         onChange={row.getToggleSelectedHandler()}
    //       />
    //     </Box>
    //   ),
    // },
    {
      accessorFn: (row: any) => row.school,
      id: "school",
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
      accessorFn: (row: any) => row.school,
      id: "school",
      cell: (info: any) => info.getValue(),
      header: () => <span>Current School</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => {
        console.log(info);

        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
            // onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
            />
            <TableAction
              type="edit"
              onClicked={() =>
                router.push(
                  `/foster-child/education-records/child-education/child-education-info/${info?.row?.original?.id}?action=edit`
                )
              }
              // onClicked={() =>console.log(info,'info')}
            />
            <TableAction
              type="view"
              onClicked={() =>
                router.push(
                  `/foster-child/education-records/child-education/child-education-info/${info?.row?.original?.id}?action=view`
                )
              }
              // onClicked={() =>console.log(info,'info')}
            />
          </Box>
        );
      },
      header: () => <span>actions</span>,
    },
  ];

  return {
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    theme,
    setPage,
  };
};
