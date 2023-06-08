import React from "react";
import { useSafeCarePolicy } from "./useSafeCarePolicy";
import { Box } from "@mui/material";
import TableHeader from "@root/components/TableHeader";

const SafeCarePolicy = () => {
  const { tableHeaderRef } = useSafeCarePolicy();
  return (
    <Box>
      <TableHeader
        ref={tableHeaderRef}
        title="Safe Care Policy"
        searchKey="search"
        showAddBtn={true}
        onAdd={() => console.log("Test")}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
    </Box>
  );
};

export default SafeCarePolicy;
