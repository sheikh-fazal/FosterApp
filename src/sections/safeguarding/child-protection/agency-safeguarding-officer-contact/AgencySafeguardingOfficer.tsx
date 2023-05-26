import React, { Fragment } from "react";
import { Box, Card, Typography } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ContactInformationModal from "./contact-info-modal/ContactInfoModal";
import ContactDirectoryTable from "./contact-directory-table/ContactDirectory";
import { useAgencySafeguardingOfficer } from "./useAgencySafeguardingOfficer";
import { useContactDirectory } from "./contact-directory-table/useContactDirectory";

// =============================================================================

const AgencySafeguardingOfficer = () => {
  const { tableHeaderRef, filteredData, tabsArr, alphabets, handleClick, activeTab, setActiveTab, selectedAlphabet, contactDirectoryTabs } =
    useAgencySafeguardingOfficer();

  const { handleEditOpen, isEditModal } = useContactDirectory();

  return (
    <>
      <Card sx={styles.card}>
        <TableHeader title={"Contact Directory"} ref={tableHeaderRef} searchKey="search" showAddBtn onAdd={handleEditOpen} />
        <HorizaontalTabs tabsDataArray={tabsArr} setActiveTab={setActiveTab}>
          {contactDirectoryTabs.map((item: any, index: number) => (
            <Fragment key={index}>
              <ContactDirectoryTable data={filteredData} contactInfoModal={isEditModal} setContactInfoModal={handleEditOpen} />
            </Fragment>
          ))}
        </HorizaontalTabs>

        {typeof tabsArr.at(-1) !== typeof activeTab && (
          <Box sx={styles.alphabetParentBox}>
            {alphabets.map((alphabet: any) => (
              <Box key={alphabet} sx={styles.aplhabetBox(selectedAlphabet, alphabet)} onClick={() => handleClick(alphabet)}>
                <Typography sx={styles.alphabets}>{alphabet}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Card>
      {isEditModal && <ContactInformationModal open={isEditModal} onClose={handleEditOpen} />}
    </>
  );
};
export default AgencySafeguardingOfficer;

// =================================================================================================================

const styles = {
  card: {
    width: "100%",
    mx: 1.5,
    px: 1,
    py: 2,
    position: "relative",
    overflow: "visible",
  },
  alphabetParentBox: {
    position: "absolute",
    left: "-20px",
    top: "215px",
    width: "20px",
    overflowY: "auto",
    maxHeight: "490px",
  },
  alphabets: {
    marginTop: "6px",
    fontSize: "14",
    fontWeight: "600",
    textAlign: "center",
  },
  aplhabetBox: (selectedAlphabet: any, alphabet: any) => ({
    cursor: "pointer",
    paddingBlock: "10px",
    borderRadius: "3px 0px 0px 3px",
    color: selectedAlphabet === alphabet ? "#FFFFFF" : "#212529",
    backgroundColor: selectedAlphabet === alphabet ? "#F6830F" : "transparent",
    boxShadow: selectedAlphabet === alphabet ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
    clipPath: "polygon(23% 35%, 84% 35%, 100% 20%, 100% 95%, 87% 80%, 26% 80%, 0% 80%, 0 35%)",
  }),
};
