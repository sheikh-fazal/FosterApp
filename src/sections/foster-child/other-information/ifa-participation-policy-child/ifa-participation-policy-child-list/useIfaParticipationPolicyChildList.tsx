import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { columnsIfaParticipationPolicyTable } from ".";

const useIfaParticipationPolicyChildList = () => {
  const [fosterChildId, setFosterChildId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const deleteFosterChild = () => {
    setFosterChildId(null);
  };

  const closeDeleteModal = (id: string) => {
    setFosterChildId(null);
  };
  const openDeleteModel = (id: string) => {
    console.log(id);

    setFosterChildId(id);
  };
  const columnsIfaParticipationPolicyFunction =
    columnsIfaParticipationPolicyTable( router, openDeleteModel);

  return {
    tableHeaderRef,
    router,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsIfaParticipationPolicyFunction,
    fosterChildId,
    deleteFosterChild,
    closeDeleteModal,
  };
};

export default useIfaParticipationPolicyChildList;
