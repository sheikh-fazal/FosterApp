import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useContextualSafeguardingTable } from "./useContextualSafeguardingTable";

const ContextualSafeguardingTable = () => {
  const { tableHeaderRefTwo, router, columns, TableData } =
    useContextualSafeguardingTable();

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

export default ContextualSafeguardingTable;
