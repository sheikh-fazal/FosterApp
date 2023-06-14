import React, { Fragment } from "react";
import { Box } from "@mui/material";
import VericalTabs from "@root/components/VericalTabs";
import { FeelingTabs } from ".";

const Feeling = ({ setPageTitle }: any) => {
  return (
    <VericalTabs tabsDataArray={FeelingTabs} setActiveTab={setPageTitle}>
      {FeelingTabs?.map((item: any) => (
        <Fragment key={item?.index}>
          <Box>{item?.innerData && item?.innerData}</Box>
        </Fragment>
      ))}
    </VericalTabs>
  );
};

export default Feeling;
