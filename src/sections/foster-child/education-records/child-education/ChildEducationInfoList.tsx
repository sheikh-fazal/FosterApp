import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import WorkFlowModal from "@root/components/modal/workFlowModal";
// import { SELECT_FILTERS } from ".";
// import { useReferralListTable } from "./useReferralListTable";
import ShareModal from "@root/components/modal/shareModal";
import { useChildEducationInfo } from "./useChildEducationInfo";
import { Card } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";

const ChildEducationInfoList = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    educationInfoTableColumns,
    setPage,
    theme,
    onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
  } = useChildEducationInfo();
  console.log(router?.query);

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title="Child Education Info"
        searchKey="search"
        // selectFilters={SELECT_FILTERS}
        showAddBtn
        onAdd={() =>
          router.push({
            pathname:
              "/foster-child/education-records/child-education/child-education-info",
            query: {
              ...(!!router?.query?.fosterChildId && {
                fosterChildId: router?.query?.fosterChildId,
              }),
            },
          })
        }
        onChanged={(data: any) => {
          setSearchValue(data?.search);
        }}
      />
      <CustomTable
        data={data?.data?.education_info}
        columns={educationInfoTableColumns}
        isLoading={isLoading}
        showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page ?? 1}
        totalPages={data?.data?.meta?.pages ?? 2}
        onPageChange={(data: any) => {
          setPage((page: any) => data - 1);
        }}
      />
      {isRecordSetForDelete && (
        <DeleteModel
          open={isRecordSetForDelete}
          handleClose={() => setIsRecordSetForDelete(false)}
          onDeleteClick={() => onDeleteConfirm?.()}
        />
      )}
    </Card>
  );
};

export default ChildEducationInfoList;
