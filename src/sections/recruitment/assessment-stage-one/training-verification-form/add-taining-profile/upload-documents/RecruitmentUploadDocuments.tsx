import { Card } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import UploadDocumentsFormDialogbox from "./upload-documents-form-dialogbox/UploadDocumentsFormDialogbox";
import useRecruitmentUploadDocuments from "./useRecruitmentUploadDocuments";
import IsFetching from "@root/components/loaders/IsFetching";


const RecruitmentUploadDocuments = () => {
  const {
    data,
    openFormDialog,
    setOpenFormDialog,
    deleteList,
    isFetching,
    isLoading,
    columnsRecruitmentUploadFunction
  } = useRecruitmentUploadDocuments();

  return (
    <>
      {isLoading ? (
        <IsFetching isFetching={isLoading} />
      ) : (
        <Card>
          <TableHeader
            showAddBtn
            title="Uploaded Documents"
            onAdd={() => {
              setOpenFormDialog(true);
            }}
          />
          <CustomTable
            data={data?.data?.docs}
            columns={columnsRecruitmentUploadFunction}
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
          />
        </Card>
      )}

      <UploadDocumentsFormDialogbox
        openFormDialog={openFormDialog}
        setOpenFormDialog={setOpenFormDialog}
      />
    </>
  );
};

export default RecruitmentUploadDocuments;
