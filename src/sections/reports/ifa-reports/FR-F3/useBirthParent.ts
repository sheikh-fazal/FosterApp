import { useRouter } from "next/router";
import { useState } from "react";

export const useBirthParent = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const router = useRouter();
  const path = '/reports/ifa-reports/FR-F3/add';
  const handleSearch = () => { };
  const handleCloseDeleteModal = () => setOpenDelete(!openDelete);
  const handleAction = (action?: string, id?: string) => {
    switch (action) {
      case "edit":
        router.push({ pathname: path });
        break;
      case "view":
        router.push({ pathname: path });
        break;
      case "delete":
        setOpenDelete(true);
        break;
      case "print":
        window.print();
      default:
        break;
    }
  };
  return {
    handleSearch,
    handleAction,
    openDelete,
    handleCloseDeleteModal
  }
}