import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import WorkFlowModal from "@root/components/modal/workFlowModal";
// import { SELECT_FILTERS } from ".";
// import { useReferralListTable } from "./useReferralListTable";
import ShareModal from "@root/components/modal/shareModal";
import { useChildEducationInfo } from "./useChildEducationInfo";
import { Card } from "@mui/material";

const ChildEducationInfoList = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    columns,
    setPage,
    theme,
  } = useChildEducationInfo();

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
          })
        }
        // onChanged={(data: any) => {
        //   selectHandler(data);
        // }}
      />
      <CustomTable
        data={data?.data?.education_info}
        columns={columns}
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
        onSortByChange={(data: any) => {}}
        rootSX={{ my: theme.spacing(2) }}
      />
    </Card>
  );
};

export default ChildEducationInfoList;
