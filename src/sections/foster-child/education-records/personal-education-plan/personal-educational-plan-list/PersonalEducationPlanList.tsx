import React from "react";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import { DummyChildExclusionData } from ".";
import useOutSchoolActivityList from "./usePersonalEducationPlanList";

export const PersonalEducationPlanList = () => {
  const {
    columnsChildExclusionInfoTableFuntion,
    // trainingPRofileData,
    data,
    router,
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    trainingProfileId,
    closeDeleteProfile,
    deleteTrainingProfile,
    isSuccess
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
          title="Personal Education Plan"
          searchKey="search"
          onAdd={() => {
            router.push(
              "/foster-child/education-records/personal-education-plan/new-personal-education-plan"
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          columns={columnsChildExclusionInfoTableFuntion}
          data={data?.data?.personal_education_plan}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isPagination={true}
        />
      </Card>
    </>
  );
};
