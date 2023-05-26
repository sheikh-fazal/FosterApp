import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import useTrainingVerificationForm from "./useTrainingVerificationForm";
import DeleteModel from "@root/components/modal/DeleteModel";

export default function TrainingVerificationForm() {
  const {
    columnsTrainingVerificationFuntion,
    trainingPRofileData,
    router,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    headerChangeHandler,
    tableHeaderRef,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    trainingProfileId,
    closeDeleteProfile,
    deleteTrainingProfile
  } = useTrainingVerificationForm();
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
          disabled={isLoading}
          title="Training Profile"
          searchKey="search"
          onAdd={() => {
            router.push(
              "/recruitment/assessment-stage-one/training-verification-form/new-taining-profile"
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          data={trainingPRofileData}
          columns={columnsTrainingVerificationFuntion}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          currentPage={meta?.page}
          totalPages={meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
}
