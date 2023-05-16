import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { columns } from "./index";
import { useAnnualReviewTable } from "./useAnnualReviewTable";
const AnnualReviewTable = () => {
  const { router, tableHeaderRefTwo, pageChangeHandler, sortChangeHandler } =
    useAnnualReviewTable();
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

  return (
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
  );
};

export default AnnualReviewTable;
