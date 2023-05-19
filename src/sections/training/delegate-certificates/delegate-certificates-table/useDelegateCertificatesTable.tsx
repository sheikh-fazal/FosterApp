
import React, { useRef } from 'react'
import TableAction from '@root/components/TableAction';
import { useTableParams } from '@root/hooks/useTableParams';
import { TableData } from '.'
import { Box } from '@mui/material';

export const useDelegateCertificatesTable = () => {
    const tableHeaderRefTwo = useRef<any>();
    const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
      useTableParams();

    const columns = [
        {
          accessorFn: (row: any) => row.Attendee,
          id: "Attendee",
          cell: (info: any) => info.getValue(),
          header: () => <span>Attendee</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.Course_Id,
          id: "Course_Id",
          cell: (info: any) => info.getValue(),
          header: () => <span>Course ID</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.Course_Name,
          id: "Course_Name",
          cell: (info: any) => info.getValue(),
          header: () => <span>Course Name</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.Course_Type,
          id: "Course_Type",
          cell: (info: any) => info.getValue(),
          header: () => <span>Course Type</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.Status,
          id: "Status",
          cell: (info: any) => info.getValue(),
          header: () => <span>Status</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.Manage_Certificate,
          id: "Manage_Certificate",
          cell: (info: any) => info.getValue(),
          header: () => <span>Manage Certificate</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.Trainer,
          id: "Trainer",
          cell: (info: any) => info.getValue(),
          header: () => <span>Trainer (If Applicable)</span>,
          isSortable: true,
        },
        {
          id: "actions",
          cell: (info: any) => (
            <Box sx={{display:"flex",gap:"5px"}}>
            <TableAction size="small" type="view"
            //   onClicked={() =>
            //     router.push(
            //       "/carer-info/personal-info/carer-chronology-of-events/annual-review"
            //     )
            //   }
            />
            <TableAction size="small" type="print"/>
            <TableAction size="small" type="share"/>
            <TableAction size="small" type="edit"/>
            <TableAction size="small" type="delete"/>
            </Box>
          ),
          header: () => <span>actions</span>,
          isSortable: false,
        },
      ];
      
  return {
    tableHeaderRefTwo,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columns,
    TableData
  }
}
