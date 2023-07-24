import { useState } from "react";

// ============================================================================================

export const useContactDirectory = () => {
  const [isShareModal, setIsShareModal] = useState(false);
  const [isPhoneModal, setIsPhoneModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const handleEditClose = () => setIsEditModal(!isEditModal);
  const handleEditOpen = () => setIsEditModal(!isEditModal);
  const handleShareClose = () => setIsShareModal(!isShareModal);
  const handleEmailClose = () => setIsEmailModal(!isEmailModal);
  const handlePhoneClose = () => setIsPhoneModal(!isPhoneModal);
  const handleDeleteClose = () => setIsDeleteModal(!isDeleteModal);

  const handleTableAction = (type: string, id: string) => {
    switch (type) {
      case "edit":
        return setIsEditModal(!isEditModal);
      case "share":
        return setIsShareModal(!isShareModal);
      case "email":
        return setIsEmailModal(!isEmailModal);
      case "phone":
        return setIsPhoneModal(!isPhoneModal);
      case "delete":
        return setIsDeleteModal(!isDeleteModal);
      case "whatsapp":
        return alert("this is whatsapp");
      case "inactiveLock":
        return alert("this is inactiveLock");
      default:
        break;
    }
  };

  return {
    isShareModal,
    setIsShareModal,
    isEmailModal,
    setIsEmailModal,
    isDeleteModal,
    setIsDeleteModal,
    isPhoneModal,
    isEditModal,
    setIsPhoneModal,
    handlePhoneClose,
    handleTableAction,
    handleShareClose,
    handleEmailClose,
    handleDeleteClose,
    handleEditOpen,
    handleEditClose,
  };
};

