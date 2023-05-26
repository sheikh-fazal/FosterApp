import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { useAnnualReviewTable } from "./useAnnualReviewTable";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import dayjs from "dayjs";
const AnnualReviewTable = () => {
  const { router, tableHeaderRefTwo } = useAnnualReviewTable();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      reviewDate: "10/10/2021",
      status: "Low",
    },
    {
      srNo: 2,
      reviewDate: "11/10/2021",
      status: "Med",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.reviewDate ?? "-",
      id: "reviewDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Review Date</span>,
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
      id: "actions",
      cell: (info: any) => (
        <TableAction
          size="small"
          type="view"
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-chronology-of-events/annual-review"
            )
          }
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Annual Review"
        searchKey="search"
        onChanged={(data: any) => {}}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </>
  );
};

export default AnnualReviewTable;
