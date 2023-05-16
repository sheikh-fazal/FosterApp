import React, { useRef, useState } from "react";
import SafeguardingRole from "./safeguarding-role";
import { Box, Card, Typography } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Edit from "./edit";
import FosterCarer from "./foster-carer";
import AgencyRules from "./agency-roles";
import ChildAdvocate from "./child-advocate";
import LaSafeguardingRule from "./la-safeguarding-role";
import { safeguardingRole } from "./safeguarding-role/safegurading-role-data";

// ----------------------------------------------------------------------
const AGENCYOFFICERSTABS: any = [
  "Foster Carers",
  "Agency Key Roles",
  "Safeguarding Role",
  "LA Safeguarding Role",
  "Edit",
  "Child Advocate",
  <AddCircleIcon color="primary" />,
];

// ----------------------------------------------------------------------

const AgencySafeguardingOfficer = () => {
  const tableHeaderRef = useRef();
  const [selectedAlphabet, setSelectedAlphabet] = useState<any>("A");
  const [alphabetBox, setAlphabetBox] = useState("");

  const filteredData = safeguardingRole?.filter(
    (item: any) => item.name.charAt(0).toUpperCase() === selectedAlphabet
  );

  const alphabets = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 97).toUpperCase()
  );

  const handleClick = (alphabet: any) => {
    setSelectedAlphabet(alphabet);
  };
  console.log(alphabetBox);

  return (
    <Card sx={styles.card}>
      <TableHeader
        title={"Contact Directory"}
        ref={tableHeaderRef}
        searchKey="search"
        showAddBtn
        onAdd={() => {
          alert("add works");
        }}
      />
      <HorizaontalTabs
        setActiveTab={setAlphabetBox}
        tabsDataArray={AGENCYOFFICERSTABS}
      >
        <FosterCarer />
        <AgencyRules />
        <SafeguardingRole filteredData={filteredData} />
        <LaSafeguardingRule />
        <Edit />
        <ChildAdvocate />
      </HorizaontalTabs>
      {alphabetBox === "Safeguarding Role" && (
        <Box sx={styles.alphabetParentBox}>
          {alphabets.map((alphabet) => (
            <Box
              key={alphabet}
              component="p"
              sx={styles.aplhabetBox(selectedAlphabet, alphabet)}
              onClick={() => handleClick(alphabet)}
            >
              <Typography sx={styles.title}>{alphabet}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Card>
  );
};
export default AgencySafeguardingOfficer;

// ----------------------------------------------------------------------
// Styles
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
  title: {
    marginTop: "6px",
    fontWeight: "600",
    fontSize: "14",
    textAlign: "center",
  },
  aplhabetBox: (selectedAlphabet: any, alphabet: any) => ({
    cursor: "pointer",
    borderRadius: "3px 0px 0px 3px",
    clipPath:
      "polygon(23% 35%, 84% 35%, 100% 20%, 100% 95%, 87% 80%, 26% 80%, 0% 80%, 0 35%)",
    backgroundColor: selectedAlphabet === alphabet ? "#F6830F" : "transparent",
    color: selectedAlphabet === alphabet ? "#FFFFFF" : "#212529",
    boxShadow:
      selectedAlphabet === alphabet
        ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
        : "none",
    paddingBlock: "10px",
  }),
};