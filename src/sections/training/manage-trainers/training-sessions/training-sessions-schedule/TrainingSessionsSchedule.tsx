import VericalTabs from "@root/components/VericalTabs";
import React from "react";
import { useTrainingSessionsSchedule } from "./useTrainingSessionsSchedule";
import { ScheduleDataTable } from "./schedule-data-table";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import { Box } from "@mui/material";

const TrainingSessionsSchedule = () => {
  const { scheduleDataMap } = useTrainingSessionsSchedule();
  console.log(scheduleDataMap);
  const tabs = [
    "Full Schedule",
    "Thursday schedule (11/18)",
    "Friday schedule (11/19)",
    "Full",
  ];
  return (
    <div>
      {/* <VericalTabs tabsDataArray={scheduleDataMap}>
        <ScheduleDataTable />
      </VericalTabs> */}
      <VerticalSmallTabs tabs={tabs}>
        <ScheduleDataTable />
        <ScheduleDataTable />
        <ScheduleDataTable />
        <ScheduleDataTable />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsSchedule;
