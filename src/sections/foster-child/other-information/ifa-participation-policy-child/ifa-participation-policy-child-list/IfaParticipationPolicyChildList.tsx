import TableHeader from "@root/components/TableHeader";
import React from "react";
import useIfaParticipationPolicyChildList from "./useIfaParticipationPolicyChildList";
import CustomTable from "@root/components/Table/CustomTable";
import { DummyData, columnsIfaParticipationPolicyTable } from ".";
import DeleteModel from "@root/components/modal/DeleteModel";

const IfaParticipationPolicyChildList = () => {
  const {
    tableHeaderRef,
    router,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsIfaParticipationPolicyFunction,
    fosterChildId,
    deleteFosterChild,
    closeDeleteModal,
  } = useIfaParticipationPolicyChildList();
  return (
    <>
      <DeleteModel
        open={fosterChildId}
        onDeleteClick={deleteFosterChild}
        handleClose={closeDeleteModal}
      />
      <TableHeader
        showAddBtn
        ref={tableHeaderRef}
        title="IFA Participation Policy"
        searchKey="search"
        onAdd={() => {
          router.push(
            "/foster-child/other-information/ifa-participation-policy-for-child/new-ifa-participation-policy-for-child"
          );
        }}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        columns={columnsIfaParticipationPolicyFunction}
        data={DummyData}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={false}
      />
    </>
  );
};

export default IfaParticipationPolicyChildList;
