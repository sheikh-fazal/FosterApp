import React from "react";
import { TableContainer } from "@mui/material";
import PhoneModal from "../phone-modal/PhoneModal";
import ShareModal from "@root/components/modal/shareModal";
import { useContactDirectory } from "./useContactDirectory";
import DeleteModel from "@root/components/modal/DeleteModel";
import CustomTable from "@root/components/Table/CustomTable";
import SendEmailModal from "../../../../../components/modal/SendEmailModal/SendEmailModal";

// ===========================================================================================

const ContactDirectory = ({ filteredData,contactInfoModal,setContactInfoModal }: any) => {
  const {
    agencySafeguardingColumns,
    isShareModal,
    setIsShareModal,
    isEmailModal,
    setIsEmailModal,
    isDeleteModal,
    setIsDeleteModal,
    isPhoneModal,
    setIsPhoneModal,
  } = useContactDirectory(contactInfoModal,setContactInfoModal);

  return (
    <>
      <TableContainer>
        <CustomTable
          data={filteredData}
          rootSX={{ overflowX: "scroll" }}
          columns={agencySafeguardingColumns}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
        />
      </TableContainer>
      {isShareModal && <ShareModal open={isShareModal} data={[{ email: "Adadsa@gmail.com" }]} handleClose={() => setIsShareModal(false)} />}
      {isEmailModal && <SendEmailModal open={isEmailModal} handleClose={() => setIsEmailModal(false)} />}
      {isDeleteModal && <DeleteModel open={isDeleteModal} handleClose={() => setIsDeleteModal(false)} />}
      {isPhoneModal && <PhoneModal setIsPhoneModal={setIsPhoneModal} />}
    </>
  );
};
export default ContactDirectory;