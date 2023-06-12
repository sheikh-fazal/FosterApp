import React, { useRef, useState } from "react";
import { Box, useTheme } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { contactDirectoryTableData } from "./contact-directory-table";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// =============================================================================================================

const AGENCYOFFICERSTABS: any = ["Foster Carers", "Agency Key Roles", "Safeguarding Role", "LA Safeguarding Role", "Edit", "Child Advocate"];

// =============================================================================================================

export const useAgencySafeguardingOfficer = () => {
  const theme = useTheme();
  const tableHeaderRef = useRef();
  const [tabName, setTabName] = useState("");
  const [newTab, setNewTab] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const [selectedAlphabet, setSelectedAlphabet] = useState<any>("A");
  const [contactInfoModal, setContactInfoModal] = useState({ isToggle: false, data: {} });
  const [contactDirectoryTabs, setContactDirectoryTabs] = useState<any>(AGENCYOFFICERSTABS);

  const filteredData = contactDirectoryTableData?.filter((item: any) => item.name.charAt(0).toUpperCase() === selectedAlphabet);

  const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(i + 97).toUpperCase());

  const handleClick = (alphabet: any) => {
    setSelectedAlphabet(alphabet);
  };

  let tabsArr = !newTab
    ? contactDirectoryTabs.concat(<AddCircleIcon color="primary" onClick={() => handleAddTab("add")} />)
    : contactDirectoryTabs.concat(
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <input value={tabName} onChange={(e: any) => setTabName(e.target.value)} />
          <CheckCircleRoundedIcon sx={{ "&:focus, &:active": { boxShadow: "none" } }} color="primary" onClick={() => handleAddTab("remove")} />
        </Box>
      );

  const handleAddTab = (type: string) => {
    setNewTab(type === "add" ? true : false);
    if (tabName) {
      setContactDirectoryTabs([...contactDirectoryTabs, tabName]);
      setTabName("");
    }
  };

  return {
    tableHeaderRef,
    filteredData,
    tabsArr,
    alphabets,
    handleClick,
    activeTab,
    setActiveTab,
    contactInfoModal,
    setContactInfoModal,
    selectedAlphabet,
    contactDirectoryTabs,
    theme,
  };
};
