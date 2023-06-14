import React, { Fragment } from "react";
import { Box, useTheme } from "@mui/material";
import VericalTabs from "@root/components/VericalTabs";
import { COMMUNICATINGTABSDATA } from ".";

const CommunicatingEffectively = ({ setPageTitle }: any) => {
  const theme: any = useTheme();

  return (
    <VericalTabs tabsDataArray={COMMUNICATINGTABSDATA} setActiveTab={setPageTitle}>
      {COMMUNICATINGTABSDATA?.map((item: any) => (
        <Fragment key={item?.index}>
          <Box>{item?.innerData && item?.innerData}</Box>
        </Fragment>
      ))}
    </VericalTabs>
  );
};

export default CommunicatingEffectively;
