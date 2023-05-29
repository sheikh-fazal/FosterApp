import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useOtherPoliciesTable } from "./useOtherPoliciesTable";

const OtherPoliciesTable = () => {
  const { tableHeaderRefTwo, router, columns, TableData } =
    useOtherPoliciesTable();
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Health and Social"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: "",
            query: { action: "add", id: "" },
          });
        }}
        onChanged={(data: any) => {}}
      />
      <CustomTable
        data={TableData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
};

export default OtherPoliciesTable;
