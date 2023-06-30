import React from "react";
import { useSafeCarePolicy } from "./useSafeCarePolicy";
import { Box } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SectionAForm from "./section-a/SectionAForm";
import SectionBForm from "./section-b/SectionBForm";

const SafeCarePolicy = () => {
  const { router } = useSafeCarePolicy();
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Section A", "Section B", "Upload Document"]}
      >
        <SectionAForm />
        <SectionBForm />
        <p>Up</p>
      </HorizaontalTabs>
    </Box>
  );
};

export default SafeCarePolicy;
