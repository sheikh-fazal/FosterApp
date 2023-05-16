import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import useTrainingVerificationForm from "./useTrainingVerificationForm";

export default function TrainingVerificationForm() {
  const { columns, data, router } = useTrainingVerificationForm();
  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Training Profile"
          onAdd={() => {
            router.push(
              "/recruitment/assessment-stage-one/training-verification-form/add-taining-profile"
            );
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
          // rootSX={{ my: theme.spacing(2) }}
        />
      </Card>
    </>
  );
}
