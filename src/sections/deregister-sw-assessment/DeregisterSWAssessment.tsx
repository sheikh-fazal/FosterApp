import { Box, Card, Checkbox } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import TableHeader from '@root/components/TableHeader'
import React from 'react'

const DeregisterSWAssessment = () => {
  const SELECT_FILTERS = [
    {
      key: "status",
      label: "Status",
      options: [{ label: "Passed", value: "Passed" }],
    },
  ];
  const data = [
    {
      srNo: '1',
      assessmentItem: 'uncontested resignation',
      status: 'Passed',
      socialWorker: 'XYZ'
    }
  ];
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) =>
        <Box display={'flex'} alignItems={'center'}>
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
          <span>Sr. No</span>
        </Box>,
      cell: ({ row, table }: any) =>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'10px'}>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
          <span>{row?.original?.srNo}</span>
        </Box>,
    },
    {
      accessorFn: (row: any) => row.assessmentItem,
      id: "assessmentItem",
      cell: (info: any) => info.getValue(),
      header: () => <span>Assessment Item</span>,
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
      accessorFn: (row: any) => row.socialWorker,
      id: "socialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Social Worker</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit","view"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => console.log(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title={'De-reg Assessment Item'}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showAddBtn
        onAdd={() => { }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isError={false}
        isFetching={false}
        isSuccess={true}
        rootSX={{ mt: 1 }}
      />
    </Card>
  )
}

export default DeregisterSWAssessment