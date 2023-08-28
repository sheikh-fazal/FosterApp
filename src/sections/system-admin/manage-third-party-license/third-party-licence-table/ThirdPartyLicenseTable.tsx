import React from "react";
import { useThirdPartyLicenceTable } from "./useThirdPartyLicenseTable";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const ThirdPartyLicenceTable = ({ data }: any) => {
  console.log("active", data);
  const {
    tableHeaderRefTwo,
    router,
    theme,
    onDeleteConfirm,
    thirdPartyColumnTableColumns,
    isRecordSetForDelete,
    setIsRecordSetForDelete
  } = useThirdPartyLicenceTable();
  return (
    <>
      <CustomTable
        data={data}
        columns={thirdPartyColumnTableColumns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
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
      {isRecordSetForDelete && (
        <DeleteModel
          open={isRecordSetForDelete}
          handleClose={() => setIsRecordSetForDelete(false)}
          onDeleteClick={() => onDeleteConfirm?.()}
        />
      )}
    </>
  );
};

export default ThirdPartyLicenceTable;
