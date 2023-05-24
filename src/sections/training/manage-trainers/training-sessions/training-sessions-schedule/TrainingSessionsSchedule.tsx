import VericalTabs from "@root/components/VericalTabs";
import React from "react";
import { useTrainingSessionsSchedule } from "./useTrainingSessionsSchedule";
import { ScheduleDataTable } from "./schedule-data-table";

const TrainingSessionsSchedule = () => {
  const { scheduleDataMap } = useTrainingSessionsSchedule();
  console.log(scheduleDataMap);
  return (
    <div>
      <VericalTabs tabsDataArray={scheduleDataMap}>
        <ScheduleDataTable />
      </VericalTabs>
    </div>
  );
};

export default TrainingSessionsSchedule;
