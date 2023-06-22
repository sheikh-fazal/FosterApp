import { useState } from "react";

export const useChildrenGuides = () => {
  const [addModal, setAddModal] = useState(false);
  const handleModal = () => setAddModal(!addModal);
  return {
    addModal,
    handleModal
  }
}