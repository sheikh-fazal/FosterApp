import React from "react";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import { DummyChildExclusionData } from ".";
import useOutSchoolActivityList from "./useOutSchoolActivityList";

export const OutSchoolActivityList = () => {
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
    isSuccess,
    isLoading,
    isFetching,
    isError,
    fosterChildId,
  } = useOutSchoolActivityList();
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
          title="Out of School Activity Info"
          searchKey="search"
          onAdd={() => {
            router.push(
              `/foster-child/education-records/out-of-school-activity/new-out-of-school-activity-info?${fosterChildId}`
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
          isPagination={false}
        />
      </Card>
    </>
  );
};
