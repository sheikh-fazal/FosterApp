import React from "react";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import useChildExclusionInfoList from "./useChildExclusionInfoList";

export const ChildExclusionInfoList = () => {
  const {
    columnsChildExclusionInfoTableFuntion,
    data,
    router,
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    trainingProfileId,
    closeDeleteProfile,
    deleteTrainingProfile,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useChildExclusionInfoList();
  return (
    <>
      <DeleteModel
        open={trainingProfileId}
        onDeleteClick={deleteTrainingProfile}
        handleClose={closeDeleteProfile}
      />

      <Card>
        <TableHeader
          showAddBtn
          ref={tableHeaderRef}
          title="Child Exclusion Info"
          searchKey="search"
          onAdd={() => {
            router.push(
              "/foster-child/education-records/child-exclusion-info/new-child-exclusion-info"
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          columns={columnsChildExclusionInfoTableFuntion}
          data={data?.data}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isError={isError}
          isFetching={isFetching}
          isLoading={isLoading}
          isPagination={true}
          currentPage={1}
          totalPages={1}
        />
      </Card>
    </>
  );
};
