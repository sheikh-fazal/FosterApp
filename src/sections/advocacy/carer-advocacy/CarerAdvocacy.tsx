import React from "react";
import { Grid } from "@mui/material";
import PieChart from "./carer-advocacy-charts/PieChart";
import BarChart from "./carer-advocacy-charts/BarChart";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UpcomingMeetings from "./upcoming-meetings/UpcomingMeetings";
import FosterCarerTable from "./foster-carer-table/FosterCarerTable";

// ============================================================================================

const CarerAdvocacy = () => {
  return (
    <>
      <FosterCarerTable />
      <Grid container spacing={2} sx={{ mt: "initial" }}>
        <Grid item lg={6} xs={12}>
          <HorizaontalTabs
            tabsDataArray={["Total Advocacy by Carer - Pie Chart", "Total Advocacy by Carer - Bar Chart"]}
            variant="fullWidth"
            spacing={0}
          >
            <PieChart />
            <BarChart />
          </HorizaontalTabs>
        </Grid>
        <Grid item lg={6} xs={12}>
          <UpcomingMeetings />
        </Grid>
      </Grid>
    </>
  );
};

export default CarerAdvocacy;