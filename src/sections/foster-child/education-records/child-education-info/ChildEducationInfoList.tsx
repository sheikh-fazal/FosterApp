import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import WorkFlowModal from "@root/components/modal/workFlowModal";
// import { SELECT_FILTERS } from ".";
// import { useReferralListTable } from "./useReferralListTable";
import ShareModal from "@root/components/modal/shareModal";
import { useChildEducationInfo } from "./useChildEducationInfo";
import { TableData } from ".";
import { Card } from "@mui/material";

const ChildEducationInfoList = () => {
  const { columns, theme, router } = useChildEducationInfo();

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
              "/foster-child/education-records/child-education/add-child-education",
            query: {
              action: "add",
              id: "",
            },
          })
        }
        // onChanged={(data: any) => {
        //   selectHandler(data);
        // }}
      />
      <CustomTable
        data={TableData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
        rootSX={{ my: theme.spacing(2) }}
      />
    </Card>
  );
};

export default ChildEducationInfoList;
