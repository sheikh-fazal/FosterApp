import { useState } from "react";
import { useRouter } from "next/router";
import { usePolicyVerticalAddNew } from "@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/usePolicyVerticalAddNew";

export const useOtherPoliciesTabsForm = () => {
  const { currentTab, setCurrentTab, handleNextTab, handlePreviousTab, reset } =
    usePolicyVerticalAddNew();
  const [isUploadDocumentOpenModal, setIsUploadDocumentOpenModal] =
    useState(false);
  const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  const navgiate = useRouter();

  const handleSubmit = (data: any) => {
    handleNextTab();
    reset();
  };

  const handleUploadedSubmit = () => {
    if (count === 1) {
      navgiate.push("/policies-and-guidelines/other-policies/");
    } else {
      setIsUploadDocumentOpenModal(true);
    }
  };

  const handleAction = (action: any, id: any) => {
    switch (action) {
      case "delete":
        setIsDeleteOpenModal(true);
        break;
      default:
        break;
    }
    console.log(id);
  };
  return {
    currentTab,
    setCurrentTab,
    handlePreviousTab,
    isUploadDocumentOpenModal,
    isDeleteOpenModal,
    setCount,
    handleSubmit,
    handleUploadedSubmit,
    handleAction,
    setIsUploadDocumentOpenModal,
    setIsDeleteOpenModal,
    count,
  };
};
