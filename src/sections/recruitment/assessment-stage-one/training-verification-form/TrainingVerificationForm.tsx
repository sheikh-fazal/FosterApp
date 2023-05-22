import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import useTrainingVerificationForm from "./useTrainingVerificationForm";

export default function TrainingVerificationForm() {
  const {
    columns,
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
  } = useTrainingVerificationForm();
  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          ref={tableHeaderRef}
          disabled={isLoading}
          title="Training Profile"
          searchKey="search"
          onAdd={() => {
            router.push(
              "/recruitment/assessment-stage-one/training-verification-form/add-taining-profile"
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          data={trainingPRofileData}
          columns={columns}
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
