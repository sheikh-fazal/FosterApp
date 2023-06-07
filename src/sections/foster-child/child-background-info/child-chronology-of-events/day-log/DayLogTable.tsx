import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import React from "react";

const DayLogTable = () => {
  const meetingListColumns = [
    {
      accessorFn: (row: any) => row?.dateOfOccurence,
      id: "dateOfOccurence",
      cell: (info: any) => info.getValue(),
      header: "Date of Occurence",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.type,
      id: "type",
      cell: (info: any) => info.getValue(),
      header: "Meeting Agenda",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.subject,
      id: "subject",
      cell: (info: any) => info.getValue(),
      header: "Subject",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: "Status",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => <TableAction type="view" onClicked={() => {}} />,
      header: "Actions",
      isSortable: false,
    },
  ];

  return <div>
<CustomTable
  data={[]}
  columns={meetingListColumns}
  // isLoading={isLoading}
  // isFetching={isFetching}
  // isError={isError}
  // isSuccess={isSuccess}
  // currentPage={meta?.page}
  // totalPages={meta?.pages}
  showSerialNo
  isPagination
  // onPageChange={pageChangeHandler}
  // onSortByChange={sortChangeHandler}
/>
</div>;
};

export default DayLogTable;
