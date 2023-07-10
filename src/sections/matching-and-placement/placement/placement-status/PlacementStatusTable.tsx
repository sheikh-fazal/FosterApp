import React from "react";
import { fosterCarerData } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { usePlacementStatusTable } from "./usePlacementStatusTable";
import CustomTable from "@root/components/Table/CustomTable";

// ============================================================================================

const PlacementStatusTable = () => {
  const { placementStatusColumns, theme, SELECT_FILTERS } = usePlacementStatusTable();
  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader
        title="Placement Status"
        rootSX={{ overflowX: "scroll" }}
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={fosterCarerData}
        columns={placementStatusColumns}
        isLoading={false}
        showSerialNo={true}
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
    </Card>
  );
};

export default PlacementStatusTable;
