import { Box, Checkbox } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import TableHeader from '@root/components/TableHeader';
import DeleteModel from '@root/components/modal/DeleteModel';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

const ContextualSafeguardingTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [cancelDelete, setCancelDelete] = useState(false)
  const [data, setData] = useState([
    {
      requestFor: "Sf-1234",
      childrenName: "Ron Corner",
      suspectedPerpetrator: "Jack Corner",
      locationIncident: "Somewhere Over There",
      summary: "Once upon a time",
      refererName: "Tom Hanks",
    },
    {
      requestFor: "Sf-1234",
      childrenName: "Ron Corner",
      suspectedPerpetrator: "Jack Corner",
      locationIncident: "Somewhere Over There",
      summary: "Once upon a time",
      refererName: "Tom Hanks",
    },
    {
      requestFor: "Sf-1234",
      childrenName: "Ron Corner",
      suspectedPerpetrator: "Jack Corner",
      locationIncident: "Somewhere Over There",
      summary: "Once upon a time",
      refererName: "Tom Hanks",
    },
  ]);

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
      accessorFn: (row: any) => row.requestFor,
      id: "requestFor",
      cell: (info: any) => info.getValue(),
      header: () => <span>What is your
        request for?</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childrenName,
      id: "childrenName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Children Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.suspectedPerpetrator,
      id: "suspectedPerpetrator",
      cell: (info: any) => info.getValue(),
      header: () => <span>Suspected
        Perpetrator</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.locationIncident,
      id: "locationIncident",
      cell: (info: any) => info.getValue(),
      header: () => <span>Location of the Incident</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.summary,
      id: "summary",
      cell: (info: any) => info.getValue(),
      header: () => <span>Summary</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refererName,
      id: "refererName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referer name</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/safeguarding/child-protection/contextual-safeguarding/view-contextual-safeguarging",
                query: { action: "view", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/safeguarding/child-protection/contextual-safeguarding/edit-contextual-safeguarging",
                query: { action: "edit", id: "" },
              })
            }
          />

          <DeleteModel
            onDeleteClick={handleDelete}
            onCancleClick={() => setCancelDelete(!cancelDelete)}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  const handleDelete = () => {
    alert("deleted successfully")
    setCancelDelete(!cancelDelete)
  }

  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Contextual Safeguarding Operational Group
        Information"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/safeguarding/child-protection/contextual-safeguarding/add-contextual-safeguarding",
            query: { action: "add", id: "" },
          });
        }}
        onChanged={(data: any) => { }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => { }}
        onSortByChange={(data: any) => { }}
      />
    </>
  )
}

export default ContextualSafeguardingTable
