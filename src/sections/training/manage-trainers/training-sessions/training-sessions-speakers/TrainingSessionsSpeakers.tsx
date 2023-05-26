import React from "react";
import { useTrainingSessionsSpeakers } from "./useTrainingSessionsSpeakers";
import VericalTabs from "@root/components/VericalTabs";
import { ScheduleDataTable } from "../training-sessions-schedule/schedule-data-table";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";

const TrainingSessionsSpeakers = () => {
  const { speakerDataMap } = useTrainingSessionsSpeakers();
  const tabs = [
    "All speakers",
    "Confirmed speakers",
    "Unconfirmed speakers",
  ];
  return (
    <div>
      {/* <VericalTabs tabsDataArray={speakerDataMap}>
        
      </VericalTabs> */}
      <VerticalSmallTabs tabs={tabs}>
        <ScheduleDataTable />
        <ScheduleDataTable />
        <ScheduleDataTable />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsSpeakers;
