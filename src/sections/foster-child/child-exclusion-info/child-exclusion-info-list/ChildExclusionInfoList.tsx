import React from "react";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import useChildExclusionInfoList from "./useChildExclusionInfoList";
import { DummyChildExclusionData } from ".";

export const ChildExclusionInfoList = () => {
  const {
    columnsChildExclusionInfoTableFuntion,
    // trainingPRofileData,
    router,
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    trainingProfileId,
    closeDeleteProfile,
    deleteTrainingProfile,
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
            router.push('/foster-child/education-records/child-exclusion-info/new-child-exclusion-info');
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          columns={columnsChildExclusionInfoTableFuntion}
          data={DummyChildExclusionData}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={false}

        />
      </Card>
    </>
  );
}
