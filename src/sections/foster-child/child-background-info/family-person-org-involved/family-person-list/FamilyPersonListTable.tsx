import React from "react";
import router from "next/router";
import { Box, Card, Checkbox } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useFamilyPersonListTable } from "../useFamilyPersonListTable";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";

export default function FamilyPersonListTable() {
  const {
    data,
    setSearch,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    listDeleteHandler,
  } = useFamilyPersonListTable();

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
      accessorFn: (row: any) => row?.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.contactType,
      id: "contactType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact Type</span>,
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
                `/foster-child/child-background-info/family-person-org-involved/family-form-list`
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() => console.log(info.getValue())}
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Child Family / Persons & Org. Involved"
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          onAdd={() => {
            router.push(
              `/foster-child/child-background-info/family-person-org-involved/family-form-list`
            );
          }}
        />
        <CustomTable
          data={data?.family_details}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          showSerialNo
          currentPage={data?.data?.meta?.page ?? 1}
          totalPages={data?.data?.meta?.pages ?? 2}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
        />
      </Card>
    </>
  );
}
