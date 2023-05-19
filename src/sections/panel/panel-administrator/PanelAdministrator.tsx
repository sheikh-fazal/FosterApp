import React from "react";
import { data } from ".";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { usePanelAdministrator } from "./usePanelAdministrator";

// ===================================================================

const PanelAdministrator = () => {
  const { theme, columns } = usePanelAdministrator();
  return (
    <>
      <TableHeader
        title="Panel Case List"
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
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

export default PanelAdministrator;