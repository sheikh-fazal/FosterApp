import React from "react";
import { data } from ".";
import { usePanelAgenda } from "./usePanelAgenda";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";

// =======================================================================

const PanelAgenda = () => {
  const { theme, router, columns } = usePanelAgenda();

  return (
    <>
      <TableHeader
        title="Panel Case List"
        ref={TableHeader}
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push("/panel/panel-tools/agenda/panel-agenda-form");
        }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />
    </>
  );
};
export default PanelAgenda;