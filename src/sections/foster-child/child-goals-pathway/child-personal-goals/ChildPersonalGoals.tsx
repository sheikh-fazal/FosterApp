import CustomTable from "@root/components/Table/CustomTable";
import React, { useRef } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import { useChildPersonalGoal } from "./useChildPersonalGoal";
// import { columns } from ".";

export const ChildPersonalGoalsMain = () => {
  const {
    childPersonalGoalMockData,
    // setChildPersonalGoalMockData,
    tableHeaderRefTwo,
    // search,
    setSearch,
    columns
  } = useChildPersonalGoal();

  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Personal Goals"
        searchKey="search"
        // showAddBtn={false}
        // onAdd={() => {
        //   router.push({
        //     pathname:
        //       "/carer-info/background-checks/statutory-checks-list/local-authority",
        //     query: { action: "add", id: "" },
        //   });
        // }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        columns={columns}
        data={childPersonalGoalMockData}
        isFetching={false}
        isLoading={false}
        isError={false}
        isSuccess={true}
        totalPages={1}
        currentPage={1}
        onPageChange
        onSortByChange={() => {}}
        isPagination={true}
        // tableContainerSX = {}
        // rootSX = {}
        showSerialNo={false}
      />
    </>
  );
};
