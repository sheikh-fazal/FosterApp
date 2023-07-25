// import React from "react";
// import router from "next/router";
// import { Box, Card, Checkbox } from "@mui/material";
// import CustomTable from "@root/components/Table/CustomTable";
// import TableHeader from "@root/components/TableHeader";
// import TableAction from "@root/components/TableAction";
// import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
// import useDayLogJournalEntriesTable from "./useDayLogJournalEntriesTable";

// export default function DayLogJournalEntriesTable() {
//   const {
//     data,
//     headerChangeHandler,
//     isError,
//     isLoading,
//     isSuccess,
//     isFetching,
//     listDeleteHandler,
//     pageChangeHandler,
//     sortChangeHandler,
//   } = useDayLogJournalEntriesTable();

//   const columns = [
//     {
//       id: "select",
//       header: ({ table, row }: any) => {
//         console.log(table.getSelectedRowModel().flatRows);
//         return (
//           <Box>
//             <Checkbox
//               checked={table.getIsAllRowsSelected()}
//               onChange={table.getToggleAllRowsSelectedHandler()}
//             />
//           </Box>
//         );
//       },
//       cell: ({ row, table }: any) => (
//         <Box>
//           <Checkbox
//             disabled={row?.original?.Assigned}
//             checked={row?.original?.Assigned ? false : row.getIsSelected()}
//             onChange={row.getToggleSelectedHandler()}
//           />
//         </Box>
//       ),
//     },
//     {
//       accessorFn: (row: any) => row.srNo,
//       id: "srNo",
//       cell: (info: any) => info.getValue(),
//       header: () => <span>Sr.No</span>,
//       isSortable: true,
//     },
//     {
//       accessorFn: (row: any) => row.date,
//       id: "date",
//       cell: (info: any) => info.getValue(),
//       header: () => <span>Date of Occurance/Time</span>,
//       isSortable: true,
//     },
//     {
//       accessorFn: (row: any) => row.type,
//       id: "type",
//       cell: (info: any) => info.getValue(),
//       header: () => <span>Type</span>,
//       isSortable: true,
//     },
//     {
//       accessorFn: (row: any) => row.subject,
//       id: "subject",
//       cell: (info: any) => info.getValue(),
//       header: () => <span>Subject</span>,
//       isSortable: true,
//     },
//     {
//       accessorFn: (row: any) => row.status,
//       id: "status",
//       cell: (info: any) => info.getValue(),
//       header: () => <span>Status</span>,
//       isSortable: true,
//     },
//     {
//       accessorFn: (row: any) => row.locked,
//       id: "locked",
//       cell: (info: any) => info.getValue(),
//       header: () => <span>Locked</span>,
//       isSortable: true,
//     },
//     {
//       accessorFn: (row: any) => row?.id,
//       id: "actions",
//       cell: (info: any) => (
//         <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
//           <TableAction
//             type="edit"
//             onClicked={() =>
//               router.push(
//                 `/foster-child/child-day-log/day-log-journal-entries/add-day-log-journal-form${info.getValue()}/edit`
//               )
//             }
//           />
//           <TableAction
//             type="view"
//             onClicked={() =>
//               router.push(
//                 `/foster-child/child-day-log/day-log-journal-entries/add-day-log-journal-form?action=view${info.getValue()}/view`
//               )
//             }
//           />
//           <DeletePrompt
//             onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
//           />
//         </Box>
//       ),
//       header: () => <span>Actions</span>,
//       isSortable: false,
//     },
//   ];

//   return (
//     <>
//       <Card>
//         <TableHeader
//           showAddBtn
//           title="Day Log/Journal Entries"
//           onChanged={headerChangeHandler}
//           onAdd={() => {
//             router.push(
//               `/foster-child/child-day-log/day-log-journal-entries/add-day-log-journal-form`
//             );
//           }}
//         />
//         <CustomTable
//           data={data}
//           showSerialNo
//           isError={isError}
//           columns={columns}
//           isSuccess={isSuccess}
//           isLoading={isLoading}
//           isFetching={isFetching}
//           currentPage={data?.meta?.page}
//           totalPages={data?.meta?.pages}
//           onPageChange={pageChangeHandler}
//           onSortByChange={sortChangeHandler}
//         />
//       </Card>
//     </>
//   );
// }
